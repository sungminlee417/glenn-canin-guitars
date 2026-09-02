import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

const PATH_BY_TYPE: Record<string, string> = {
  homePage: "/",
  aboutPage: "/about",
  contactPage: "/contact",
  doubletopsPage: "/doubletops",
  forSalePage: "/for-sale",
  galleryPage: "/gallery",
  orderingPage: "/ordering",
  playersPage: "/players",
  videosPage: "/videos",
};

const GLOBAL_TYPES = new Set(["footerSettings", "navigationSettings"]);

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "SANITY_REVALIDATE_SECRET is not configured on the server." },
      { status: 500 }
    );
  }

  const signature = req.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature) {
    return NextResponse.json({ error: "Missing signature header." }, { status: 401 });
  }

  const rawBody = await req.text();
  const valid = await isValidSignature(rawBody, signature, secret);
  if (!valid) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let body: { _type?: string };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const type = body._type;
  if (!type) {
    return NextResponse.json({ error: "Missing _type in payload." }, { status: 400 });
  }

  if (GLOBAL_TYPES.has(type)) {
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, scope: "layout", type });
  }

  const path = PATH_BY_TYPE[type];
  if (!path) {
    return NextResponse.json({ revalidated: false, message: `No path mapping for _type "${type}".` });
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path, type });
}
