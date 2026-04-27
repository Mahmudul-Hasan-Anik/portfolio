'use client';

import { useInView } from '@/hooks/useInView';
import { PackageCheck, Users, Code as Code2, Gauge, Lightbulb, Clock, Handshake, Rocket } from 'lucide-react';

const REASONS = [
  {
    icon: <PackageCheck className="w-5 h-5" />,
    title: 'Real Product Experience',
    desc: 'Contributed to 5+ commercial WordPress products with thousands of active users — not just side projects.',
    color: 'text-blue-400',
    bg: 'from-blue-500/12 to-blue-500/4',
    border: 'border-blue-500/20',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'User-First Mindset',
    desc: 'I design and build with the end user in mind. Good code that nobody can use is not good code.',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/12 to-cyan-500/4',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Clean, Scalable Code',
    desc: 'I write maintainable, component-based code that scales with your product without technical debt piling up.',
    color: 'text-sky-400',
    bg: 'from-sky-500/12 to-sky-500/4',
    border: 'border-sky-500/20',
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: 'Performance-Focused',
    desc: 'I obsess over fast loading times, smooth interactions, and lighthouse scores that matter to your business.',
    color: 'text-green-400',
    bg: 'from-green-500/12 to-green-500/4',
    border: 'border-green-500/20',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Business Understanding',
    desc: 'I understand that software exists to serve business goals. I build features that drive conversions, retention, and growth.',
    color: 'text-yellow-400',
    bg: 'from-yellow-500/12 to-yellow-500/4',
    border: 'border-yellow-500/20',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Fast & Reliable',
    desc: 'Deadlines matter. I deliver on time without sacrificing code quality or cutting corners on user experience.',
    color: 'text-orange-400',
    bg: 'from-orange-500/12 to-orange-500/4',
    border: 'border-orange-500/20',
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: 'Team & Remote Ready',
    desc: 'Collaborative, communicative, and comfortable working in remote-first distributed teams across time zones.',
    color: 'text-teal-400',
    bg: 'from-teal-500/12 to-teal-500/4',
    border: 'border-teal-500/20',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'Startup Mentality',
    desc: 'I move fast, adapt quickly, and treat your product like my own. Ownership mindset from day one.',
    color: 'text-rose-400',
    bg: 'from-rose-500/12 to-rose-500/4',
    border: 'border-rose-500/20',
  },
];

export default function WhyHireMe() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            Why Work With Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            What I bring to <span className="text-gradient">your team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Beyond the technical skills — the qualities that make working together a great experience.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className={`rounded-2xl p-5 bg-gradient-to-b ${r.bg} border ${r.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-background/50 border ${r.border} flex items-center justify-center ${r.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                {r.icon}
              </div>
              <h3 className={`font-bold text-sm ${r.color} mb-2`}>{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
