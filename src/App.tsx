import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
function App() {
  return (
    <div className="bg-[#0f1116] text-white min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
