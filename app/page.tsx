import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//  className="px-10 py-6" add to divs instead
export default function Home() {
    return (
        <main >
            <div className="h-screen border border-slate-400 bg-slate-50 grid px-10 pt-10">
                <Navbar />
                <Hero />
            </div>
            <Skills />
            <Projects />
        </main>
    )
}