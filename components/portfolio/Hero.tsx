'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Download, Sparkles, Code as Code2, Layers, Zap, Globe } from 'lucide-react';

const TECH_BADGES = [
  { label: 'React', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  { label: 'Next.js', color: 'from-white/10 to-white/5', border: 'border-white/20', text: 'text-white' },
  { label: 'TypeScript', color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/30', text: 'text-blue-400' },
  { label: 'Tailwind', color: 'from-teal-500/20 to-teal-500/5', border: 'border-teal-500/30', text: 'text-teal-400' },
  { label: 'WordPress', color: 'from-sky-500/20 to-sky-500/5', border: 'border-sky-500/30', text: 'text-sky-400' },
  { label: 'Gutenberg', color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/30', text: 'text-orange-400' },
  { label: 'WooCommerce', color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/20', text: 'text-purple-400' },
  { label: 'JavaScript', color: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/30', text: 'text-yellow-400' },
];

const STATS = [
  { value: '3+', label: 'Years Experience', icon: <Zap className="w-4 h-4" /> },
  { value: '5+', label: 'Real Products', icon: <Layers className="w-4 h-4" /> },
  { value: '100%', label: 'Responsive UI', icon: <Globe className="w-4 h-4" /> },
  { value: 'SaaS', label: 'Product Mindset', icon: <Sparkles className="w-4 h-4" /> },
];

const TITLES = [
  'Frontend Engineer',
  'Product Developer',
  'WordPress Specialist',
  'React & Next.js Dev',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = TITLES[titleIndex];
    let i = displayed.length;
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (i < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, i + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (i > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, i - 1)), 35);
      } else {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex, mounted]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/4 rounded-full blur-[80px]" />
      </div>

      {/* Floating badges — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
        {TECH_BADGES.map((badge, i) => {
          const positions = [
            'top-[18%] left-[7%]', 'top-[30%] right-[8%]',
            'top-[55%] left-[5%]', 'top-[70%] right-[6%]',
            'top-[10%] right-[22%]', 'bottom-[20%] left-[12%]',
            'top-[42%] right-[3%]', 'bottom-[28%] right-[18%]',
          ];
          const delays = ['animate-float', 'animate-float-delayed', 'animate-float-slow', 'animate-float', 'animate-float-delayed', 'animate-float-slow', 'animate-float', 'animate-float-delayed'];
          return (
            <div
              key={badge.label}
              className={`absolute ${positions[i]} ${delays[i]} opacity-70`}
            >
              <div
                className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} border ${badge.border} backdrop-blur-sm ${badge.text} text-xs font-semibold tracking-wide whitespace-nowrap`}
              >
                {badge.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for remote work & freelance
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1]">
            <span className="text-foreground">Hi, I am </span>
            <span className="text-gradient">Mahmudul</span>
          </h1>

          {/* Dynamic title */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 h-12 flex items-center justify-center">
            <span className="text-blue-400">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Frontend developer with{' '}
            <span className="text-foreground font-medium">3+ years</span> building modern web
            interfaces, WordPress products, Gutenberg systems, and scalable SaaS experiences.
            I turn business ideas into{' '}
            <span className="text-foreground font-medium">polished digital products</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#work')}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-foreground font-semibold transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <Code2 className="w-4 h-4 text-blue-400" />
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-foreground font-semibold transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-200 group cursor-default"
              >
                <div className="flex justify-center mb-2 text-blue-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
