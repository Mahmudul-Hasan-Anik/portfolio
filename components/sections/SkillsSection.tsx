'use client';

import { useInView } from '@/hooks/useInView';
import { useEffect, useState } from 'react';

type SkillCategory = { category: string; skills: { name: string; icon: string; color: string; border: string; textColor: string }[] };
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500/20 to-amber-500/20', border: 'border-yellow-500/30', textColor: 'text-yellow-300' },
      { name: 'TypeScript', icon: 'TS', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30', textColor: 'text-blue-300' },
      { name: 'PHP', icon: '🐘', color: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/30', textColor: 'text-purple-300' },
    ],
  },
  {
    category: 'CMS, Frameworks, Libraries & Technicals',
    skills: [
      { name: 'WordPress', icon: 'W', color: 'from-blue-600/20 to-blue-500/20', border: 'border-blue-600/30', textColor: 'text-blue-200' },
      { name: 'React', icon: '⚛️', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', textColor: 'text-blue-300' },
      { name: 'Next.js', icon: '▲', color: 'from-slate-500/20 to-gray-500/20', border: 'border-slate-500/30', textColor: 'text-slate-300' },
      { name: 'REST API', icon: '🔌', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', textColor: 'text-green-300' },
      { name: 'Gutenberg', icon: '📦', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', textColor: 'text-blue-300' },
      { name: 'Full Site Editing', icon: '✏️', color: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/30', textColor: 'text-purple-300' },
      { name: 'Plugin Development', icon: '🔌', color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/30', textColor: 'text-indigo-300' },
      { name: 'HTML 5', icon: '🏷️', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30', textColor: 'text-orange-300' },
      { name: 'CSS 3', icon: '🎭', color: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-500/30', textColor: 'text-blue-300' },
      { name: 'SASS', icon: '🍭', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', textColor: 'text-pink-300' },
      { name: 'Bootstrap', icon: '📱', color: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/30', textColor: 'text-purple-300' },
      { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500/20 to-teal-500/20', border: 'border-cyan-500/30', textColor: 'text-cyan-300' },
    ],
  },
  {
    category: 'Tools and Technologies',
    skills: [
      { name: 'Git', icon: '🔀', color: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', textColor: 'text-red-300' },
      { name: 'VSCode', icon: '💻', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', textColor: 'text-blue-300' },
      { name: 'NPM', icon: '📦', color: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/30', textColor: 'text-red-300' },
      { name: ' Figma', icon: '🎨', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', textColor: 'text-pink-300' },
    ],
  },
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

        {/* Skills by category */}
        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={category.category} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-widest">{category.category}</h3>
                <div className="h-1 w-20 mx-auto mt-3 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group px-5 py-3 rounded-2xl backdrop-blur-lg border bg-gradient-to-br ${skill.color} ${skill.border} text-xs font-bold ${skill.textColor} hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-default flex items-center gap-3 shadow-lg hover:border-opacity-100 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                    <span className="relative">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
