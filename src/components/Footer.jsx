"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001B4B] text-white transition-colors duration-500 hover:bg-[#002f66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Adama Djan Amadou Diallo
            </h3>
            <p className="text-gray-300 text-lg">
              Développeur Frontend passionné par la création d'interfaces
              modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/about" className="hover:text-[#2AE8A8] transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#2AE8A8] transition"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#2AE8A8] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3 hover:text-[#2AE8A8] transition">
                <FaEnvelope />{" "}
                <a href="mailto:adamadjandiallo@gmail.com">
                  adamadjandiallo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#2AE8A8] transition">
                <FaPhone /> (+224) 629 31 95 56
              </li>
              <li className="flex items-center gap-3 hover:text-[#2AE8A8] transition">
                <FaMapMarkerAlt /> Guinée, Conakry
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex mt-6 gap-4">
              <a
                href="https://www.linkedin.com/in/adama-djan-diallo/"
                target="_blank"
                className="p-3 rounded-full border-2 border-[#2AE8A8] hover:bg-[#2AE8A8] hover:text-[#001B4B] transition animate-pulse-slow"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/AdamaDjan2024"
                target="_blank"
                className="p-3 rounded-full border-2 border-[#2AE8A8] hover:bg-[#2AE8A8] hover:text-[#001B4B] transition animate-pulse-slow"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://x.com/adahoussei"
                target="_blank"
                className="p-3 rounded-full border-2 border-[#2AE8A8] hover:bg-[#2AE8A8] hover:text-[#001B4B] transition animate-pulse-slow"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-lg text-gray-300">
          <p>
            &copy; {currentYear} Adama Djan Amadou Diallo. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </footer>
  );
}
