import Hero from './components/Hero';
import Dedication from './components/Dedication';
import ProjectsShowcase from './components/ProjectsShowcase';
import Features from './components/HomepageFeatures';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Dedication />
      <ProjectsShowcase />
      <Features />
      <Contact />
    </>
  );
}
