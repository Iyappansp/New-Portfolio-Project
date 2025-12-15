import Navbar from "@/components/shared/Navbar";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ScrollToTop from "@/components/shared/ScrollToTop";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import dynamic from "next/dynamic";

// Lazy-load non-critical sections below the fold
// Note: These will still be code-split and lazy-loaded, but server-rendered for better SEO
const Skills = dynamic(() => import("@/components/sections/Skills"));

const Projects = dynamic(() => import("@/components/sections/Projects"));

const Experience = dynamic(() => import("@/components/sections/Experience"));

const Achievements = dynamic(() => import("@/components/sections/Achievements"));

const Contact = dynamic(() => import("@/components/sections/Contact"));

const Footer = dynamic(() => import("@/components/sections/Footer"));

const AIAssistant = dynamic(() => import("@/components/shared/AIAssistant"));

const FloatingActionButtons = dynamic(() => import("@/components/shared/FloatingActionButtons"));


export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <FloatingActionButtons />
    </SmoothScroll>
  );
}
