export default function Stats() {
  const stats = [
    { value: '1M+', label: 'Homes Protected' },
    { value: '98%', label: 'Claims Approval Rate' },
    { value: '15yr', label: 'Avg. Warranty Length' },
    { value: '24h', label: 'Avg. Response Time' },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-1">
              <span className="text-4xl md:text-5xl font-bold text-amber-700 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
