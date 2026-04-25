"use client";

import { useEffect } from "react";

export default function PrivacyPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <div
      id="privacy-popup"
      className={`privacy-popup${open ? " active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="privacy-popup-content">
        <div className="privacy-popup-header">
          <h2>Ochrana osobných údajov</h2>
          <button className="privacy-popup-close" onClick={onClose} aria-label="Zavrieť">
            &times;
          </button>
        </div>
        <div className="privacy-popup-body">
          <div className="company-info">
            <strong>EUROHAUSE s. r. o.</strong>
            <br />
            <a
              href="https://goo.gl/maps/3SL2KSs7xCSn8Evp7"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "underline", color: "#265286" }}
            >
              Orviská cesta 7137, 921 01 Piešťany
            </a>
            <br />
            Slovenská republika
            <br />
            IČO: 36286087, DIČ: 2022162461
            <br />
            IČ DPH: SK2022162461, podľa §4, registrácia od 1.5.2006
            <br />
            E-mail: asistent@eurohause.eu
            <br />
            Tel.: +421 902 940 601
          </div>

          <p>
            Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké osobné údaje
            spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
          </p>

          <h3>I. Kontaktný formulár</h3>
          <p>
            Na stránke www.eurohause.eu prevádzkujeme kontaktný formulár ktorého účelom je umožniť
            vám:
          </p>
          <p>
            Položiť otázku k našim produktom a službám
            <br />
            Požiadať o cenovú ponuku
          </p>

          <p>
            <strong>Rozsah spracúvaných údajov:</strong>
          </p>
          <p>
            Meno a priezvisko
            <br />
            E-mailová adresa
            <br />
            Telefónne číslo
            <br />
            Správu
          </p>

          <p>
            <strong>Účel spracovania:</strong>
            <br />
            Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
          </p>

          <p>
            <strong>Právny základ:</strong>
            <br />
            Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť
            dotknutej osoby.
          </p>

          <p>
            <strong>Doba uchovávania:</strong>
            <br />
            Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ
            nevznikne ďalší zmluvný vzťah.
          </p>

          <h3>II. Súbory cookies</h3>
          <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
          <p>
            Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie,
            nastavení prehliadača).
            <br />
            Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku
            používajú (nasadzujeme ich len so súhlasom používateľa).
          </p>

          <p>
            <strong>Správa súhlasov:</strong>
            <br />
            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies
            prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
          </p>

          <h3>III. Práva dotknutej osoby</h3>
          <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
          <p>
            Prístup k osobným údajom, ktoré spracúvame
            <br />
            Oprava nepresných alebo neúplných údajov
            <br />
            Vymazanie („právo zabudnutia“), ak na spracovanie už nie je právny základ
            <br />
            Obmedzenie spracovania
            <br />
            Prenosnosť údajov
            <br />
            Odvolanie súhlasu – stane sa účinným dňom odvolania
            <br />
            Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07
            Bratislava, www.dataprotection.gov.sk)
          </p>

          <p>
            V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na
            asistent@eurohause.eu alebo telefónnom čísle +421 902 940 601.
          </p>

          <p>
            <strong>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
