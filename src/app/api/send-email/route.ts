import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const subject = String(form.get("subject") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Vyplňte všetky povinné polia (meno, email, správa)." },
      { status: 400 }
    );
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json(
      { success: false, message: "Neplatný email formát." },
      { status: 400 }
    );
  }

  const body =
    `Nová správa z Eurohause kontaktného formulára\n\n` +
    `Meno: ${name}\n` +
    `Email: ${email}\n` +
    (phone ? `Telefón: ${phone}\n` : "") +
    (subject ? `Predmet: ${subject}\n` : "") +
    `Správa: ${message}\n\n` +
    `Čas odoslania: ${new Date().toLocaleString("sk-SK")}\n` +
    `Odoslané cez: eurohause.eu`;

  // TODO: wire up an SMTP provider (e.g. Resend, SendGrid, Nodemailer) here.
  // For now we log so the form has a working endpoint during development.
  console.log("[contact-form]", { to: "asistent@eurohause.eu", subject, body });

  return NextResponse.json({
    success: true,
    message: "Správa bola úspešne odoslaná. Ďakujeme za kontakt!",
  });
}
