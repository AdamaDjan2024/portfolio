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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l9-9 9 9M4 10v10h16V10"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      href: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      ),
    },
    {
      name: "Certifications",
      href: "/certifications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* ---- Gauche : Avatar + Nom ---- */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#2AE8A8] to-[#06B6D4] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#001B4B] font-semibold text-xs md:text-sm lg:text-base">
                Adama Djan Amadou Diallo
              </span>
              <span className="text-[#002B45] text-xs md:text-sm">
                Développeuse Frontend Junior
              </span>
            </div>
          </div>

          {/* ---- Navigation Desktop ---- */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 lg:gap-2 text-[#002B45] hover:text-[#2AE8A8] px-2.5 lg:px-3 py-2 rounded-md text-sm lg:text-base transition-colors hover:bg-[#2AE8A8]/10"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 lg:ml-4 px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-[#002B45] bg-[#2AE8A8] hover:bg-[#24C896] transition"
            >
              Contact
            </Link>
          </div>

          {/* ---- Menu mobile ---- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#002B45] hover:text-[#2AE8A8]"
            >
              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/50 shadow-lg max-h-screen overflow-auto">
          <div className="px-4 py-3 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 sm:gap-3 text-[#002B45] hover:text-[#2AE8A8] px-3 py-2 rounded-md hover:bg-[#2AE8A8]/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center mt-2 px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium text-[#002B45] bg-[#2AE8A8]"
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
