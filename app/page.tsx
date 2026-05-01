import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Products from '@/components/portfolio/Products';
import Experience from '@/components/portfolio/Experience';
import Github from '@/components/portfolio/Github';
import WhyHireMe from '@/components/portfolio/WhyHireMe';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Products />
      <Experience />
      <Github />
      <WhyHireMe />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
