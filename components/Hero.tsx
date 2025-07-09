import { useEffect, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowDownIcon,
} from "lucide-react";

export function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0f1116]">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-b from-[#4ECDC4]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-[#556270]/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 w-full h-full z-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-l border-gray-500 h-full"></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="border-t border-gray-500 w-full col-span-6"
            style={{
              top: `${i * 20}%`,
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          <span
            className={`block transition-all duration-700 ${
              animationComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-[#4ECDC4] to-[#556270] bg-clip-text text-transparent">
              Sthiber Guevara
            </span>
          </span>
        </h1>
        <h2
          className={`text-xl md:text-2xl text-gray-400 mb-8 transition-all duration-700 delay-300 ${
            animationComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          A Software Developer in Houston
        </h2>
        <div
          className={`flex space-x-6 mb-12 transition-all duration-700 delay-500 ${
            animationComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="https://github.com/Sthiber"
            target="_blank"
            rel="noopener noreferencer"
            className="bg-[#1a1d25] p-3 rounded-full hover:bg-[#4ECDC4]/20 hover:text-[#4ECDC4] transition-all duration-300"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sthiber-guevara/"
            target="_blank"
            rel="noopener noreferencer"
            className="bg-[#1a1d25] p-3 rounded-full hover:bg-[#4ECDC4]/20 hover:text-[#4ECDC4] transition-all duration-300"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:sthiber133guevara@gmail.com"
            className="bg-[#1a1d25] p-3 rounded-full hover:bg-[#4ECDC4]/20 hover:text-[#4ECDC4] transition-all duration-300"
          >
            <MailIcon size={20} />
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDownIcon size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
