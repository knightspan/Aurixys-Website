import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1).max(200),
  organization: z.string().max(200).optional(),
  email: z.string().email().max(320),
  subject: z.enum(["Partnership", "Press", "Careers", "Other"]),
  message: z.string().min(10).max(5000),
});

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.format() }, { status: 422 });
  }

  const webhook = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "aurixys.com", ...parsed.data }),
      });
    } catch (err) {
      console.error("[contact] webhook failed:", err);
    }
  } else {
    console.log("[contact] (no webhook configured) received:", parsed.data);
  }

  return NextResponse.json({ ok: true });
}
