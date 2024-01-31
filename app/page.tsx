import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
    return (
        <main className="px-10 py-6">
            <div className="h-screen">
                <Navbar />
                <Hero />
            </div>
            <Skills />
            <Projects />
        </main>
    )
}