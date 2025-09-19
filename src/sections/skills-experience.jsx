export default function About() {
  const softwareSkills = [
    { name: 'HTML', percent: 98 },
    { name: 'CSS', percent: 95 },
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 92 },
    { name: 'Next.js', percent: 88 },
    { name: 'Tailwind CSS', percent: 90 },
    { name: 'Figma', percent: 82 },
  ];

  const languages = [
    { name: 'Français', percent: 95 },
    { name: 'Anglais (débutant)', percent: 30 },
  ];

  const experiences = [
    {
      role: 'Développeuse Front-End',
      org: 'Mansa Digitale',
      period: '2025 – en cours',
      desc: "Développement du site vitrine de l'agence avec Next.js et Tailwind CSS.",
      bullets: [
        "Développement d’applications web modernes",
        'Intégration d’interfaces en React et Tailwind CSS',
        'Collaboration avec l’équipe design',
      ],
    },
    {
      role: 'Développeuse Front-End',
      org: 'Billet Facile',
      period: '2025 – en cours',
      desc: "Refonte du site et ajout de fonctionnalités de réservation.",
      bullets: [
        'Composants réutilisables + gestion API',
        'Tests et optimisation des performances',
      ],
    },
    {
      role: 'AfriBooks (Projet Personnel)',
      period: '2024 – en cours',
      bullets: [
        'Développement d’une bibliothèque en ligne',
        'Système d’authentification avec rôles',
        'Déploiement sur Vercel',
      ],
    },
    {
      role: 'Guinée Data (Projet Collaboratif)',
      period: '2023',
      bullets: [
        'Contribution à la conception',
        'Participation à l’élaboration de la stratégie',
      ],
    },
  ];

  const primaryRing = 'ring-1 ring-white/10';

  const renderBar = (percent) => (
    <div className={`relative h-1.5 bg-gray-700/60 ${primaryRing} rounded-full`}>
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );

  // return (
  //   <section id="skills" className="py-20 bg-gray-900 text-gray-100">
  //     <div className="max-w-7xl mx-auto px-6 lg:px-8">
  //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

  //         {/* LEFT: Software Skills + Languages */}
  //         <div>
  //           <h2 className="text-lg font-bold tracking-wide text-primary-300 mb-6">Compétences Techniques</h2>
  //           <div className="space-y-5">
  //             {softwareSkills.map((s) => (
  //               <div key={s.name}>
  //                 <div className="flex justify-between text-sm text-gray-300 mb-1">
  //                   <span>{s.name}</span>
  //                   <span>{s.percent}%</span>
  //                 </div>
  //                 {renderBar(s.percent)}
  //               </div>
  //             ))}
  //           </div>

  //           <h3 className="mt-10 text-lg font-bold tracking-wide text-primary-300 mb-4">Langues</h3>
  //           <div className="space-y-4">
  //             {languages.map((l) => (
  //               <div key={l.name}>
  //                 <div className="flex justify-between text-sm text-gray-300 mb-1">
  //                   <span>{l.name}</span>
  //                   <span>{l.percent}%</span>
  //                 </div>
  //                 {renderBar(l.percent)}
  //               </div>
  //             ))}
  //           </div>
  //         </div>

  //         {/* CENTER: Expériences */}
  //         <div>
  //           <h2 className="text-lg font-bold tracking-wide text-primary-300 mb-6">Expériences</h2>
  //           <div className="space-y-6">
  //             {experiences.map((e, idx) => (
  //               <details key={idx} className="group bg-gray-800/50 rounded-xl p-4 border border-white/10">
  //                 <summary className="flex justify-between cursor-pointer font-semibold text-gray-100">
  //                   <span>{e.role}{e.org && ` – ${e.org}`}</span>
  //                   <span className="text-xs text-gray-400">{e.period}</span>
  //                 </summary>
  //                 <div className="mt-2 text-sm text-gray-300">
  //                   {e.desc && <p className="mb-2">{e.desc}</p>}
  //                   <ul className="list-disc pl-5 space-y-1">
  //                     {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
  //                   </ul>
  //                 </div>
  //               </details>
  //             ))}
  //           </div>
  //         </div>

  //         {/* RIGHT: Education */}
  //         <div>
  //           <h2 className="text-lg font-bold tracking-wide text-primary-300 mb-6">Éducation & Formations</h2>
  //           <div className="space-y-4">
  //             <details open className="group bg-gray-800/50 rounded-xl p-4 border border-white/10">
  //               <summary className="cursor-pointer font-semibold text-gray-100">
  //                 Licence en Génie Informatique – Analyse et Développement (2020)
  //               </summary>
  //               <p className="mt-2 text-sm text-gray-400">Diplôme attestant d’une base solide en informatique.</p>
  //             </details>

  //             <details className="group bg-gray-800/40 rounded-xl p-4 border border-white/10">
  //               <summary className="cursor-pointer font-semibold text-gray-100">
  //                 Formation Développement Web Front-End – Nimba Hub (2023 – 2024)
  //               </summary>
  //               <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
  //                 <li>HTML, CSS, JavaScript</li>
  //                 <li>Introduction à React</li>
  //               </ul>
  //             </details>

  //             <details className="group bg-gray-800/40 rounded-xl p-4 border border-white/10">
  //               <summary className="cursor-pointer font-semibold text-gray-100">
  //                 Orange Digital Center – Programme Digital (2023)
  //               </summary>
  //               <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
  //                 <li>Design Thinking, Canva & Figma</li>
  //                 <li>Personal Branding</li>
  //               </ul>
  //             </details>

  //             <details className="group bg-gray-800/40 rounded-xl p-4 border border-white/10">
  //               <summary className="cursor-pointer font-semibold text-gray-100">
  //                 Formations en ligne (2023 – 2024)
  //               </summary>
  //               <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
  //                 <li>React JS – Développement Web</li>
  //                 <li>Web et Mobile Design – UI/UX Figma</li>
  //                 <li>Apprendre l’anglais de A à Z</li>
  //               </ul>
  //             </details>
  //           </div>
  //         </div>

  //       </div>
  //     </div>
  //   </section>
  // );
}
