"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";
import SpotlightBackground from "@/components/SpotlightBackground";
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
        className={`w-full h-12 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 text-slate-100 text-sm pl-3 pr-4 ${
          required && !selected ? "ring-1 ring-red-500" : ""
        }`}
      >
        <span className="truncate">{selected || placeholder}</span>
        <ChevronDown className="text-slate-400 ml-2" size={24} />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 w-full rounded-xl border border-white/10 bg-[#0b1224] shadow-[0_18px_50px_-30px_rgba(2,12,27,0.9)] text-slate-100"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={selected === option}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 rounded-md hover:bg-white/[0.06]"
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
export default function ContactSection() {
  const title = "Contactez-moi";

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100"
      >
        Aller au contenu
      </a>

      <section id="contact" className="page-shell py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start text-slate-100">
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
              className="font-extrabold mb-6 text-slate-50"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: "1.1",
              }}
            >
              {title}
            </motion.h1>

            <p className="max-w-xl text-base text-slate-200/70 mb-8 leading-relaxed">
              Discutons de vos projets web, de vos idées créatives ou de
              potentielles collaborations. Je conçois des interfaces modernes et
              réalise des applications performantes adaptées à vos besoins.
            </p>

            {/* ✅ Card contact avec lignes alignées */}
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-100 shadow-[0_18px_50px_-30px_rgba(2,12,27,0.8)] space-y-5">
              {/* Bloc Email */}
              <div className="flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex-shrink-0 p-2 rounded-md border border-white/10 bg-slate-900/50">
                  <Mail className="text-slate-100" size={20} />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm text-slate-300/70 flex-shrink-0">
                    Email :
                  </span>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-base font-medium hover:text-slate-50 truncate block"
                  >
                    {siteData.email}
                  </a>
                </div>
              </div>

              {/* Bloc Téléphone */}
              <div className="flex items-center gap-3 whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex-shrink-0 p-2 rounded-md border border-white/10 bg-slate-900/50">
                  <Phone className="text-slate-100" size={20} />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm text-slate-300/70 flex-shrink-0">
                    Téléphone :
                  </span>
                  <a
                    href={`tel:+${siteData.phoneRaw}`}
                    className="text-base font-medium hover:text-slate-50 truncate block"
                  >
                    {siteData.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div className="mt-6 flex items-center gap-3 text-slate-200/70">
              <MapPin size={18} />
              <span className="text-sm">{siteData.location}</span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-200/70 mb-4">
              Retrouvez-moi
            </h3>
            <div className="flex gap-4">
              <a
                href={siteData.github}
                className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.06] hover:text-slate-50 transition"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                href={siteData.linkedin}
                className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.06] hover:text-slate-50 transition"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteData.twitter}
                className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.06] hover:text-slate-50 transition"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===== DROITE : Formulaire ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_50px_-30px_rgba(2,12,27,0.8)]"
        >
          <h2 className="text-lg font-semibold mb-4 text-slate-50">
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
                  className="block text-sm font-semibold text-slate-200/70 mb-2 mt-2"
                >
                  Nom complet
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-3 text-slate-400"
                    size={16}
                  />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ex : Adama Diallo"
                    className="pl-9 w-full h-12 rounded-xl border border-white/10 bg-slate-900/40 text-slate-100 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-200/50 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-200/70 mb-2 mt-2"
                >
                  Adresse e-mail
                </label>
                <div className="relative">
                  <AtSign
                    className="absolute left-3 top-3 text-slate-400"
                    size={16}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="exemple@email.com"
                    className="pl-9 w-full h-12 rounded-xl border border-white/10 bg-slate-900/40 text-slate-100 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-200/50 focus:outline-none"
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
                  className="block text-sm font-semibold text-slate-200/70 mb-2 mt-2"
                >
                  Numéro de téléphone
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3 text-slate-400"
                    size={16}
                  />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+224 620 000 000"
                    className="pl-9 w-full h-12 rounded-xl border border-white/10 bg-slate-900/40 text-slate-100 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-200/50 focus:outline-none"
                  />
                </div>
              </div>

              {/* Dropdown Sujet */}
              <div>
                <label className="block text-sm font-semibold text-slate-200/70 mb-2 mt-2">
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
                className="block text-sm font-semibold text-slate-200/70 mb-3 mt-6"
              >
                Écrivez-moi votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tapez votre message ici..."
                className="w-full rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-100 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-200/50 focus:outline-none"
                required
              />
            </div>

            {/* Bouton */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-white/10 hover:bg-white/10"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </motion.div>
        </div>
      </section>
    </main>
  );
}
