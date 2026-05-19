import DownloadCvButton from "@/components/DownloadCvButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 md:py-32">
      <div className="relative page-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-base text-[#002B45] sm:text-lg">
            {"Bonjour, je suis Adama Dian Amadou Diallo".split("").map((char, i) => (
              <span
                key={i}
                className="inline-block opacity-0 animate-typing"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#001B4B] sm:text-4xl md:text-5xl">
            Développeuse <span className="text-[#2AE8A8]">front-end junior</span> orientée UI
          </h1>

          <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg md:text-lg">
            J&apos;intègre des interfaces React/Next.js précises, responsive et cohérentes,
            avec une attention forte à l&apos;expérience utilisateur.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <DownloadCvButton />
            <a
              href="#projects"
              className="inline-flex min-h-[3.75rem] items-center justify-center rounded-[1rem] bg-[#2AE8A8] px-7 py-4 text-sm font-semibold leading-none text-[#002B45] transition hover:bg-[#24C896] sm:px-8 sm:text-base"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
