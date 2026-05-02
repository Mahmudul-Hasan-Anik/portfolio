'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, ArrowRight, Table2, Blocks, Megaphone, Layers, Bot } from 'lucide-react';

type Product = {
  name: string;
  tagline: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  image: string;
  contributions: string[];
  skills: string[];
  impact: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'TableKit',
    tagline: 'WordPress Table Builder Plugin',
    category: 'WordPress Plugin',
    icon: <Table2 className="w-5 h-5" />,
    color: 'text-blue-400',
    bg: 'from-blue-500/15 to-blue-500/5',
    border: 'border-blue-500/25',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Developed advanced table builder UI with drag-and-drop interactions',
      'Implemented Gutenberg block integration for seamless editor experience',
      'Improved frontend performance and data rendering efficiency',
      'Enhanced responsive behavior across all device sizes',
    ],
    skills: ['React', 'Gutenberg', 'JavaScript', 'WordPress', 'CSS'],
    impact: 'Improved user workflow efficiency and reduced table creation time by ~40%',
  },
  {
    name: 'GutenKit',
    tagline: 'Gutenberg Blocks & Website Builder',
    category: 'Gutenberg Ecosystem',
    icon: <Blocks className="w-5 h-5" />,
    color: 'text-sky-400',
    bg: 'from-sky-500/15 to-sky-500/5',
    border: 'border-sky-500/25',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Built reusable Gutenberg block components with rich customization options',
      'Improved the editor UI/UX for a smoother page-building experience',
      'Optimized block rendering and editor performance',
      'Contributed to the design system and component library',
    ],
    skills: ['Gutenberg', 'React', 'WordPress', 'JavaScript', 'SCSS'],
    impact: 'Enhanced the page-building experience for thousands of active WordPress users',
  },
  {
    name: 'PopupKit',
    tagline: 'Popup Builder & Lead Generation Tool',
    category: 'Conversion Tool',
    icon: <Megaphone className="w-5 h-5" />,
    color: 'text-orange-400',
    bg: 'from-orange-500/15 to-orange-500/5',
    border: 'border-orange-500/25',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Developed the popup builder drag-and-drop interface',
      'Implemented advanced trigger logic and targeting UI',
      'Designed conversion-focused templates and layouts',
      'Optimized user flows to reduce setup friction',
    ],
    skills: ['JavaScript', 'React', 'CSS', 'WordPress', 'UX Design'],
    impact: 'Helped businesses improve lead capture rates with better popup experiences',
  },
  {
    name: 'ElementsKit',
    tagline: 'Elementor Addon Ecosystem',
    category: 'Elementor Addon',
    icon: <Layers className="w-5 h-5" />,
    color: 'text-red-400',
    bg: 'from-red-500/15 to-red-500/5',
    border: 'border-red-500/25',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Built and maintained multiple Elementor widget components',
      'Enhanced UI elements with improved accessibility and interactivity',
      'Contributed to product maintenance and bug resolution cycles',
      'Updated components to align with modern design standards',
    ],
    skills: ['Elementor', 'JavaScript', 'CSS', 'PHP', 'WordPress'],
    impact: 'Supported one of the most popular Elementor addons with a large global user base',
  },
  {
    name: 'GetGenie',
    tagline: 'AI Writing & Productivity SaaS Tool',
    category: 'AI SaaS Product',
    icon: <Bot className="w-5 h-5" />,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/15 to-emerald-500/5',
    border: 'border-emerald-500/25',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    contributions: [
      'Developed AI-powered writing interface and prompt management UI',
      'Built responsive dashboard layouts for content generation workflows',
      'Improved UX to make AI features more intuitive and accessible',
      'Optimized performance for a smooth SaaS editing experience',
    ],
    skills: ['React', 'JavaScript', 'CSS', 'SaaS UI', 'Dashboard Design'],
    impact: 'Contributed to a growing AI productivity tool serving content creators globally',
  },
];

export default function FeaturedWorkSection() {
  const { ref, inView } = useInView();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Products I have <span className="text-gradient">contributed to</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real commercial products with active users — not just side projects.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              className={`group relative rounded-2xl overflow-hidden border ${product.border} bg-gradient-to-b ${product.bg} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border ${product.border} text-xs font-medium ${product.color}`}>
                  {product.icon}
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`text-xl font-bold ${product.color} mb-1`}>{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <p className="text-xs text-muted-foreground/80 italic mb-4 leading-relaxed border-l-2 border-white/10 pl-3">
                  {product.impact}
                </p>

                {/* Expand button */}
                <button
                  onClick={() => setExpanded(expanded === product.name ? null : product.name)}
                  className={`flex items-center gap-1.5 text-sm font-medium ${product.color} hover:underline transition-all`}
                >
                  {expanded === product.name ? 'Hide Details' : 'View Contributions'}
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${expanded === product.name ? 'rotate-90' : ''}`} />
                </button>

                {/* Expanded contributions */}
                {expanded === product.name && (
                  <ul className="mt-4 space-y-2">
                    {product.contributions.map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${product.color.replace('text-', 'bg-')} mt-1.5 shrink-0`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
