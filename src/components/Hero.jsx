import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center pt-24 pb-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/hero_bg.png")' }}
      >
        {/* Optional overlay to make text more readable if needed, though image seems somewhat dark/blurry in original */}
        <div className="absolute inset-0 bg-white/40 sm:bg-transparent bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-amber-700 font-semibold tracking-wider text-xs uppercase mb-4">
            Foundation of Protection
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Worry-Free Living for Every Surface
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-xl leading-relaxed">
            Protect your home's most essential investment. Our industry-leading assurance
            programs guarantee longevity, stain resistance, and structural integrity for your
            premium flooring.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              File a Claim <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border-2 border-gray-400 text-gray-800 px-6 py-3.5 rounded font-medium hover:bg-white/80 transition-all">
              Explore Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
