# Portfolio

A personal portfolio built with Next.js, TypeScript, Tailwind CSS, Lucide icons, and Supabase for contact form submissions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and add your Supabase values if you want the contact form to submit messages.

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

The site still runs without these values. Only the contact form submission is disabled.

## Project structure

```text
app/
  layout.tsx      Site metadata and root layout
  page.tsx        Home page section order
  globals.css     Tailwind styles and custom utility classes

components/layout/
  SiteHeader.tsx
  SiteFooter.tsx

components/sections/
  HeroSection.tsx
  AboutSection.tsx
  SkillsSection.tsx
  FeaturedWorkSection.tsx
  ExperienceSection.tsx
  GitHubProjectsSection.tsx
  WhyHireMeSection.tsx
  TestimonialsSection.tsx
  ContactSection.tsx

hooks/
  useInView.ts    Scroll reveal helper

lib/
  supabaseClient.ts  Supabase browser client

supabase/
  migrations/     Database table setup
  functions/      Optional Supabase Edge Function
```

## Useful commands

```bash
npm run dev        # Start local development server
npm run build      # Build for production
npm run typecheck  # Check TypeScript
```
