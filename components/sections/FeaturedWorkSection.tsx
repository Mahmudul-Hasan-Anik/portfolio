'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, ArrowRight, Table2, Blocks, Megaphone, Layers, Bot, Mail, Sparkles } from 'lucide-react';

type Product = {
  name: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  image: string;
  link: string;
  role: string;
  contributions: string[];
  skills: string[];
};

const PRODUCTS: Product[] = [
  {
    name: 'TableKit',
    title: 'Native Table Builder for WordPress Data Tables',
    category: 'WordPress Plugin',
    icon: <Table2 className="w-5 h-5" />,
    color: 'text-blue-400',
    bg: 'from-blue-500/15 to-blue-500/5',
    border: 'border-blue-500/25',
    image: 'https://ps.w.org/table-builder-block/assets/banner-772x250.jpg?rev=3509972',
    link: 'https://wordpress.org/plugins/table-builder-block/',
    role: 'Sole creator',
    contributions: [
      'Created TableKit independently from concept to implementation',
      'Built the native Gutenberg table-building experience',
      'Developed table editing controls, responsive behavior, and UI interactions',
      'Worked on structured table use cases including data, posts, and product tables',
      'Handled frontend architecture, interaction details, and plugin polish',
    ],
    skills: ['React', 'Gutenberg', 'JavaScript', 'WordPress', 'CSS'],
  },
  {
    name: 'GutenKit',
    title: 'Page Builder Blocks, Patterns, and Templates for Gutenberg',
    category: 'Gutenberg Ecosystem',
    icon: <Blocks className="w-5 h-5" />,
    color: 'text-sky-400',
    bg: 'from-sky-500/15 to-sky-500/5',
    border: 'border-sky-500/25',
    image: 'https://ps.w.org/gutenkit-blocks-addon/assets/banner-772x250.jpg?rev=3116242',
    link: 'https://wordpress.org/plugins/gutenkit-blocks-addon/',
    role: 'Major contributor',
    contributions: [
      'Contributed to more than 15 Gutenberg blocks',
      'Contributed to 3 or 4 product modules',
      'Built reusable block components with rich customization controls',
      'Improved editor UI patterns for a smoother page-building workflow',
      'Worked on block rendering, responsive behavior, and maintainability',
    ],
    skills: ['Gutenberg', 'React', 'WordPress', 'JavaScript', 'SCSS'],
  },
  {
    name: 'PopupKit',
    title: 'Popup Builder with Gamification and WooCommerce Triggers',
    category: 'Conversion Tool',
    icon: <Megaphone className="w-5 h-5" />,
    color: 'text-orange-400',
    bg: 'from-orange-500/15 to-orange-500/5',
    border: 'border-orange-500/25',
    image: 'https://ps.w.org/popup-builder-block/assets/banner-772x250.jpg?rev=3421679',
    link: 'https://wordpress.org/plugins/popup-builder-block/',
    role: 'Gamification creator',
    contributions: [
      'Created the gamification part of PopupKit',
      'Built conversion-focused gamified popup experiences',
      'Worked on visitor engagement flows and campaign-style interactions',
      'Implemented UI behavior for gamification mechanics',
      'Polished the feature experience for real marketing use cases',
    ],
    skills: ['JavaScript', 'React', 'CSS', 'WordPress', 'UX Design'],
  },
  {
    name: 'ElementsKit',
    title: 'Advanced Widgets and Templates Addon for Elementor',
    category: 'Elementor Addon',
    icon: <Layers className="w-5 h-5" />,
    color: 'text-red-400',
    bg: 'from-red-500/15 to-red-500/5',
    border: 'border-red-500/25',
    image: 'https://ps.w.org/elementskit-lite/assets/banner-772x250.jpg?rev=3480947',
    link: 'https://wordpress.org/plugins/elementskit-lite/',
    role: 'Contributor',
    contributions: [
      'Contributed to ElementsKit Lite product development',
      'Worked on Elementor widget and interface improvements',
      'Supported product maintenance and bug-fix cycles',
      'Improved frontend behavior, styling, and usability details',
      'Collaborated with the team on production plugin releases',
    ],
    skills: ['Elementor', 'JavaScript', 'CSS', 'PHP', 'WordPress'],
  },
  {
    name: 'EmailKit',
    title: 'Email Customizer for WooCommerce and WordPress',
    category: 'WooCommerce Tool',
    icon: <Mail className="w-5 h-5" />,
    color: 'text-violet-400',
    bg: 'from-violet-500/15 to-violet-500/5',
    border: 'border-violet-500/25',
    image: 'https://ps.w.org/emailkit/assets/banner-772x250.png?rev=3097927',
    link: 'https://wordpress.org/plugins/emailkit/',
    role: 'Contributor',
    contributions: [
      'Contributed to EmailKit product development',
      'Worked on WooCommerce email customizer UI and editing workflows',
      'Improved builder controls, template editing experience, and interface details',
      'Supported frontend behavior, responsive polish, and maintainability',
      'Collaborated with the team on production plugin improvements',
    ],
    skills: ['React', 'JavaScript', 'WooCommerce', 'WordPress', 'CSS'],
  },
  {
    name: 'GetGenie',
    title: 'AI Content Writer with Keyword Research and SEO Tracking',
    category: 'AI SaaS Product',
    icon: <Bot className="w-5 h-5" />,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/15 to-emerald-500/5',
    border: 'border-emerald-500/25',
    image: 'https://ps.w.org/getgenie/assets/banner-772x250.png',
    link: 'https://wordpress.org/plugins/getgenie/',
    role: 'Contributor',
    contributions: [
      'Contributed to GetGenie product development',
      'Worked on AI-focused content workflow interfaces',
      'Built and refined responsive dashboard layouts',
      'Improved UX details for content generation and SEO workflows',
      'Supported frontend polish, performance, and maintainability',
    ],
    skills: ['React', 'JavaScript', 'CSS', 'SaaS UI', 'Dashboard Design'],
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Products I have <span className="text-gradient">contributed to</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            WordPress plugins and SaaS products where I shipped real features, built editor experiences, and contributed to production UI.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.name}
              className={`group relative rounded-2xl overflow-hidden border ${product.border} bg-gradient-to-b ${product.bg} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="block relative h-44 overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={`${product.name} WordPress plugin banner`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border ${product.border} text-xs font-medium ${product.color}`}>
                  {product.icon}
                  {product.category}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur-sm border border-white/10 text-xs font-semibold text-foreground">
                  {product.role}
                </div>
              </a>

              <div className="p-5">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl font-bold ${product.color} mb-1 hover:underline flex items-start gap-1.5`}
                >
                  <span>{product.name}</span>
                  <ExternalLink className="w-4 h-4 mt-1 shrink-0" />
                </a>
                <p className="text-sm text-foreground/85 font-medium mb-3 leading-snug">{product.title}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-xs text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpanded(expanded === product.name ? null : product.name)}
                  className={`flex items-center gap-1.5 text-sm font-medium ${product.color} hover:underline transition-all`}
                >
                  {expanded === product.name ? 'Hide Details' : 'View Contributions'}
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${expanded === product.name ? 'rotate-90' : ''}`} />
                </button>

                {expanded === product.name && (
                  <ul className="mt-4 space-y-2">
                    {product.contributions.map((contribution) => (
                      <li key={contribution} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${product.color.replace('text-', 'bg-')} mt-1.5 shrink-0`} />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
