"use client";
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

export default function ContactContent() {
  const siteData = {
    email: "adamadiandiallo9999@gmail.com",
    phone: "224629319556",
    location: "Guinée-Conakry",
    github: "https://github.com/tonCompteGithub",
    linkedin: "https://linkedin.com/in/tonProfilLinkedIn",
    twitter: "https://twitter.com/tonProfilTwitter",
  };

  return (
    <section
      className="relative py-16 px-6 lg:px-12"
      style={{
        background: "#001B4B",
      }}
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-white">
        {/* ====== GAUCHE : bloc Contact + carte ====== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 flex items-center gap-3">
              <span className="inline-block bg-[#02457A] text-white px-4 py-2 rounded-sm">
                Contactez
              </span>
              <span className="text-[#97CADB]">-moi</span>
            </h1>

            <p className="text-[#D6E8EE] max-w-xl text-lg mb-8 leading-relaxed">
              Discutons de vos projets web, de vos idées créatives ou de
              potentielles collaborations. Je conçois des interfaces modernes et
              réalise des applications performantes adaptées à vos besoins.
            </p>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-[#018ABE] p-6 text-gray-900">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-blue-100 rounded-md border border-blue-200">
                  <Mail className="text-[#018ABE]" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-base font-medium hover:underline break-all"
                  >
                    {siteData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-md border border-green-200">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Téléphone</div>
                  <a
                    href={`tel:+${siteData.phone}`}
                    className="text-base font-medium hover:underline"
                  >
                    +{siteData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-[#D6E8EE]">
              <MapPin size={18} />
              <span className="text-sm">{siteData.location}</span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-[#D6E8EE] mb-3">
              Retrouvez-moi
            </h3>
            <div className="flex gap-4">
              <a
                href={siteData.github}
                className="p-2 bg-[#02457A] rounded-full hover:bg-[#018ABE] transition"
              >
                <Github size={18} />
              </a>
              <a
                href={siteData.linkedin}
                className="p-2 bg-[#02457A] rounded-full hover:bg-[#018ABE] transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteData.twitter}
                className="p-2 bg-[#02457A] rounded-full hover:bg-[#018ABE] transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ====== DROITE : Formulaire ====== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[28px] shadow-lg p-8 border-2 border-[#018ABE]"
        >
          <h2 className="text-xl font-semibold mb-5 text-[#001B4B]">
            Envoyez un message
          </h2>

          <form
            action={`mailto:${siteData.email}?subject=Message%20via%20Contact&body=Nom%20:%20`}
            method="GET"
            className="space-y-5"
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
          >
            {/* Nom et Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h1 className="text-lg font-bold mb-1 text-[#001B4B]">Nom</h1>
                <label className="block text-sm font-semibold mb-1">
                  Nom complet
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex : Adama Diallo"
                    className="pl-9 w-full h-12 rounded-xl border-2 border-[#018ABE] text-sm focus:ring-2 focus:ring-[#018ABE] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <h1 className="text-lg font-bold mb-1 text-[#001B4B]">Email</h1>
                <label className="block text-sm font-semibold mb-1">
                  Adresse e-mail
                </label>
                <div className="relative">
                  <AtSign
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="exemple@email.com"
                    className="pl-9 w-full h-12 rounded-xl border-2 border-[#018ABE] text-sm focus:ring-2 focus:ring-[#018ABE] focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Téléphone et Sujet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h1 className="text-lg font-bold mb-1 text-[#001B4B]">
                  Téléphone
                </h1>
                <label className="block text-sm font-semibold mb-1">
                  Numéro de téléphone
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="+224 620 000 000"
                    className="pl-9 w-full h-12 rounded-xl border-2 border-[#018ABE] text-sm focus:ring-2 focus:ring-[#018ABE] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-lg font-bold mb-1 text-[#001B4B]">Sujet</h1>
                <label className="block text-sm font-semibold mb-1">
                  Sélectionner le sujet
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    className="appearance-none pl-4 pr-10 h-12 w-full rounded-xl border-2 border-[#018ABE] bg-white text-sm text-gray-900 focus:ring-2 focus:ring-[#018ABE] focus:outline-none"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Projet web">Projet web</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Conseil technique">Conseil technique</option>
                    <option value="Discussion">Discussion</option>
                    <option value="Autre">Autre</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <h1 className="text-lg font-bold mb-1 text-[#001B4B]">Message</h1>
              <label className="block text-sm font-semibold mb-1">
                Écrivez-moi votre message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tapez votre message ici..."
                className="w-full rounded-xl border-2 border-[#018ABE] p-4 text-sm focus:ring-2 focus:ring-[#018ABE] focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Bouton */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#018ABE] text-white text-sm font-medium shadow-md hover:bg-[#02457A] transition"
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
