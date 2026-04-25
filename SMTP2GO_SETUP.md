# Nastavenie SMTP2GO pre Eurohause

Tento projekt využíva **SMTP2GO** na odosielanie e-mailov z kontaktného formulára.

## Postup nastavenia:

1. **Vytvorte si účet** na [SMTP2GO](https://www.smtp2go.com/).
2. **Pridajte odosielaciu doménu**:
   - V menu choďte do `Settings` -> `Sender Domains`.
   - Pridajte doménu `eurohause.eu` a overte ju pomocou DNS záznamov (CNAME), ktoré vám SMTP2GO vygeneruje.
3. **Vytvorte API kľúč**:
   - Choďte do `Settings` -> `API Keys`.
   - Vytvorte nový kľúč a uložte si ho.
4. **Konfigurácia prostredia**:
   - Vytvorte súbor `.env.local` v koreňovom adresári projektu (ak ešte neexistuje).
   - Pridajte doň nasledujúce premenné:
     ```env
     SMTP2GO_API_KEY=vaš_api_kľúč
     CONTACT_RECIPIENT=konatel@eurohause.eu
     ```
5. **Nasadenie (Netlify/Vercel)**:
   - Nezabudnite pridať tieto premenné prostredia aj do nastavení vášho hostingu v sekcii `Environment Variables`.

## Technické detaily:
- API endpoint: `https://api.smtp2go.com/v3/email/send`
- Route v projekte: `/src/app/api/contact/route.ts`
- Metóda: `POST`
- Formát tela: `JSON`
