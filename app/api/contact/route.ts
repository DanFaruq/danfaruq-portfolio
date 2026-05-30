import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, contact, message } = await req.json()

  if (!name || !contact || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "faruqdaniyan@gmail.com",
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`,
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ ok: true })
}
