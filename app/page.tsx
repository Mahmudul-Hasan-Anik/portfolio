import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GitHubProjectsSection from '@/components/sections/GitHubProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <GitHubProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
