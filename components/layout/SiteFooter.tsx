'use client';

import { Github, Linkedin, Twitter, Mail, Code as Code2, ArrowUp, Facebook } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/Mahmudul-Hasan-Anik', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anik-dev/', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/Anik13m/', icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
  { href: 'mailto:Hasan22dev@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
];

export default function SiteFooter() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/6 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <LogoMark className="w-6 h-6" />
              </div>
              <span className="font-bold text-foreground tracking-tight text-lg">
                Mahmudul<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Frontend Engineer building modern digital products with precision, care, and craft.
            </p>
            <div className="flex gap-2 mt-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Availability</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to remote work
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Available for freelance
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Full-time opportunities
              </div>
            </div>
            <a
              href="mailto:Hasan22dev@gmail.com"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              Hasan22dev@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mahmudul Hasan. Crafted with care and precision.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors group"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
