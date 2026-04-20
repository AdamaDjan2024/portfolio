import siteData from "@/data/site.json";

export default function DownloadCvButton({ className = "" }) {
  return (
    <a
      href={siteData.cv}
      download
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold leading-none text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] ${className}`}
    >
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5 sm:h-[1.05rem] sm:w-[1.05rem]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Télécharger CV
    </a>
  );
}
