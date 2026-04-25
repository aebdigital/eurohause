import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const api_key = process.env.SMTP2GO_API_KEY;
    const recipient = process.env.CONTACT_RECIPIENT || "konatel@eurohause.eu";

    if (!api_key) {
      console.error("SMTP2GO_API_KEY is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: api_key,
        to: [recipient],
        sender: "Eurohause Web <noreply@eurohause.eu>",
        subject: subject || `Nová správa z webu od: ${name}`,
        text_body: `
Meno: ${name}
Email: ${email}
Telefón: ${phone || "Neuvedené"}
Predmet: ${subject || "Kontaktný formulár"}

Správa:
${message}
        `,
        html_body: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #265286; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nová správa z webu Eurohause</h2>
            <p><strong>Meno:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefón:</strong> ${phone || "Neuvedené"}</p>
            <p><strong>Predmet:</strong> ${subject || "Kontaktný formulár"}</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin-top: 0;"><strong>Správa:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (data.data && data.data.error) {
      console.error("SMTP2GO API Error:", data.data.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
