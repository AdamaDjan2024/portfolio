"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  User,
  ChevronDown,
  AtSign,
} from "lucide-react";

// ===== Dropdown personnalisé =====
function Dropdown({ options, placeholder, name, required = false, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full h-12 flex items-center justify-between rounded-xl border-2 border-[#2AE8A8] bg-white text-[#001B4B] text-sm pl-3 pr-4 ${
          required && !selected ? "ring-1 ring-red-500" : ""
        }`}
      >
        <span className="truncate">{selected || placeholder}</span>
        <ChevronDown className="text-gray-400 ml-2" size={24} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 w-full bg-white border-2 border-[#2AE8A8] rounded-xl shadow-lg text-[#001B4B]"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 hover:bg-[#2AE8A8] hover:text-white rounded-md"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      <input type="hidden" name={name} value={selected} required={required} />
    </div>
  );
}

// ===== Composant principal =====
export default function ContactContent() {
  const siteData = {
    email: "adamadiandiallo9999@gmail.com",
    phone: "224629319556",
    location: "Guinée-Conakry",
    github: "https://github.com/AdamaDjan2024",
    linkedin: "https://www.linkedin.com/in/adama-djan-diallo/",
    twitter: "https://x.com/adahoussei",
  };

  const title = "Contactez-moi";

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-[#001B4B]">
        {/* ===== GAUCHE : Contact info ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between"
        >
          <div>
            {/* ✅ Titre responsive sur une seule ligne */}
            <motion.h1
              className="font-extrabold mb-6 text-nowrap"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: "1.1",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </motion.h1>

            <p className="text-[#374151] max-w-xl text-lg mb-8 leading-relaxed">
              Discutons de vos projets web, de vos idées créatives ou de
              potentielles collaborations. Je conçois des interfaces modernes et
              réalise des applications performantes adaptées à vos besoins.
            </p>

            {/* ✅ Card contact avec lignes alignées */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border-2 border-[#2AE8A8] p-6 text-[#001B4B] space-y-5">
              {/* Bloc Email */}
              <div className="flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex-shrink-0 p-2 bg-[#001B4B] rounded-md border border-[#2AE8A8]">
                  <Mail className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm text-[#6B7280] flex-shrink-0">
                    Email :
                  </span>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-base font-medium hover:underline truncate block"
                  >
                    {siteData.email}
                  </a>
                </div>
              </div>

              {/* Bloc Téléphone */}
              <div className="flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex-shrink-0 p-2 bg-[#001B4B] rounded-md border border-[#2AE8A8]">
                  <Phone className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm text-[#6B7280] flex-shrink-0">
                    Téléphone :
                  </span>
                  <a
                    href={`tel:+${siteData.phone}`}
                    className="text-base font-medium hover:underline truncate block"
                  >
                    +{siteData.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div className="mt-6 flex items-center gap-3 text-[#374151]">
              <MapPin size={18} />
              <span className="text-sm">{siteData.location}</span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-[#374151] mb-3">
              Retrouvez-moi
            </h3>
            <div className="flex gap-4">
              <a
                href={siteData.github}
                className="p-2 bg-[#001B4B] rounded-full hover:bg-[#2AE8A8] transition"
                aria-label="GitHub"
              >
                <Github size={18} className="text-white" />
              </a>
              <a
                href={siteData.linkedin}
                className="p-2 bg-[#001B4B] rounded-full hover:bg-[#2AE8A8] transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href={siteData.twitter}
                className="p-2 bg-[#001B4B] rounded-full hover:bg-[#2AE8A8] transition"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===== DROITE : Formulaire ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#2AE8A8]"
        >
          <h2 className="text-xl font-semibold mb-4 text-[#001B4B]">
            Envoyez un message
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = encodeURIComponent(form.name.value);
              const email = encodeURIComponent(form.email.value);
              const phone = encodeURIComponent(form.phone.value);
              const subject = encodeURIComponent(form.subject.value);
              const message = encodeURIComponent(form.message.value);

              window.location.href = `mailto:${siteData.email}?subject=${subject}&body=Nom:%20${name}%0AEmail:%20${email}%0ATéléphone:%20${phone}%0ASujet:%20${subject}%0AMessage:%20${message}`;
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-[#001B4B] mb-2 mt-2"
                >
                  Nom complet
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-3 text-[#6B7280]"
                    size={16}
                  />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ex : Adama Diallo"
                    className="pl-9 w-full h-12 rounded-xl border-2 border-[#2AE8A8] text-[#001B4B] text-sm placeholder-[#6B7280] focus:ring-2 focus:ring-[#2AE8A8] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-[#001B4B] mb-2 mt-2"
                >
                  Adresse e-mail
                </label>
                <div className="relative">
                  <AtSign
                    className="absolute left-3 top-3 text-[#6B7280]"
                    size={16}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="exemple@email.com"
                    className="pl-9 w-full h-12 rounded-xl border-2 border-[#2AE8A8] text-[#001B4B] text-sm placeholder-[#6B7280] focus:ring-2 focus:ring-[#2AE8A8] focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-[#001B4B] mb-2 mt-2"
                >
                  Numéro de téléphone
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3 text-[#6B7280]"
                    size={16}
                  />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+224 620 000 000"
                    className="pl-9 w-full h-12 rounded-xl border-2 border-[#2AE8A8] text-[#001B4B] text-sm placeholder-[#6B7280] focus:ring-2 focus:ring-[#2AE8A8] focus:outline-none"
                  />
                </div>
              </div>

              {/* Dropdown Sujet */}
              <div>
                <label className="block text-lg font-semibold text-[#001B4B] mb-2 mt-2">
                  Sélectionner le sujet
                </label>
                <Dropdown
                  name="subject"
                  placeholder="Sélectionner un sujet"
                  required
                  options={[
                    "Collaboration",
                    "Projet web",
                    "UI/UX Design",
                    "Conseil technique",
                    "Discussion",
                    "Autre",
                  ]}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-[#001B4B] mb-4 mt-6"
              >
                Écrivez-moi votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tapez votre message ici..."
                className="w-full rounded-xl border-2 border-[#2AE8A8] p-4 text-[#001B4B] text-sm placeholder-[#6B7280] focus:ring-2 focus:ring-[#2AE8A8] focus:outline-none"
                required
              />
            </div>

            {/* Bouton */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#001B4B] text-white text-sm font-medium shadow-md transition hover:bg-[#2AE8A8]"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
