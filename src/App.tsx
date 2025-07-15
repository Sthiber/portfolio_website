import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
function App() {
  return (
    <div className="bg-[#0f1116] text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
