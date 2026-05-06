'use client';

import { useInView } from '@/hooks/useInView';
import { MapPin, Calendar, Briefcase, Target, Code as Code2, Rocket, Users, TrendingUp } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <Code2 className="w-5 h-5" />, title: 'Deep Frontend Expertise', desc: 'Proficient in React, Next.js, TypeScript, and the full modern frontend toolchain.' },
  { icon: <Rocket className="w-5 h-5" />, title: 'Real Product Experience', desc: 'Contributed to 5+ commercial WordPress products with active user bases.' },
  { icon: <Users className="w-5 h-5" />, title: 'User-Centered Thinking', desc: 'I approach every feature from the user\'s perspective, not just the code.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Business Minded', desc: 'I build interfaces that drive engagement, conversions, and business growth.' },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-8 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            The developer behind the code
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Left: image + badges */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-xl" />
              {/* Profile box */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 glass">
                <img
                  src="/assets/img/IMG_2823.jpeg"
                  alt="Mahmudul Hasan — Frontend Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating tag badges */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-white/10 text-xs font-semibold text-green-400 flex items-center gap-1.5 animate-float">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-white/10 text-xs font-semibold text-blue-400 animate-float-delayed flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Bangladesh
              </div>
            </div>

            {/* Info pills below */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 whitespace-nowrap">
              <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg border border-white/10 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3 text-blue-400" />
                3+ Years
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg border border-white/10 text-xs text-muted-foreground">
                <Briefcase className="w-3 h-3 text-cyan-400" />
                5+ Products
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg border border-white/10 text-xs text-muted-foreground">
                <Target className="w-3 h-3 text-green-400" />
                Remote Ready
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="mt-16 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-tight">
              Building the future,<br />
              <span className="text-gradient">one interface at a time.</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a frontend developer passionate about turning complex business problems into
                elegant, performant user interfaces. Over 3+ years, I have worked across the WordPress
                ecosystem building commercial products — from Gutenberg block systems to AI-powered SaaS tools.
              </p>
              <p>
                My work goes beyond writing code. I think deeply about user experience, product flows,
                and business impact. I have contributed to products with real user bases, collaborated
                in cross-functional teams, and shipped features that matter.
              </p>
              <p>
                I am growth-minded, business-focused, and always learning. My long-term vision is to
                become a full-stack engineer, launch my own SaaS products, and work with global remote
                teams building impactful technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="p-4 rounded-xl glass border border-white/8 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-200 group"
                >
                  <div className="text-blue-400 mb-2 group-hover:scale-110 transition-transform inline-block">
                    {h.icon}
                  </div>
                  <p className="text-xs font-semibold text-foreground mb-1">{h.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
