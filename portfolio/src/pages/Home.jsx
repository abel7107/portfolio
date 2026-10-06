import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";
import CaseStudy from "../components/CaseStudy";
import Experience from "../components/Experience";
import Education from "../components/Education";
import GithubSection from "../components/GithubSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  const ref = useReveal();
  return (
    <main ref={ref}>
      <Hero />
      <Stats />
      <About />
      <Journey />
      <Skills />
      <FeaturedProject />
      <Projects />
      <CaseStudy />
      <Experience />
      <Education />
      <GithubSection />
      <Contact />
      <Footer />
    </main>
  );
}
