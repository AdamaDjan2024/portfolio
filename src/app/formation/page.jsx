import { generateMetadata } from '@/utils/seo'
import educationData from '@/data/education.json'
import SpotlightBackground from '@/components/SpotlightBackground'

export const metadata = generateMetadata(
  'Formation',
  'Mon parcours académique et les formations qui structurent mon profil.',
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
            Études · Cours
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
            Formation
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200/70">
            Mon parcours académique et les cours qui structurent mes bases.
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
                        Cours pertinents
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
        </section>
      </div>
    </main>
  )
}
