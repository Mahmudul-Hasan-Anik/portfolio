'use client';

import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

type Skill = { name: string; level: number };
type SkillGroup = { category: string; color: string; bg: string; border: string; skills: Skill[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-cyan-500/5',
    border: 'border-blue-500/20',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 93 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 / CSS3', level: 97 },
    ],
  },
  {
    category: 'WordPress',
    color: 'text-sky-400',
    bg: 'from-sky-500/10 to-blue-500/5',
    border: 'border-sky-500/20',
    skills: [
      { name: 'Gutenberg Blocks', level: 90 },
      { name: 'Custom Plugins', level: 88 },
      { name: 'WooCommerce', level: 82 },
      { name: 'Elementor Addons', level: 85 }
    ],
  },
  {
    category: 'Product & UX',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-teal-500/5',
    border: 'border-cyan-500/20',
    skills: [
      { name: 'UI/UX Thinking', level: 87 },
      { name: 'SaaS Frontend Systems', level: 83 },
      { name: 'Dashboard Interfaces', level: 86 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'Responsive Design', level: 96 },
      { name: 'Component Architecture', level: 88 },
    ],
  },
];

const TAGS = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'PHP',
  'WordPress', 'Gutenberg', 'WooCommerce', 'Elementor', 'REST APIs',
  'Git', 'Figma', 'Webpack', 'SCSS'
];

function AnimatedBar({ level, inView, color }: { level: number; inView: boolean; color: string }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), 150);
      return () => clearTimeout(t);
    }
  }, [inView, level]);
  return (
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-8 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Skills & Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            My technical <span className="text-gradient">toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            3+ years of hands-on experience across modern frontend technologies and the WordPress ecosystem.
          </p>
        </div>

        {/* Skill groups */}
        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.category}
              className={`relative rounded-2xl p-6 bg-gradient-to-b ${group.bg} border ${group.border} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <h3 className={`text-lg font-bold ${group.color} mb-5`}>{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                      <span className={`text-xs font-semibold ${group.color}`}>{skill.level}%</span>
                    </div>
                    <AnimatedBar
                      level={skill.level}
                      inView={inView}
                      color={
                        gi === 0
                          ? 'from-blue-500 to-cyan-400'
                          : gi === 1
                            ? 'from-sky-500 to-blue-400'
                            : 'from-cyan-500 to-teal-400'
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology tag cloud */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 font-medium">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full glass border border-white/8 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
