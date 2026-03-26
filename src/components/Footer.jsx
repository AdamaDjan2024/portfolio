"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
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
  const quickLinks = [
    { href: "/about", label: "À propos" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#001B4B] text-white transition-colors duration-500 ">
      <div className="page-shell py-16">
        <div className="footer-tablet-grid grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="footer-about">
            <h3 className="footer-tablet-name text-2xl font-bold mb-4">
              {siteData.fullName}
            </h3>
            <p className="footer-tablet-copy text-gray-300 text-lg">
              {siteData.title} passionnée par la création d’interfaces modernes
              et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-tablet-title text-2xl font-semibold mb-4">
              Liens rapides
            </h3>
            <ul className="footer-tablet-list space-y-3 text-lg">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#2AE8A8] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="footer-tablet-title text-2xl font-semibold mb-4">
              Contact
            </h3>
            <ul className="footer-tablet-list space-y-3 text-lg">
              <li className="footer-contact-item flex items-center gap-3 hover:text-[#2AE8A8] transition">
                <FaEnvelope />{" "}
                <a
                  href={`mailto:${siteData.email}`}
                  className="footer-contact-link"
                >
                  {siteData.email}
                </a>
              </li>
              <li className="footer-contact-item flex items-center gap-3 hover:text-[#2AE8A8] transition">
                <FaPhone /> {siteData.phone}
              </li>
              <li className="footer-contact-item flex items-center gap-3 hover:text-[#2AE8A8] transition">
                <FaMapMarkerAlt /> {siteData.location}
              </li>
            </ul>

            {/* Social icons */}
            <div className="footer-social-row flex mt-6 gap-4">
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link p-3 rounded-full border-2 border-[#2AE8A8] hover:bg-[#2AE8A8] hover:text-[#001B4B] transition animate-pulse-slow"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={siteData.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link p-3 rounded-full border-2 border-[#2AE8A8] hover:bg-[#2AE8A8] hover:text-[#001B4B] transition animate-pulse-slow"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={siteData.twitter}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link p-3 rounded-full border-2 border-[#2AE8A8] hover:bg-[#2AE8A8] hover:text-[#001B4B] transition animate-pulse-slow"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-600 mt-12 pt-8 text-center text-lg text-gray-300">
          &copy; {currentYear} {siteData.fullName}. Tous droits réservés.
        </div>
      </div>

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

        @media (min-width: 768px) and (max-width: 900px) {
          .footer-tablet-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem 1.5rem;
          }

          .footer-about {
            grid-column: 1 / -1;
            max-width: 42rem;
          }

          .footer-tablet-name {
            font-size: 1.5rem;
            line-height: 1.25;
          }

          .footer-tablet-title {
            font-size: 1.3rem;
            line-height: 1.3;
            margin-bottom: 0.75rem;
          }

          .footer-tablet-copy,
          .footer-tablet-list,
          .footer-bottom {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .footer-contact-item {
            align-items: flex-start;
            gap: 0.65rem;
            min-width: 0;
          }

          .footer-contact-link {
            overflow-wrap: anywhere;
            word-break: break-word;
          }

          .footer-social-row {
            gap: 0.75rem;
          }

          .footer-social-link {
            padding: 0.7rem;
          }
        }
      `}</style>
    </footer>
  );
}
