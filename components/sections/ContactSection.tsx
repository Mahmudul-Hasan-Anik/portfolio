'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { isSupabaseConfigured, supabase } from '@/lib/supabaseClient';
import { Send, Mail, MessageCircle, Linkedin, Github, Calendar, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CONTACT_LINKS = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'Hasan22dev@gmail.com',
    href: 'mailto:Hasan22dev@gmail.com',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'hover:bg-blue-500/5',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'WhatsApp',
    value: '+880 1716792397',
    href: 'https://wa.me/8801716792397',
    color: 'text-green-400',
    border: 'border-green-500/20',
    bg: 'hover:bg-green-500/5',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anik-dev',
    href: 'https://linkedin.com/in/anik-dev',
    color: 'text-sky-400',
    border: 'border-sky-500/20',
    bg: 'hover:bg-sky-500/5',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/mahmudul-hasan-anik',
    href: 'https://github.com/mahmudul-hasan-anik',
    color: 'text-white',
    border: 'border-white/15',
    bg: 'hover:bg-white/5',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    try {
      // Send email using EmailJS
      const emailParams = {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        subject: form.subject.trim() || 'Portfolio Contact Form',
        message: form.message.trim(),
        to_email: 'Hasan22dev@gmail.com', // Your Gmail address
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Also save to Supabase if configured (for backup)
      if (isSupabaseConfigured && supabase) {
        await supabase.from('contact_submissions').insert({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        });
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-8 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            {"Let's"} build something <span className="text-gradient">great together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Currently working at Roxnor. Open to meaningful collaborations and future opportunities.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Left: contact info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Open to discussions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Whether you want to discuss potential collaborations, future opportunities, or have questions
              about my work — I am happy to connect and share insights.
            </p>

            <div className="space-y-3 mb-10">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl glass border ${link.border} ${link.bg} transition-all duration-200 group`}
                >
                  <div className={`${link.color} group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{link.label}</p>
                    <p className={`text-sm font-medium ${link.color}`}>{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Book call CTA */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500/12 to-cyan-500/6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-foreground text-sm">Book a Discovery Call</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Prefer a quick video call? Schedule a 30-minute call to discuss your project or opportunity.
              </p>
              <a
                href="https://meet.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-center block"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="rounded-2xl glass border border-white/8 p-6 sm:p-8 mt-[110px]">
            <h3 className="text-lg font-bold text-foreground mb-6">Send a message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-12">
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">Message sent!</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Thanks for reaching out. I will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground hover:bg-white/10 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
