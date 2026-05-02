'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Github, Star, GitFork, ExternalLink, Users, Code as Code2, Loader as Loader2 } from 'lucide-react';

interface Repo {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  url: string;
}

interface GithubData {
  user: {
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
  };
  repos: Repo[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  JavaScript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  React: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'C++': 'bg-red-500/20 text-red-400 border-red-500/30',
  Python: 'bg-green-500/20 text-green-400 border-green-500/30',
  HTML: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  CSS: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  PHP: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  Java: 'bg-red-500/20 text-red-400 border-red-500/30',
  default: 'bg-white/10 text-muted-foreground border-white/20',
};

export default function GitHubProjectsSection() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        const response = await fetch(
          `${supabaseUrl}/functions/v1/fetch-github-data`,
          {
            headers: {
              'Authorization': `Bearer ${anonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const githubData = await response.json();
        setData(githubData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Open Source
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Latest Projects on <span className="text-gradient">GitHub</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open source repositories and side projects showcasing my work in web development.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-12 px-6 rounded-2xl bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-sm">Unable to load GitHub data. Please try again later.</p>
          </div>
        ) : data ? (
          <>
            {/* GitHub Stats */}
            <div
              ref={ref}
              className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="rounded-2xl glass border border-white/8 p-6 text-center hover:bg-white/5 transition-all">
                <img src={data.user.avatar_url} alt={data.user.login} className="w-12 h-12 rounded-full mx-auto mb-3" />
                <p className="text-xs text-muted-foreground mb-1">GitHub Profile</p>
                <p className="text-lg font-bold text-foreground">@{data.user.login}</p>
              </div>
              <div className="rounded-2xl glass border border-white/8 p-6 text-center hover:bg-white/5 transition-all">
                <Code2 className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Public Repos</p>
                <p className="text-lg font-bold text-foreground">{data.user.public_repos}</p>
              </div>
              <div className="rounded-2xl glass border border-white/8 p-6 text-center hover:bg-white/5 transition-all">
                <Users className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Followers</p>
                <p className="text-lg font-bold text-foreground">{data.user.followers}</p>
              </div>
            </div>

            {/* Repositories */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {data.repos.map((repo, i) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group rounded-2xl p-6 glass border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, box-shadow 0.3s ease, translate 0.3s ease`,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-foreground group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                    {repo.name}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 min-h-10">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    {repo.language ? (
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                          LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.default
                        }`}
                      >
                        {repo.language}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Language unknown</span>
                    )}

                    <div className="flex items-center gap-1.5 text-yellow-400">
                      <Star className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">{repo.stars}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* View all button */}
            <div className="text-center mt-12">
              <a
                href="https://github.com/Mahmudul-Hasan-Anik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 text-sm font-semibold transition-all duration-200 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                View All on GitHub
              </a>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
