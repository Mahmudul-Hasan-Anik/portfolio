'use client';

import { useInView } from '@/hooks/useInView';
import { Github, ExternalLink, Code as Code2, Layers, Table2 } from 'lucide-react';

const GITHUB_PROFILE_URL = 'https://github.com/Mahmudul-Hasan-Anik';

const TABLEKIT_TECH = ['React', 'PHP', 'Gutenberg'];

export default function GitHubProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-8 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Latest Project
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A highlighted project from my recent work, with more code and experiments available on GitHub.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-[1fr_0.7fr] gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <article className="group rounded-2xl p-6 sm:p-8 glass border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                  <Table2 className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-semibold tracking-widest uppercase mb-1">
                    Latest Build
                  </p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-400 transition-colors">
                    TableKit
                  </h3>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" />
                Active Project
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              TableKit is a modern table-focused UI project built for organizing, scanning, and managing structured data with a clean developer-friendly interface.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {TABLEKIT_TECH.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-6 border-t border-white/5">
              <Code2 className="w-4 h-4 text-blue-400" />
              Built as part of my latest frontend work.
            </div>
          </article>

          <aside className="rounded-2xl p-6 sm:p-8 glass border border-white/8 flex flex-col justify-between gap-8">
            <div>
              <Github className="w-9 h-9 text-purple-400 mb-5" />
              <h3 className="text-xl font-bold text-foreground mb-3">Explore My GitHub</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visit my GitHub profile to see repositories, experiments, and ongoing project updates.
              </p>
            </div>

            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 text-sm font-semibold transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              View GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
