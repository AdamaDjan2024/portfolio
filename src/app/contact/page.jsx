import { generateMetadata } from "@/utils/seo";
import Card from "@/components/Card";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";

export const metadata = generateMetadata(
  "Contact",
  "Contactez-moi pour discuter de vos projets"
);

export default function ContactPage() {
  const siteData = {
    email: "adamadiangialo9999aerobase.com",
    phone: "629319556",
    location: "Guinée-Conakry",
    github: "https://github.com/tonCompteGithub",
    linkedin: "https://linkedin.com/in/tonProfilLinkedIn",
    twitter: "https://twitter.com/tonProfilTwitter",
    facebook: "https://facebook.com/tonProfilFacebook",
    instagram: "https://instagram.com/tonProfilInstagram",
    whatsapp: "229629319556", // ton numéro WhatsApp
  };

  return (
    <div className="py-20" style={{ backgroundColor: "#D6E8EE" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* TITRE */}
        <h1
          className="text-5xl lg:text-6xl font-extrabold text-primary-900 text-center mb-10 tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Contact
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg lg:text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          N'hésitez pas à me contacter pour discuter de projets, collaborations
          ou opportunités académiques. Je suis toujours ouvert aux échanges et
          aux nouvelles idées !
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* PARTIE GAUCHE : INFOS & RESEAUX */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2
                className="text-3xl font-bold text-primary-900 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Infos de contact
              </h2>

              <div className="space-y-4 text-gray-700 text-lg">
                {/* Email */}
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-center space-x-3 text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <Mail size={24} />
                  <span>Envoyer un email</span>
                </a>

                {/* Téléphone */}
                <a
                  href={`tel:+${siteData.phone}`}
                  className="flex items-center space-x-3 text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <Phone size={24} />
                  <span>Appeler</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>

                {/* Localisation */}
                <div className="flex items-center space-x-3 text-primary-700">
                  <MapPin size={24} />
                  <span>{siteData.location}</span>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <h3 className="text-xl font-semibold mt-8 mb-4">
                Réseaux sociaux
              </h3>
              <div className="flex space-x-4">
                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={28}
                    className="hover:text-primary-900 transition-colors"
                  />
                </a>
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    size={28}
                    className="hover:text-primary-900 transition-colors"
                  />
                </a>
                <a
                  href={siteData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    size={28}
                    className="hover:text-primary-900 transition-colors"
                  />
                </a>
                <a
                  href={siteData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={28}
                    className="hover:text-primary-900 transition-colors"
                  />
                </a>
                <a
                  href={siteData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={28}
                    className="hover:text-primary-900 transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* PARTIE DROITE : FORMULAIRE */}
          <Card className="bg-white p-10 rounded-xl shadow-lg">
            <h2
              className="text-3xl font-bold text-primary-900 mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Envoyez-moi un message
            </h2>

            <form className="space-y-6 text-gray-700">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                  placeholder="Votre email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                  placeholder="Votre téléphone"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-lg"
              >
                Envoyer le message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
