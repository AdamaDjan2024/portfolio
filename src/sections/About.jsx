export default function About() {
  const softwareSkills = [
    { name: 'HTML', percent: 98 },
    { name: 'CSS', percent: 95 },
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 92 },
    { name: 'Next.js', percent: 88 },
    { name: 'Tailwind CSS', percent: 90 },
    { name: 'Node.js', percent: 88 },
    { name: 'Docker', percent: 80 },
    { name: 'Git', percent: 85 },
    { name: 'GitHub', percent: 84 },
    { name: 'Figma', percent: 82 },
  ]

  const languages = [
    { name: 'Français', percent: 95 },
    { name: 'Anglais (débutant)', percent: 30 },
  ]

  const experiences = [
    {
      role: 'Développeuse Front-End',
      org: 'Mansa Digitale',
      period: '2025 – en cours',
      desc: "Ce projet est le site vitrine de l'agence Mansa Digital, développé avec Next.js (App Router), Tailwind CSS, et une configuration Docker-first pour le développement et la production.",
      bullets: [
        "Participation au développement d’applications web modernes",
        'Intégration d’interfaces en React et Tailwind CSS',
        'Collaboration avec l’équipe design pour améliorer l’expérience utilisateur',
      ],
    },
    {
      role: 'Développeuse Front-End',
      org: 'Billet Facile',
      period: '2025 – en cours',
      desc: "Ce projet est le site vitrine de l'agence Billefacile, développé avec Next.js (App Router), Tailwind CSS, et une configuration Docker-first pour le développement et la production.",
      bullets: [
        'Contribution à la refonte du site et des fonctionnalités de réservation d’événements',
        'Intégration de composants réutilisables et gestion des données avec API',
        'Tests et débogage pour optimiser les performances',
      ],
    },
    {
      role: 'AfriBooks (Projet Personnel)',
      org: '',
      period: '2024 – en cours',
      bullets: [
        'Développement d’une bibliothèque en ligne avec React et JSON Server',
        'Mise en place d’un système d’authentification avec rôles (admin, bibliothécaire, membre)',
        'Déploiement et hébergement sur Vercel',
      ],
    },
    {
      role: 'Guinée Data (Projet Collaboratif)',
      org: '',
      period: '2023',
      bullets: [
        'Contribution à la conception de la plateforme',
        'Participation à l’élaboration de l’idée et de la stratégie',
      ],
    },
  ]

  const primaryRing = 'ring-1 ring-white/10'

  const renderBar = (percent) => (
    <div className={`relative h-2 bg-gray-700/80 ${primaryRing} rounded-full`}> 
      <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-400" style={{ width: `${percent}%` }} />
      <div className="absolute -top-1 h-4 w-4 rounded-full bg-gray-900 border-2 border-white/70" style={{ left: `calc(${percent}% - 8px)` }} />
    </div>
  )

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Software Skills + Languages */}
          <div>
            <h2 className="text-sm tracking-[0.2em] font-extrabold text-gray-100 mb-6">SOFTWARE SKILLS</h2>
            <div className="space-y-6">
              {softwareSkills.map((s) => (
                <div key={s.name} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-gray-800/80 flex items-center justify-center border border-white/10">
                      <span className="text-[10px] text-gray-200">•</span>
                    </div>
                    <div className="text-sm font-medium text-gray-200">{s.name}</div>
                  </div>
                  {renderBar(s.percent)}
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-sm tracking-[0.2em] font-extrabold text-gray-100 mb-4">LANGUAGES</h3>
            <div className="space-y-6">
              {languages.map((l) => (
                <div key={l.name} className="space-y-2">
                  <div className="text-sm font-medium text-gray-200">{l.name}</div>
                  {renderBar(l.percent)}
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Expériences timeline */}
          <div>
            <h2 className="text-sm tracking-[0.2em] font-extrabold text-gray-100 mb-6">EXPÉRIENCES</h2>
            <div className="relative pl-20">
              <div className="absolute left-10 top-0 bottom-0 w-px bg-gray-700" />
              <div className="space-y-8">
                {experiences.map((e, idx) => (
                  <div key={idx} className="relative min-h-[3rem] pt-0.5">
                    <div className="absolute left-10 -translate-x-1/2 transform top-1 h-9 w-9 rounded-full bg-primary-600/40 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                      {idx + 1}
                    </div>
                    <div className="ml-16">
                      <details className={`group rounded-lg ${idx === 0 ? 'open' : ''}`}>
                        <summary className="cursor-pointer list-none flex items-baseline gap-2 text-gray-200 font-semibold leading-snug">
                          <span>{e.role}{e.org ? ' – ' : ''}{e.org}</span>
                          <span className="text-primary-300 text-xs font-normal">{e.period}</span>
                          <span className="ml-auto text-xs text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-300">
                          {e.desc && (
                            <p className="mb-2">{e.desc}</p>
                          )}
                          <ul className="list-disc pl-4 space-y-1 leading-relaxed">
                            {e.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Education */}
          <div>
            <h2 className="text-sm tracking-[0.2em] font-extrabold text-gray-100 mb-6">ÉDUCATION & FORMATIONS</h2>
            <div className={`rounded-2xl bg-gray-800/60 ${primaryRing} p-6 space-y-4`}>
              {/* Diplôme mis en avant (accordéon ouvert par défaut) */}
              <details className="group open rounded-xl bg-gray-900/60 border border-white/10">
                <summary className="list-none cursor-pointer px-4 py-3 flex items-center gap-2">
                  <span className="text-gray-100 font-semibold">Licence en Génie Informatique – Analyse et Développement</span>
                  <span className="text-sm text-gray-300">(2020)</span>
                  <span className="ml-auto shrink-0 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 border border-emerald-400/30">Diplôme ✓</span>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-400">Diplôme officiel attestant d’une base solide en informatique.</p>
                </div>
              </details>

              {/* Nimba Hub */}
              <details className="group rounded-xl bg-gray-900/40 border border-white/10">
                <summary className="list-none cursor-pointer px-4 py-3 flex items-center gap-2">
                  <span className="text-gray-100 font-semibold">Formation Développement Web Front-End – Nimba Hub</span>
                  <span className="text-sm text-gray-300">(2023 – 2024)</span>
                  <span className="ml-auto text-xs text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-4 text-sm text-gray-300 space-y-1">
                    <li>HTML, CSS, JavaScript</li>
                    <li>Introduction à React et bonnes pratiques de développement</li>
                  </ul>
                </div>
              </details>

              {/* Orange Digital Center */}
              <details className="group rounded-xl bg-gray-900/40 border border-white/10">
                <summary className="list-none cursor-pointer px-4 py-3 flex items-center gap-2">
                  <span className="text-gray-100 font-semibold">Orange Digital Center – Programme Digital</span>
                  <span className="text-sm text-gray-300">(2023)</span>
                  <span className="ml-auto text-xs text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-4 text-sm text-gray-300 space-y-1">
                    <li>Design Thinking, Canva & Figma</li>
                    <li>Personal Branding</li>
                  </ul>
                </div>
              </details>

              {/* Formations en ligne */}
              <details className="group rounded-xl bg-gray-900/40 border border-white/10">
                <summary className="list-none cursor-pointer px-4 py-3 flex items-center gap-2">
                  <span className="text-gray-100 font-semibold">Formations en ligne</span>
                  <span className="text-sm text-gray-300">(2023 – 2024)</span>
                  <span className="ml-auto text-xs text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-4 text-sm text-gray-300 space-y-1">
                    <li>React JS – Développement Web</li>
                    <li>Web et Mobile Design – UI/UX Figma</li>
                    <li>Apprendre l’anglais de A à Z</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
