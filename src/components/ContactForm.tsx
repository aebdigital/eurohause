"use client";

import { useState } from "react";
import RollText from "./RollText";

export default function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Vaša správa bola úspešne odoslaná. Čoskoro sa vám ozveme." });
        form.reset();
      } else {
        const err = await res.json();
        throw new Error(err.error || "Chyba pri odosielaní");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Nepodarilo sa odoslať správu. Skúste to prosím neskôr alebo nás kontaktujte telefonicky.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Meno *</label>
          <input type="text" id="name" name="name" required placeholder="Vaše meno" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required placeholder="vas@email.sk" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefón</label>
        <input type="tel" id="phone" name="phone" placeholder="+421 ..." />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Predmet</label>
        <input type="text" id="subject" name="subject" placeholder="O čo sa zaujímate?" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Správa *</label>
        <textarea id="message" name="message" rows={6} required placeholder="Napíšte nám viac informácií..." />
      </div>

      <button type="submit" className="contact-submit-btn" disabled={submitting}>
        {submitting ? (
          <>
            Odosiela sa... <span className="spinner"></span>
          </>
        ) : (
          <RollText text="Odoslať správu" />
        )}
      </button>

      {status.type && (
        <div className={`form-status is-visible is-${status.type}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
