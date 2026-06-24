<div align="center">

<br />

# inMind

### _Operations Intelligence for Pakistani Ecommerce Brands_

<br />

> **Your ops team is drowning. Not because they're incompetent.**
> Most ecommerce brands in Pakistan are running on a patchwork of courier portals, WhatsApp threads, and Excel sheets. Every day, money slips through the cracks. **inMind fixes all of it. In one place.**

<br />

---

</div>

## Table of Contents

- [ Overview](#-overview)
- [ Core Features](#-core-features)
- [ Tech Stack](#️-tech-stack)
- [ Project Structure](#-project-structure)
- [ Getting Started](#-getting-started)
- [ Deployment](#-deployment)
- [ Sections & Components](#-sections--components)
- [ Design System](#-design-system)

---

## Overview

**inMind** is a SaaS Order Management System (OMS) built specifically for **Pakistani ecommerce brands** struggling with high return rates, fragmented courier management, and untracked COD receivables.

Instead of paying for 4–5 separate tools and still not getting full coverage, inMind brings everything into a single intelligent platform — with WhatsApp automation and AI-powered workflows built right in.

---

## Core Features

<br />

### Attempt Management

> _Returns are killing your margins. Most of them were avoidable._

- Tracks every failed delivery in real time
- Flags high-risk orders **before** dispatch
- Triggers automatic WhatsApp follow-ups
- **Brands reduce return rates by up to 40% within 90 days**

---

### Unified Courier Portal

> _You shouldn't need 5 browser tabs to ship one order._

- Connects **TCS, Leopards, Trax, Swyft, BlueEX** in one command center
- Book, track, manage status updates and switch couriers — from one screen
- **Cut dispatch time by 60%**

---

### Accounts Receivable & COD Reconciliation

> _Couriers owe you money. Do you know exactly how much?_

- Full remittance tracking down to the shipment level
- Real-time dashboard showing outstanding receivables per courier
- **One brand recovered PKR 2.3M in their first quarter**

---

### WhatsApp Automation + AI Workflows

> _You're paying 3 different tools to do what we do in one._

- Order confirmations, attempt follow-ups, delivery notifications
- Return alerts and custom triggers — all from the same platform
- No integrations. No extra subscriptions.
- **Save PKR 30,000–80,000/month in software costs**

---

### Analytics Dashboard

- Real-time ops visibility across orders, returns, couriers, and revenue

### Multi-Team Access

- Roles and permissions for your entire operations team

---

## Tech Stack

| Layer          | Technology                                      |
| -------------- | ----------------------------------------------- |
| **Framework**  | [Next.js 15](https://nextjs.org/) — App Router  |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/)     |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Images**     | Next.js `Image` component                       |
| **Deployment** | [Vercel](https://vercel.com/)                   |
| **Language**   | TypeScript / JavaScript (React)                 |

---

## Project Structure

```
inmind/
├── app/
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page — orchestrates all sections
│   └── globals.css              # Global styles + Tailwind v4 config
│
└── src/
    └── components/
        ├── Hero.jsx             # Landing hero section
        ├── Counters.jsx         # Animated stats counters
        ├── Services.jsx         # Step-by-step feature sections (scroll-animated)
        ├── Platform.jsx         # Feature grid with Cards
        ├── Card.jsx             # Reusable feature card
        ├── Carousel.jsx         # Testimonials / brand carousel
        ├── SetupProcedure.jsx   # Onboarding steps section
        ├── AnimatedImages.jsx   # Decorative animated visuals
        ├── BookingOffer.jsx     # CTA / booking section
        └── PrimaryBanner.jsx    # Promotional banner
```

---

## Getting Started

### Prerequisites

- Node.js `18+`
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/asifinmind/inmind.git
cd inmind

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Deployment

inMind is deployed on **Vercel** with zero-config Next.js support.

**Live:** [https://inmind-pi.vercel.app/](https://inmind-pi.vercel.app/)

To deploy your own instance:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly on [vercel.com](https://vercel.com/) for automatic deployments on every push.

---

## Sections & Components

| Section            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| **Hero**           | Full-screen landing with headline and CTA               |
| **Counters**       | Animated numbers showcasing platform impact             |
| **Services**       | Scroll-triggered alternating feature sections (4 steps) |
| **Platform**       | CSS Grid feature card layout                            |
| **Carousel**       | Brand/courier partner showcase                          |
| **SetupProcedure** | Step-by-step onboarding guide                           |
| **PrimaryBanner**  | Mid-page promotional CTA banner                         |
| **BookingOffer**   | Bottom conversion section with booking CTA              |

---

<div align="center">

<br />

Built with ❤️ for Pakistani ecommerce — by the inMind team.

[![Live Demo](https://img.shields.io/badge/Try_inMind_Now-328476?style=for-the-badge)](https://inmind-pi.vercel.app/)

<br />

</div>

## Asif Hussain
