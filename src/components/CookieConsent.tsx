"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [settings, setSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      setSettings(JSON.parse(consent));
    }

    const handleOpenSettings = () => setShowModal(true);
    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const saveConsent = (newSettings: typeof settings) => {
    localStorage.setItem("cookie-consent", JSON.stringify(newSettings));
    setSettings(newSettings);
    setShowBanner(false);
    setShowModal(false);
  };

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const acceptSelected = () => {
    saveConsent(settings);
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {showBanner && (
        <div className="cookie-banner">
          <div className="cookie-content">
            <h3>Súkromie a súbory cookies</h3>
            <p>
              Naša stránka používa súbory cookies, aby sme vám poskytli čo najlepší zážitok a
              mohli neustále zlepšovať naše služby. Pokračovaním v prehliadaní súhlasíte s ich
              používaním.
            </p>
          </div>
          <div className="cookie-actions">
            <button className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
              Povoliť všetko
            </button>
            <button className="cookie-btn cookie-btn-ghost" onClick={() => setShowModal(true)}>
              Nastavenia
            </button>
            <Link href="/ochrana-osobnych-udajov" className="cookie-btn-link">
              Zásady ochrany súkromia
            </Link>
          </div>
        </div>
      )}

      {showModal && (
        <div className="cookie-modal">
          <div className="cookie-modal-content">
            <h2>Nastavenia cookies</h2>
            <p>
              Tu si môžete prispôsobiť, ktoré súbory cookies môžeme používať. Nevyhnutné cookies sú
              vždy aktívne pre správne fungovanie webu.
            </p>

            <div className="cookie-toggle">
              <div className="cookie-toggle-info">
                <h4>Nevyhnutné (Vždy aktívne)</h4>
                <p>Potrebné pre základné funkcie webu a bezpečnosť.</p>
              </div>
              <label className="cookie-switch">
                <input type="checkbox" checked disabled />
                <span className="cookie-switch-slider"></span>
              </label>
            </div>

            <div className="cookie-toggle">
              <div className="cookie-toggle-info">
                <h4>Analytické</h4>
                <p>Pomáhajú nám pochopiť, ako návštevníci interagujú s webom.</p>
              </div>
              <label className="cookie-switch">
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                />
                <span className="cookie-switch-slider"></span>
              </label>
            </div>

            <div className="cookie-toggle">
              <div className="cookie-toggle-info">
                <h4>Marketingové</h4>
                <p>Používané na sledovanie návštevníkov naprieč webovými stránkami.</p>
              </div>
              <label className="cookie-switch">
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                />
                <span className="cookie-switch-slider"></span>
              </label>
            </div>

            <div className="cookie-modal-actions">
              <button className="cookie-btn cookie-btn-ghost" onClick={() => setShowModal(false)}>
                Zrušiť
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={acceptSelected}>
                Uložiť výber
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
