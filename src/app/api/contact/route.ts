import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { client as sanityClient } from "@/lib/sanity";

const MAX_FIELD_LENGTH = 5000;

async function resolveRecipient(): Promise<string | null> {
  try {
    const email = await sanityClient.fetch<string | null>(
      `*[_type == "contactPage" && _id == "contactPage"][0].email`
    );
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return email;
  } catch {
    // fall through to env
  }
  return process.env.CONTACT_EMAIL_TO || null;
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
  const to = await resolveRecipient();

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
    subject: `[Website] ${subject} — ${name}`,
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

  return NextResponse.json({ ok: true });
}
