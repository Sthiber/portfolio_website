import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
function App() {
  return (
    <div className="bg-[#0f1116] text-white min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
      </main>
    </div>
  );
}

export default App;
