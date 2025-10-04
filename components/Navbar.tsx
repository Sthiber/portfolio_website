import { useEffect, useState, useRef } from "react";
import { MenuIcon, XIcon } from "lucide-react";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   This sets the links found in the navbar
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
    { name: "Resume", href: "/Sthiber_Guevara_Resume.pdf", external: true },
  ];

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f1116]/90 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold bg-gradient-to-r from-[#4ECDC4] to-[#556270] bg-clip-text text-transparent"
        >
          Sthiber
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.name}
                onClick={() => {
                  if (link.id) handleScrollToSection(link.id);
                }}
                className="text-gray-300 hover:text-[#4ECDC4] transition-colors duration-300"
              >
                {link.name}
              </button>
            )
          )}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#161923] absolute top-full left-0 w-full py-4 shadow-lg border-t border-gray-800"
        >
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#4ECDC4] py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    if (link.id) handleScrollToSection(link.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-[#4ECDC4] py-2 transition-colors duration-300"
                >
                  {link.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
