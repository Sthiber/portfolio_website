import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
export function Footer() {
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };
  return (
    <footer className="bg-[#0c0d11] py-12 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-[#4ECDC4] to-[#556270] bg-clip-text text-transparent"
            ></a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Sthiber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sthiber-guevara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:sthiber133guevara@gmail.com"
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
