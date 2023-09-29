import Contact from '@/components/sections/Contact';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/skills/Skills';
import About from '@/components/sections/aboutme/Aboutme';
import Introduction from '@/components/sections/aboutme/Introduction';

function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
