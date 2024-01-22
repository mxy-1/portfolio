import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}