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
    period: '2022',
    role: 'Frontend Developer (Intern)',
    type: 'EmailKit Focus',
    description:
      'Started my professional journey by focusing deeply on EmailKit, a WooCommerce and WordPress email customizer. This phase helped me understand real product development, editor-style interfaces, and how frontend work supports actual user workflows.',
    highlights: [
      'Focused on EmailKit during my internship period',
      'Worked on WooCommerce email customizer UI and editing flows',
      'Learned WordPress plugin structure and product development workflow',
      'Practiced debugging, Git workflow, responsive UI, and production fixes',
      'Built a stronger foundation in JavaScript, CSS, and WordPress interfaces',
    ],
    skills: ['JavaScript', 'CSS', 'WordPress', 'WooCommerce', 'Git'],
  },
  {
    period: '2023',
    role: 'Junior Frontend Developer',
    type: 'AI Product Work',
    description:
      'After EmailKit, I moved into GetGenie and worked on AI-focused product interfaces. This phase grew my experience with dashboards, content workflows, and more complex frontend states inside a real SaaS-style product.',
    highlights: [
      'Contributed to GetGenie product development',
      'Worked on AI content generation and SEO workflow interfaces',
      'Built and refined responsive dashboard layouts',
      'Improved usability details across content and productivity flows',
      'Collaborated with the team on real production releases',
    ],
    skills: ['React', 'JavaScript', 'Dashboard UI', 'SaaS UI', 'WordPress'],
  },
  {
    period: '2024 - Mid 2025',
    role: 'Frontend Engineer',
    type: 'Gutenberg & Elementor Products',
    description:
      'In 2024, I started contributing heavily to GutenKit while also working on ElementsKit from time to time. This is where I grew deeper into Gutenberg block development, reusable controls, and scalable product UI.',
    highlights: [
      'Started major contribution to GutenKit in 2024',
      'Contributed to more than 15 Gutenberg blocks',
      'Worked on 3 or 4 GutenKit product modules',
      'Contributed to ElementsKit when needed',
      'Improved reusable controls, editor UI patterns, and frontend maintainability',
    ],
    skills: ['Gutenberg', 'React', 'WordPress Plugin Dev', 'Elementor', 'SCSS'],
  },
  {
    period: 'Mid 2025 - Present',
    role: 'Frontend Engineer',
    type: 'TableKit Ownership',
    description:
      'From mid-2025 to now, my main focus has been TableKit. I created the product independently and worked across the full frontend experience, from Gutenberg integration to table editing interactions and responsive behavior.',
    highlights: [
      'Created TableKit independently',
      'Built the native Gutenberg table-building experience',
      'Developed table controls, editing flows, and responsive behavior',
      'Worked on data table, post table, and product table use cases',
      'Took ownership of frontend architecture, UX details, and product polish',
    ],
    skills: ['React', 'Gutenberg', 'WordPress Plugin Development', 'JavaScript', 'Product UI'],
    current: true,
  },
  {
    period: '2026 - Future',
    role: 'Frontend-Focused Full-Stack Engineer & SaaS Builder',
    type: 'Vision',
    description:
      'Transitioning into full-stack development while building independent SaaS products. Focused on solving real-world business problems in F-commerce and eCommerce using AI-driven solutions.',
    highlights: [
      'Build AI Customer Support Agent for F-commerce sellers',
      'Create all-in-one business tools (chat, inventory, order management)',
      'Launch profitable SaaS products with real users',
      'Develop backend skills (Node.js, databases, APIs)',
      'Work globally or build own startup',
    ],
    skills: ['React', 'Node.js', 'Database Management', 'API Development', 'SaaS Product Development'],
    future: true,
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
          <div
            className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-emerald-500/30 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={`${item.period}-${item.role}`} className="relative flex gap-6 group">
                <div className="relative shrink-0 w-12 h-12 hidden sm:flex z-10">
                  <div className="absolute inset-0 rounded-xl bg-background" />
                  <div
                    className={`relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 group-hover:scale-110 ${item.current
                      ? 'bg-blue-500/20 border-blue-500/40 text-blue-400 shadow-lg shadow-blue-500/10'
                      : item.future
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10'
                        : 'bg-white/5 border-white/10 text-muted-foreground'
                      }`}
                  >
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

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
