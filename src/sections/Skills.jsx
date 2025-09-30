export default function Skills() {
  const items = [
    { name: "HTML", percent: 98, color: "#D84E41" },
    { name: "CSS", percent: 95, color: "#018ABE" },
    { name: "JavaScript", percent: 90, color: "#97CADB" },
    { name: "Node.js", percent: 80, color: "#02457A" },
    { name: "React", percent: 92, color: "#D6E8EE" },
  ];

  const Circle = ({ percent, color }) => {
    const angle = Math.min(360, Math.max(0, percent * 3.6));
    const style = {
      backgroundImage: `conic-gradient(${color} ${angle}deg, rgba(0,0,0,0.4) 0deg)`,
    };
    return (
      <div className="relative w-28 h-28 rounded-full p-1 shadow-lg shadow-black/30" style={style}>
        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
          <span className="text-base font-semibold text-primary-300">{percent}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12">
          {items.map((it) => (
            <div key={it.name} className="flex flex-col items-center text-center">
              <Circle percent={it.percent} color={it.color} />
              <h3 className="mt-4 font-semibold text-white">{it.name}</h3>
              <p className="mt-2 text-sm text-gray-300 max-w-[26ch]">
                Compétence maîtrisée et utilisée sur des projets récents.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
