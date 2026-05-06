'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Code as Code2 } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/10'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <LogoMark className="w-6 h-6" />
          </div>
          <span className="font-bold text-foreground tracking-tight">
            Mahmudul<span className="text-blue-400">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === href.slice(1)
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/pdf/Mahmudul-hasan-anik.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border/60 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeSection === href.slice(1)
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              {label}
            </button>
          ))}
          <a
            href="/pdf/Mahmudul-hasan-anik.pdf"
            download
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium mt-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
