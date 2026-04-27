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
};

const TIMELINE: TimelineItem[] = [
  {
    period: '2021',
    role: 'Junior Frontend Developer',
    type: 'Entry Level',
    description:
      'Started my professional journey in frontend development, building and maintaining web interfaces. Gained hands-on experience with HTML, CSS, JavaScript, and the WordPress ecosystem.',
    highlights: [
      'Mastered modern CSS layout techniques',
      'Built first WordPress plugin features',
      'Learned JavaScript and frontend tooling',
    ],
  },
  {
    period: '2021 — 2022',
    role: 'WordPress Product Developer',
    type: 'Growing Role',
    description:
      'Transitioned into focused WordPress product development, contributing to commercial plugins used by thousands. Deepened expertise in Gutenberg, plugin architecture, and plugin UI systems.',
    highlights: [
      'Contributed to TableKit & ElementsKit',
      'Developed custom Gutenberg blocks',
      'Worked on commercial WooCommerce flows',
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Frontend Specialist',
    type: 'Mid Level',
    description:
      'Expanded into modern JavaScript frameworks, bringing React and component-based thinking into the WordPress ecosystem. Took ownership of larger features and UI systems.',
    highlights: [
      'Shipped features in GutenKit & PopupKit',
      'Led frontend UI for new product modules',
      'Introduced component architecture patterns',
    ],
  },
  {
    period: '2023 — Present',
    role: 'Product Engineer',
    type: 'Senior Contributor',
    description:
      'Operating as a full product contributor — involved from design to deployment. Worked on AI-powered SaaS tools, advanced dashboard UIs, and contributed to product strategy discussions.',
    highlights: [
      'Contributed to GetGenie AI SaaS frontend',
      'Led dashboard UX improvements',
      'Shipped performance-critical features',
    ],
    current: true,
  },
  {
    period: 'Future',
    role: 'Full Stack Engineer & SaaS Founder',
    type: 'Vision',
    description:
      'My roadmap: achieve full-stack proficiency, build and launch my own SaaS products, work with global remote teams, and create software that generates real business value.',
    highlights: [
      'Build independent SaaS products',
      'Lead engineering at a global startup',
      'Launch AI-powered business tools',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Career Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Experience & <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A continuous journey from junior developer to product engineer — with real products, real users, real impact.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative max-w-3xl mx-auto transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-cyan-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Icon dot */}
                <div className="relative shrink-0 w-12 h-12 hidden sm:flex">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-200 group-hover:scale-110 ${
                      item.current
                        ? 'bg-blue-500/20 border-blue-500/40 text-blue-400'
                        : item.period === 'Future'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-white/5 border-white/10 text-muted-foreground'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl p-5 border transition-all duration-200 hover:shadow-xl group-hover:-translate-y-0.5 ${
                    item.current
                      ? 'bg-blue-500/8 border-blue-500/25 hover:bg-blue-500/12'
                      : item.period === 'Future'
                      ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10'
                      : 'glass border-white/8 hover:bg-white/5'
                  }`}
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
                        {item.period === 'Future' && (
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
                    {item.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            item.current
                              ? 'bg-blue-400'
                              : item.period === 'Future'
                              ? 'bg-emerald-400'
                              : 'bg-white/30'
                          }`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
