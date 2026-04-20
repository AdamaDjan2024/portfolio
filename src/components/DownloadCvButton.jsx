import siteData from "@/data/site.json";

export default function DownloadCvButton({ className = "" }) {
  return (
    <a
      href={siteData.cv}
      download
      className={`inline-flex min-h-[3.75rem] items-center justify-center gap-2.5 rounded-[1rem] px-7 py-4 text-sm font-semibold leading-none transition sm:px-8 sm:text-base bg-[#001B4B] text-white hover:bg-[#002B70] ${className}`}
    >
      <svg
        className="h-4 w-4 shrink-0 sm:h-[1.1rem] sm:w-[1.1rem]"
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
