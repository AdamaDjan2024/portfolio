import { generateMetadata } from "@/utils/seo";
import AboutSection from "@/sections/About";

export const metadata = generateMetadata(
  "À propos",
  "Découvrez mon parcours, ma méthode de travail et mon approche du développement frontend.",
  "/about"
);

export default function AboutPage() {
  return <AboutSection />;
}
