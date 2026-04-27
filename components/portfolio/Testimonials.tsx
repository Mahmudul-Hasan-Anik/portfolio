'use client';

import { useInView } from '@/hooks/useInView';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior Product Manager',
    company: 'TechVenture Labs',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "Mahmudul's ability to translate product requirements into pixel-perfect interfaces is remarkable. He doesn't just build what's asked — he proactively suggests improvements that make the product better. A genuine product thinker.",
    stars: 5,
  },
  {
    name: 'David Chen',
    role: 'Engineering Team Lead',
    company: 'WP Product Studio',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "One of the most reliable frontend engineers I've worked with. Mahmudul's code is clean, well-organized, and easy to build on top of. He takes full ownership of his work and consistently delivers on time.",
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Startup Founder',
    company: 'GrowthStack IO',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'We hired Mahmudul to build our SaaS dashboard from scratch. The result exceeded our expectations — beautiful, fast, and exactly what our users needed. He communicates exceptionally well and understands business context.',
    stars: 5,
  },
  {
    name: 'James Holloway',
    role: 'WordPress Agency Director',
    company: 'PixelCraft Agency',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Mahmudul brought a level of frontend craft to our WordPress projects that truly elevated the end product. His Gutenberg work is best-in-class. A developer who truly cares about the craft.',
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            What collaborators <span className="text-gradient">are saying</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feedback from product managers, engineering leads, clients, and founders.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="relative rounded-2xl p-6 glass border border-white/8 hover:border-blue-500/20 hover:bg-blue-500/3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-400/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
