"use client";

import Link from "next/link";
import { useState } from "react";
import PrivacyPopup from "./PrivacyPopup";
import RollText from "./RollText";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-cta-content">
              <h2>Potrebujete drevené konštrukcie alebo strechu?</h2>
              <p>
                Kontaktujte nás a mi Vám radi poradíme s výberom vhodného riešenia pre vašu
                stavbu
              </p>
            </div>
            <div className="footer-cta-button">
              <Link href="/kontakt" className="footer-btn">
                <RollText text="Kontakt" />
              </Link>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-content">
            <div className="footer-section footer-contact">
              <h3>Eurohause s.r.o.</h3>
              <p>
                <strong>Adresa:</strong>{" "}
                <a
                  href="https://goo.gl/maps/3SL2KSs7xCSn8Evp7"
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "underline", color: "#265286" }}
                >
                  Orviská cesta 7137, 921 01 Piešťany
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:konatel@eurohause.eu">konatel@eurohause.eu</a>
              </p>
              <p style={{ paddingLeft: "5ch" }}>
                <a href="mailto:asistent@eurohause.eu">asistent@eurohause.eu</a>
              </p>
              <p>
                <strong>Mobil:</strong> <a href="tel:+421902940600">0902 940 600</a>
              </p>
              <p style={{ paddingLeft: "5ch" }}>
                <a href="tel:+421902940601">0902 940 601</a>
              </p>
              <div className="footer-hours">
                <h4>Pracovné hodiny</h4>
                <p>Pondelok – Piatok</p>
                <p>08:00 – 16:00</p>
              </div>
            </div>

            <div className="footer-section footer-navigation">
              <div className="footer-nav-columns">
                <div className="footer-nav-column">
                  <h4>Navigácia</h4>
                  <ul>
                    <li>
                      <Link href="/">Domov</Link>
                    </li>
                    <li>
                      <Link href="/realizacie">Realizácie</Link>
                    </li>
                    <li>
                      <Link href="/kontakt">Kontakt</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h4>Služby</h4>
                  <ul>
                    <li>
                      <Link href="/sluzby/navrh-konstrukcii">Návrh konštrukcií</Link>
                    </li>
                    <li>
                      <Link href="/sluzby/vyroba-konstrukcii">Výroba konštrukcií</Link>
                    </li>
                    <li>
                      <Link href="/sluzby/montaz-preprava">Montáž a preprava</Link>
                    </li>
                    <li>
                      <Link href="/sluzby/klampiar-pokryvac">
                        Klampiarske a pokrývačské práce
                      </Link>
                    </li>
                    <li>
                      <Link href="/sluzby/vyroba-drevostavieb">Výroba drevostavieb</Link>
                    </li>
                    <li>
                      <Link href="/sluzby/drevosklad-obchod">Drevosklad - obchod</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column footer-privacy">
                  <h4>Ochrana údajov</h4>
                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setPrivacyOpen(true);
                        }}
                      >
                        Ochrana osobných údajov
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.dispatchEvent(new CustomEvent("open-cookie-settings"));
                        }}
                      >
                        Nastavenia cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-website-credit">
              <span>
                Tvorba stránky -{" "}
                <a href="https://aebdigital.sk" target="_blank" rel="noopener">
                  AEB Digital
                </a>
              </span>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2026 Eurohause s.r.o. Všetky práva vyhradené.</p>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPopup open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
