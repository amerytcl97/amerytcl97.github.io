import About from "../components/sections/aboutme/Aboutme";
import Introduction from "../components/sections/aboutme/Introduction";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";


function Home() {

  return (
    <div>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
