import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { client as sanityClient } from "@/lib/sanity";

const MAX_FIELD_LENGTH = 5000;

async function resolveContactInfo(): Promise<{ email: string | null; phone: string | null }> {
  try {
    const result = await sanityClient.fetch<{ email?: string; phone?: string } | null>(
      `*[_type == "contactPage" && _id == "contactPage"][0]{email, phone}`
    );
    const email = result?.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email)
      ? result.email
      : process.env.CONTACT_EMAIL_TO || null;
    return { email, phone: result?.phone ?? null };
  } catch {
    return { email: process.env.CONTACT_EMAIL_TO || null, phone: null };
  }
}

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.slice(0, MAX_FIELD_LENGTH).trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const { email: to, phone } = await resolveContactInfo();

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);
  const honeypot = sanitize(body.website);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New inquiry: ${subject} — ${name}`,
    text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    html: `
      <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#1c1917">
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr style="border:none;border-top:1px solid #e7e5e4;margin:16px 0" />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message ?? "Could not send message." },
      { status: 502 }
    );
  }

  await sendAutoReply({ resend, from, to: email, name, subject, message, phone });

  return NextResponse.json({ ok: true });
}

async function sendAutoReply(args: {
  resend: Resend;
  from: string;
  to: string;
  name: string;
  subject: string;
  message: string;
  phone: string | null;
}): Promise<void> {
  const { resend, from, to, name, subject, message, phone } = args;
  const firstName = name.split(/\s+/)[0] || name;
  const phoneLine = phone
    ? `If your inquiry is time-sensitive, you can also reach Glenn at ${phone}.`
    : null;

  try {
    await resend.emails.send({
      from,
      to,
      subject: `Thanks for reaching out — Glenn Canin Guitars`,
      text: [
        `Hi ${firstName},`,
        ``,
        `Thanks for your message about "${subject}." Glenn has received it and will get back to you personally within a few days.`,
        phoneLine,
        ``,
        `— Glenn Canin Guitars`,
        ``,
        `─────────────────`,
        `Your message:`,
        message,
      ].filter(Boolean).join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#1c1917;max-width:560px">
          <div style="border-bottom:2px solid #d97706;padding-bottom:12px;margin-bottom:24px">
            <p style="font-family:'Cinzel',Georgia,serif;font-size:20px;letter-spacing:0.04em;color:#78350f;margin:0">
              GLENN CANIN GUITARS
            </p>
          </div>
          <p>Hi ${escapeHtml(firstName)},</p>
          <p>
            Thanks for your message about <strong>&ldquo;${escapeHtml(subject)}&rdquo;</strong>.
            Glenn has received it and will get back to you personally within a few days.
          </p>
          ${phoneLine ? `<p style="color:#57534e;font-size:14px">${escapeHtml(phoneLine)}</p>` : ""}
          <p style="margin-top:32px">— Glenn Canin Guitars</p>
          <hr style="border:none;border-top:1px solid #e7e5e4;margin:24px 0" />
          <p style="color:#78716c;font-size:13px;margin-bottom:8px"><strong>Your message:</strong></p>
          <p style="white-space:pre-wrap;color:#57534e;font-size:14px">${escapeHtml(message)}</p>
        </div>
      `,
    });
  } catch {
    // Auto-reply is best-effort. Primary email already succeeded; don't fail the request.
  }
}
