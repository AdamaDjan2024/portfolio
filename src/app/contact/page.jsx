import { generateMetadata } from "@/utils/seo";
import ContactContent from "./ContactContent";

export const metadata = generateMetadata(
  "Contact",
  "Contactez-moi pour discuter de vos projets"
);

export default function ContactPage() {
  return <ContactContent />;
}
