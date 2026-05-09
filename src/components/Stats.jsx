const stats = [
  { value: '1M+',  label: 'Homes Protected',       sub: 'Across North America' },
  { value: '98%',  label: 'Claims Approval Rate',   sub: 'Industry-leading standard' },
  { value: '15yr', label: 'Avg. Warranty Length',   sub: 'Backed by our guarantee' },
  { value: '24h',  label: 'Avg. Response Time',     sub: 'Fast, digital-first process' },
];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-950">
      {/* Decorative gradient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Eyebrow */}
        <p className="text-center text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
          Trusted by homeowners nationwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center py-12 px-6 text-center bg-gray-950 hover:bg-gray-900 transition-colors duration-300"
            >
              <span className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-gray-200 mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-gray-500">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
