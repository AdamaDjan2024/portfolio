import { generateMetadata } from '@/utils/seo'
import educationData from '@/data/education.json'
import SpotlightBackground from '@/components/SpotlightBackground'

export const metadata = generateMetadata(
  'Learning Journey',
  'Parcours de formation en informatique, front-end et UI/UX.',
  '/formation'
)

export default function FormationPage() {
  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <a
        href="#formation"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100"
      >
        Aller au contenu
      </a>

      <div className="page-shell py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            Learning Journey
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
            Formation
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200/70">
            Mon socle académique et mes formations ciblées pour évoluer en front-end
            orienté UI, avec une progression continue entre design et développement.
          </p>
        </header>

        <section id="formation" className="mt-10 sm:mt-14">
          <ol className="space-y-3">
            {educationData.map((edu) => (
              <li key={edu.id} className="group relative rounded-xl p-5">
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute -inset-x-4 -inset-y-4 hidden rounded-xl opacity-0 transition",
                    "lg:block",
                    "lg:group-hover:opacity-100",
                    "bg-slate-800/40",
                    "ring-1 ring-inset ring-white/10",
                    "shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]",
                  ].join(' ')}
                />

                <div className="relative">
                  <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-slate-100">
                        {edu.degree}
                      </h2>
                      <p className="mt-1 text-sm text-slate-200/70">
                        {edu.school}
                      </p>
                    </div>
                    <div className="shrink-0 text-sm text-slate-200/60">
                      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                        {edu.period}
                      </p>
                      <p className="mt-1">{edu.location}</p>
                      <p className="mt-1 font-semibold text-slate-200/80">
                        {edu.grade}
                      </p>
                    </div>
                  </header>

                  <p className="mt-4 text-sm text-slate-200/70">
                    {edu.description}
                  </p>

                  {Array.isArray(edu.relevant_courses) && edu.relevant_courses.length ? (
                    <div className="mt-5">
                      <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-200/70">
                        Compétences renforcées
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200/70">
                        {edu.relevant_courses.map((course) => (
                          <li key={course} className="flex gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200/70"
                              aria-hidden="true"
                            />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <a
              className="inline-flex items-center font-medium leading-tight text-lightest group"
              aria-label="Voir toutes les certifications"
              href="/certifications"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
                  Voir toutes les certifications
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l4.158-3.92H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
