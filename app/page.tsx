import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
    return (
        <div >
            <div className="h-screen bg-slate-50 grid px-10 pt-10 lg:px-20">
                <Navbar />
                <Hero />
            </div>
            <Skills />
            <Projects />
        </div>
    )
}