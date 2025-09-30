"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10h16V10" />
        </svg>
      ),
    },
    {
      name: "Projects",
      href: "/projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
    },
    {
      name: "Certifications",
      href: "/certifications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#001B4B]">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* ---- Gauche : Avatar + Nom ---- */}
          <div className="flex items-center gap-3">
            {/* Avatar rond avec icône */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm sm:text-base">
            Adama Djan Amadou Diallo
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">
              Développeuse Frontend Junior
              </span>
            </div>
          </div>

          {/* ---- Droite : Navigation ---- */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Bouton Let's Talk */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition"
            >
        Contact
            </Link>
          </div>

          {/* ---- Mobile menu button ---- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile Navigation ---- */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center mt-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition"
              onClick={() => setIsMenuOpen(false)}
            >
             Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
