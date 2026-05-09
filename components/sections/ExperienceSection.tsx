'use client';

import { useInView } from '@/hooks/useInView';
import { Briefcase, ArrowUpRight } from 'lucide-react';

type TimelineItem = {
  period: string;
  role: string;
  type: string;
  description: string;
  highlights: string[];
  current?: boolean;
  future?: boolean;
  skills: string[];
};

const TIMELINE: TimelineItem[] = [
  {
    period: '2022 - Present',
    role: 'Frontend Engineer',
    type: 'Product Development',
    description:
      'Currently working as a Frontend Engineer with 3+ years of hands-on experience building WordPress plugins and modern React-based products. Specialized in Gutenberg block development, dashboard interfaces, and creating scalable frontend architectures for SaaS products.',
    highlights: [
      'Developed 15+ Gutenberg blocks with advanced customization options',
      'Built responsive dashboards and interactive table management systems',
      'Worked across multiple product modules including TableKit, GutenKit, and ElementsKit',
      'Implemented complex state management and real-time data handling',
      'Collaborated with cross-functional teams on product releases and feature improvements',
      'Consistently delivered production-ready code with focus on performance and UX',
    ],
    skills: ['React', 'Gutenberg', 'JavaScript', 'TypeScript', 'WordPress Plugin Development', 'Tailwind CSS', 'SCSS', 'REST API'],
    current: true,
  },
];


export default function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-8 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Career Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Experience & <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A continuous journey from junior developer to product engineer - with real products, real users, real impact.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative max-w-3xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={`${item.period}-${item.role}`} className="relative flex gap-6 group">
                <div
                  className={`flex-1 rounded-2xl p-5 sm:p-6 border transition-all duration-200 hover:shadow-xl group-hover:-translate-y-0.5 ${item.current
                    ? 'bg-blue-500/8 border-blue-500/25 hover:bg-blue-500/12'
                    : item.future
                      ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10'
                      : 'glass border-white/8 hover:bg-white/5'
                    }`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(18px)',
                    transition: `opacity 0.55s ease ${i * 70}ms, transform 0.55s ease ${i * 70}ms, box-shadow 0.2s ease`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground font-medium">{item.period}</span>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-xs font-semibold">
                            Current
                          </span>
                        )}
                        {item.future && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                            Vision
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mt-1">{item.role}</h3>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-1 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.current ? 'bg-blue-400' : item.future ? 'bg-emerald-400' : 'bg-white/30'
                            }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
