import { MailIcon } from "lucide-react";
export function Contact() {
  const handleContactClick = () => {
    window.location.href = "mailto:sthiber133guevara@gmail.com";
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute top-40 -left-40 w-80 h-80 bg-[#4ECDC4]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-10">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-[#4ECDC4] to-[#556270] hover:opacity-90 text-white font-medium px-8 py-4 rounded-lg flex items-center justify-center transition-all duration-300 mx-auto"
          >
            <MailIcon size={20} className="mr-2" />
            Send an email
          </button>
        </div>
      </div>
    </section>
  );
}
