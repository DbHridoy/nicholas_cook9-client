import { ShieldCheck, Clock, CheckCircle2, Award, Leaf } from 'lucide-react';

export default function Assurance() {
  return (
    <section id="assurance" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Assurance</h2>
          <p className="text-gray-600 text-lg">
            We don't just cover surfaces; we provide peace of mind through a
            comprehensive ecosystem of care and protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1: Extensive Lifetime Coverage (Spans 2 columns) */}
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-8 flex flex-col sm:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>


              <h3 className="text-xl font-bold text-gray-900 mb-3">Protection Designed for Real Life</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Coverage designed to help protect against everyday issues that can happen after installation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" /> Stain & spill protection
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" /> Structural and installation-related concerns
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" /> Pet-related incidents and common household wear
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-2/5 md:w-1/2 flex-shrink-0">
              <img
                src="/assets/cream-room-carpet.png"
                alt="Premium dark carpet texture"
                className="w-full h-full object-cover rounded-lg shadow-inner"
              />
            </div>
          </div>

          {/* Card 2: Fast Claim Processing */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Claim Processing</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">
              Our digital-first approach ensures that most claims are reviewed within 24 hours,
              getting your home back to normal faster.
            </p>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-gray-500">Average Review Time</span>
                <span className="text-amber-700">15 Hours</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          {/* Card 3: Certified Quality */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3">Certified Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Every material protected by FloorGuard Assurance undergoes rigorous third-party testing
                for indoor air quality and sustainability.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300">
                <Leaf className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 4: Expert Maintenance Support (Spans 2 columns) */}
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-8 flex flex-col sm:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow items-center">
            <div className="w-full sm:w-2/5 md:w-1/3 flex-shrink-0">
              <img
                src="/assets/hallway_cleaner.png"
                alt="Expert cleaner in hallway"
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Maintenance Support</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-md">
                Beyond coverage, we provide access to a network of certified cleaning and repair specialists
                to help you maintain your warranty status and keep your floors looking new.
              </p>
              {/* <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors">
                View Care Guides <ExternalLink className="w-3.5 h-3.5" />
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
