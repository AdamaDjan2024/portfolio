"use client";

import { useState } from "react";
import certifications from "@/data/certifications.json";
import SpotlightBackground from "@/components/SpotlightBackground";

export default function CertificationsPage() {
  const [selectedCertif, setSelectedCertif] = useState(null);
  const modalTitleId = selectedCertif ? `certif-modal-title` : undefined;

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />

      <a
        href="#certifs"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100"
      >
        Aller au contenu
      </a>

      <div className="page-shell py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
            Cours · Attestations · Certificats
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
            Certifications
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200/70">
            Mes preuves d’apprentissage (design, produit, web). Même approche que
            sur mes projets : clarté, rigueur et progression continue.
          </p>
        </header>

        <section id="certifs" className="mt-10 sm:mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article key={`${cert.issuer}-${cert.date}-${cert.url}`} className="group relative">
                <button
                  type="button"
                  onClick={() => setSelectedCertif(cert)}
                  className="relative block w-full rounded-xl p-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/50"
                  aria-label={`Ouvrir la certification ${cert.description}`}
                >
                  <div
                    aria-hidden="true"
                    className={[
                      "pointer-events-none absolute -inset-x-4 -inset-y-4 hidden rounded-xl opacity-0 transition",
                      "lg:block",
                      "lg:group-hover:opacity-100 lg:group-focus-within:opacity-100",
                      "bg-slate-800/40",
                      "ring-1 ring-inset ring-white/10",
                      "shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]",
                    ].join(" ")}
                  />

                  <div className="relative">
                    <header className="flex items-baseline justify-between gap-4">
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                        {cert.date}
                      </span>
                      <span className="text-xs font-semibold text-cyan-200/80">
                        {cert.issuer}
                      </span>
                    </header>

                    <h2 className="mt-3 text-base font-semibold text-slate-100">
                      {cert.description}
                    </h2>
                    <p className="mt-2 text-sm text-slate-200/70">
                      {cert.name}
                    </p>

                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-slate-200/80 transition-colors group-hover:text-slate-100">
                      Voir la pièce <span aria-hidden="true" className="ml-2">→</span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedCertif && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#041120]/[0.68] p-4 backdrop-blur-[2px] sm:p-6"
          onClick={() => setSelectedCertif(null)}
        >
          <div className="flex min-h-full items-start justify-center sm:items-center">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalTitleId}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/[0.12] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.12),transparent_28%),linear-gradient(145deg,#0b1224_0%,#081127_55%,#050a18_100%)] p-6 shadow-[0_40px_120px_-34px_rgba(0,7,22,0.92)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute -left-16 top-10 h-36 w-36 rounded-full bg-cyan-300/[0.10] blur-3xl" />
              <div className="pointer-events-none absolute -right-12 bottom-12 h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl" />

              <button
                onClick={() => setSelectedCertif(null)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08] text-2xl font-bold text-white/70 transition-colors duration-300 hover:bg-white/[0.18] hover:text-white"
                aria-label="Fermer la modale"
                type="button"
              >
                &times;
              </button>

              <header className="mb-6 border-b border-white/10 pb-5 pr-10">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                  {selectedCertif.issuer} · {selectedCertif.date}
                </p>
                <h2
                  id={modalTitleId}
                  className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white"
                >
                  {selectedCertif.description}
                </h2>
                <p className="mt-2 text-sm text-slate-200/75">
                  {selectedCertif.name}
                </p>
              </header>

              <div className="h-[75vh] overflow-hidden rounded-2xl border border-white/10 bg-black/10">
                <iframe
                  src={selectedCertif.url}
                  className="h-full w-full"
                  title={selectedCertif.description}
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={selectedCertif.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 font-semibold text-slate-100 ring-1 ring-inset ring-white/10 hover:bg-white/10"
                >
                  Ouvrir dans un nouvel onglet <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
