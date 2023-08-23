import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/About Me";
import Navbar from "../components/LgNavbar";
import { AoS } from "../components/AoS";
import Hero from "../components/Hero";
import ContactMe from "../components/Contact Me";

export default function Home() {
  return (
    <>
      <header className="bg-gradient">
        <div className="mx-auto w-container" id="header">
          <Navbar />
          <Hero />
        </div>
        <img src="/HeroWaves.svg" className="no-select mt-32 w-screen" />
      </header>

      <main>
        <AoS.FadeUp>
          <AboutMe />
        </AoS.FadeUp>
        <AoS.FadeUp>
          <Skills />
        </AoS.FadeUp>
        <Projects />
      </main>
      <footer className="mt-32 bg-gradient pb-4">
        <img src="/FooterWaves.svg" className="no-select w-screen" />
        <AoS.FadeIn>
          <ContactMe />
        </AoS.FadeIn>
      </footer>
    </>
  );
}
