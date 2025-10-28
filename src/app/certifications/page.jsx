"use client";

import { useState } from "react";
import certifications from "@/data/certifications.json";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CertificationsPage() {
  const [selectedCertif, setSelectedCertif] = useState(null);

  return (
    <div className="min-h-screen bg-white py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#001B4B] mb-6 tracking-tight">
          Mes Certifications
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez mes certifications qui attestent de mes compétences et
          expertise.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <h2 className="text-2xl font-bold text-[#001B4B] mb-2">
                  {cert.name}
                </h2>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-[#2AE8A8] font-medium">
                    {cert.issuer}
                  </span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {cert.description.length > 120
                    ? cert.description.slice(0, 120) + "..."
                    : cert.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertif(cert)}
                className="mt-4 w-full bg-[#2AE8A8] hover:bg-[#28c39b] text-white font-semibold py-3 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Voir la certification
                <FaExternalLinkAlt />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden p-6 flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setSelectedCertif(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-3xl font-bold transition"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="mb-4 text-center">
              <h2 className="text-3xl font-bold text-[#001B4B]">
                {selectedCertif.name}
              </h2>
              <p className="text-[#2AE8A8] font-medium">
                {selectedCertif.issuer}
              </p>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={selectedCertif.url}
              className="flex-1 w-full border border-gray-200 rounded-xl"
              title={selectedCertif.name}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
