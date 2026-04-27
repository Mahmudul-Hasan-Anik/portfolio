import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mahmudul Hasan — Frontend Engineer & Product Developer',
  description:
    'Frontend developer with 3+ years building modern web interfaces, WordPress products, Gutenberg systems, dashboards, and scalable SaaS tools. Available for remote roles and freelance work.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'WordPress Developer',
    'Gutenberg Blocks',
    'Remote Frontend Engineer',
    'Bangladesh Developer',
    'SaaS Frontend',
    'TypeScript',
    'Tailwind CSS',
    'Mahmudul Hasan',
  ],
  authors: [{ name: 'Mahmudul Hasan' }],
  creator: 'Mahmudul Hasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mahmudul Hasan — Frontend Engineer & Product Developer',
    description:
      'Frontend developer with 3+ years building modern web interfaces, WordPress products, and scalable SaaS tools. Available for remote roles.',
    siteName: 'Mahmudul Hasan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmudul Hasan — Frontend Engineer & Product Developer',
    description:
      'Frontend developer with 3+ years building modern web interfaces, WordPress products, and scalable SaaS tools.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
