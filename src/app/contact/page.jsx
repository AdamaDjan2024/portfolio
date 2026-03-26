import { generateMetadata } from "@/utils/seo";
import ContactSection from "@/sections/Contact";

export const metadata = generateMetadata(
  "Contact",
  "Contactez-moi pour discuter de vos projets",
  "/contact"
);

export default function ContactPage() {
  return <ContactSection />;
}
