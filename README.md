# Lead Property Valuation & Asset Management Consultancy PLC

> Production-ready corporate web application for **Lead Property Valuation and Asset Management Consultancy PLC**, an Ethiopian professional consultancy specializing in property valuation, plant & machinery valuation, financial valuation, and asset advisory services headquartered in Addis Ababa, Ethiopia.

---

## 🏛️ Brand & Business Overview
- **Legal Entity:** Lead Property Valuation and Asset Management Consultancy PLC
- **Established:** July 2024
- **Headquarters:** Addis Ababa, Ethiopia
- **Office Location:** Lancha Area, Emmanuel Reformed Apostolic Church Building, House No. 942, 3rd Floor, Room 003
- **General Manager:** Engineer Hlina Legesse
- **Primary Contacts:** `+251 0913006754` / `+251 0991738621`
- **Email:** `leadvaluation3@gmail.com`
- **Official Telegram:** [t.me/leadvaluation](https://t.me/leadvaluation)
- **Live URL:** [https://www.leadpvet.com](https://www.leadpvet.com)

---

## 🚀 Key Features

1. **Full 15-Page Information Architecture**:
   - `Home` (`/`): 10 structured sections (Hero, Intro, Core Services, Why Choose Us, Target Audiences, 5-Phase Process, Leadership, Values, Credibility, Final CTA).
   - `About Us` (`/about`): Comprehensive founding narrative, leadership profile, verified core values, proposed mission and vision drafts.
   - `Services Overview` (`/services`): Multi-asset practice overview and category cards.
   - `6 Dedicated Practice Pages`:
     - Real Estate and Land Valuation (`/services/real-estate-and-land-valuation`)
     - Business and Financial Valuation (`/services/business-and-financial-valuation`)
     - Asset and Equipment Valuation (`/services/asset-and-equipment-valuation`)
     - Legal and Tax-Related Valuation (`/services/legal-tax-related-valuation`)
     - Financial Reporting and Regulatory Compliance (`/services/financial-reporting-and-regulatory-compliance`)
     - Mergers, Acquisitions, and Corporate Transactions (`/services/mergers-acquisitions-and-corporate-transactions`)
   - `Industries` (`/industries`): 6 commercial & institutional sectors served.
   - `Our Process` (`/process`): 5-stage engagement workflow (Initial Inquiry &rarr; Scope Definition &rarr; Survey & Inspection &rarr; Valuation Modeling &rarr; Audit-Ready Delivery).
   - `FAQs` (`/faqs`): Accessible accordion answering questions regarding property types, required documents, turnaround, and fees.
   - `Insights` (`/insights`): Articles on Ethiopian property dynamics and IFRS 13 compliance.
   - `Contact Us` (`/contact`): Clickable phone links, direct WhatsApp, interactive consultation form, and verified Lancha Area Google map embed.
   - `Privacy Policy` (`/privacy-policy`): Transparent data protection, confidentiality, and data retention policies.
   - `Custom 404` (`/not-found`): Branded error page directing traffic back to core services.

2. **Mandatory Floating Actions & Mobile Bar**:
   - **Desktop:** Floating WhatsApp and Call buttons in the lower-right corner.
   - **Mobile:** Fixed bottom contact bar with labeled "WhatsApp" and "Call" buttons respecting safe-area insets.
   - Direct dialers (`tel:+251913006754`, `tel:+251991738621`) and direct WhatsApp link (`https://wa.me/251944320977` / `+251 944320977`).

3. **Backend Contact API with Spam Protection**:
   - Route: `/api/contact`
   - Server-side field validation and honeypot anti-spam defense.
   - Zero data loss: persists enquiries to local JSON storage (supports Vercel `/tmp` in serverless).
   - Configurable SMTP integration interface for direct email notifications to `leadvaluation3@gmail.com`.

4. **Technical & On-Page SEO**:
   - XML Sitemap generated automatically at `/sitemap.xml`.
   - Search engine directives at `/robots.txt`.
   - Structured JSON-LD schema markup (`Organization` & `LocalBusiness`).
   - Legacy 301 redirects for previous `.leadpvet` URLs (`/index.leadpvet`, `/about.leadpvet`, etc.).

---

## 🛠️ Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS design system (`app/globals.css`) adhering to the approved corporate palette:
  - Deep Navy: `#142B49`
  - Secondary Navy: `#1D3B5C`
  - Muted Gold: `#C5A46D`
  - Off-White: `#F5F7FA`
  - White: `#FFFFFF`
  - Charcoal Text: `#252D38`
  - Muted Gray: `#667085`
- **Typography:** Plus Jakarta Sans & Inter
- **Icons:** Lucide React

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/webseyf/propertyconsultant.git
   git push -u origin main
   ```
2. In your [Vercel Dashboard](https://vercel.com):
   - Click **"Add New Project"** &rarr; **"Import Git Repository"**.
   - Select **`propertyconsultant`**.
   - Framework preset will automatically be detected as **Next.js**.
   - (Optional) Set Environment Variables in Project Settings:
     - `NOTIFICATION_EMAIL`: `leadvaluation3@gmail.com`
     - `SMTP_HOST`: (e.g. `smtp.gmail.com`)
     - `SMTP_USER`: `leadvaluation3@gmail.com`
     - `SMTP_PASS`: `your-app-password`
3. Click **"Deploy"**. Vercel will build and assign an edge-cached production domain in under 60 seconds.

---

## 📄 License
&copy; Lead Property Valuation and Asset Management Consultancy PLC. All Rights Reserved.
