// "use client";

// import { useState } from "react";

// export default function ProfileSections() {
//   const [selected, setSelected] = useState(null);

//   const experiences = [
//     {
//       title: "Projets Front-End",
//       items: [
//         { role: "Développeuse Front-End", org: "Mansa Digitale", period: "2025 – en cours", desc: "Développement du site vitrine de l'agence avec Next.js et Tailwind CSS.", bullets: ["Développement d’applications web modernes", "Intégration d’interfaces en React et Tailwind CSS", "Collaboration avec l’équipe design"] },
//         { role: "Développeuse Front-End", org: "Billet Facile", period: "2025 – en cours", desc: "Refonte du site et ajout de fonctionnalités de réservation.", bullets: ["Composants réutilisables + gestion API", "Tests et optimisation des performances"] },
//         { role: "Stagiaire Front-End", org: "Startup ABC", period: "2024", desc: "Création d'une landing page responsive.", bullets: ["HTML/CSS/JS", "Collaboration avec designer UX"] },
//         { role: "Projet perso", org: "", period: "2023", desc: "Portfolio en React avec animations CSS.", bullets: ["Animations interactives", "Responsive design"] },
//       ],
//     },
//   ];

//   const education = [
//     {
//       title: "Parcours académique",
//       items: [
//         { role: "Licence en Informatique", org: "Université XYZ", period: "2020 – 2023", desc: "Spécialisation en développement web et mobile.", bullets: ["Projets universitaires", "Stages en entreprise", "Participation à des hackathons"] },
//       ],
//     },
//   ];

//   const renderCards = (cards) =>
//     cards.map((card, idx) => (
//       <div key={idx} className="relative pl-8">
//         <span className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-gray-900" />
//         <div className="bg-gray-800/70 hover:bg-gray-700/80 transition rounded-xl border border-gray-700 p-4 shadow-lg">
//           <h3 className="font-semibold text-white">{card.title}</h3>
//           <div className="relative mt-4 h-32">
//             {card.items.map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelected(item)}
//                 className={`absolute cursor-pointer w-full p-2 rounded-md shadow-md bg-gray-700/80 transform transition-all duration-300 ease-out
//                   ${i % 2 === 0 ? "rotate-1 translate-x-1" : "-rotate-1 -translate-x-1"} 
//                   hover:scale-105 hover:z-20`}
//                 style={{
//                   top: `${i * 8}px`, // espacement vertical
//                   zIndex: i,          // empilement initial
//                 }}
//               >
//                 <p className="text-sm text-gray-300">{item.period} – {item.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     ));

//   return (
//     <section className="py-20 bg-gray-900 text-gray-100">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expériences</h2>
//         <div className="relative border-l border-gray-700 ml-4 space-y-8">{renderCards(experiences)}</div>

//         <h2 className="text-3xl md:text-4xl font-bold text-center my-12">Éducation</h2>
//         <div className="relative border-l border-gray-700 ml-4 space-y-8">{renderCards(education)}</div>
//       </div>

//       {/* Modal */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-800 rounded-2xl p-6 max-w-lg w-full relative shadow-xl transition-transform duration-300 ease-out transform scale-100">
//             <button
//               className="absolute top-4 right-4 text-gray-400 hover:text-white"
//               onClick={() => setSelected(null)}
//             >
//               X
//             </button>

//             <p className="text-sm font-semibold text-primary-400">{selected.period}</p>
//             <h3 className="mt-1 font-semibold text-white text-xl">
//               {selected.role}{selected.org ? ` – ${selected.org}` : ""}
//             </h3>

//             {selected.desc && <p className="mt-3 text-gray-200 text-sm">{selected.desc}</p>}

//             {Array.isArray(selected.bullets) && selected.bullets.length > 0 && (
//               <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-gray-100/90">
//                 {selected.bullets.map((b, i) => (
//                   <li key={i}>{b}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
