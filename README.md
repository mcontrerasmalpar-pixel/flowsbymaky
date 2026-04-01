# FlowsByMaky — AI Automation Agency

Landing page built with **Next.js 14 + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

## Structure

```
flowsbymaky/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout + metadata/SEO
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero section
│   ├── Stats.tsx         # Stats bar (3x, 80%, 24/7, ∞)
│   ├── Services.tsx      # Services grid (4 cards)
│   ├── Process.tsx       # 4-step process
│   ├── CTA.tsx           # Call to action + platforms
│   └── Footer.tsx        # Footer
└── public/               # Static assets (add your images here)
```

## Customize

- Update email in `Navbar.tsx` and `CTA.tsx`
- Edit services in `Services.tsx`
- Change stats in `Stats.tsx`
- Add your own images to `/public`
