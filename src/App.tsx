import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
function App() {
  return (
    <div className="bg-[#0f1116] text-white min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
