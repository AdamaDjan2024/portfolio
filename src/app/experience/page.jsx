import { generateMetadata } from "@/utils/seo";
import ExperienceSection from "@/sections/Experience";

export const metadata = generateMetadata(
  "Expérience",
  "Parcourez mes principales étapes académiques et professionnelles.",
  "/experience"
);

export default function ExperiencePage() {
  return <ExperienceSection />;
}
