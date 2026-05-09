import { Info, FileText, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Enter Policy Info',
    description: 'Find your policy number on your purchase receipt or warranty card.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Describe the Issue',
    description: 'Tell us what happened. Photos can be uploaded in the next step.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Get Reviewed',
    description: 'An agent will reach out within 24 business hours to finalize your claim.',
  },
];

export default function ClaimProcess() {
  return (
    <section id="claim" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column */}
          <div className="flex-1 lg:pr-8">
            <p className="text-amber-700 font-semibold tracking-wider text-xs uppercase mb-4">
              Simple & Stress-Free
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Start Your<br />
              <span className="text-amber-700">Claim Process</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-md">
              We've simplified our claim submission. No login required—just provide
              your policy details and a brief description of the issue.
            </p>

            <div className="space-y-0">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex gap-5 pb-10 last:pb-0">
                    {/* Connector line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-100" />
                    )}
                    {/* Step circle */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center z-10">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="pt-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-600 mb-1 block">Step {step.number}</span>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-[500px] flex-shrink-0">
            <div className="bg-gray-950 rounded-2xl p-8 shadow-2xl shadow-gray-900/30">
              <h3 className="text-xl font-bold text-white mb-1">File a Claim</h3>
              <p className="text-gray-400 text-sm mb-8">All fields are required unless noted.</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Flooring Type</label>
                  <select className="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all">
                    <option value="">Select your flooring type…</option>
                    <option>Hardwood</option>
                    <option>Laminate</option>
                    <option>Vinyl Plank (LVP)</option>
                    <option>Tile</option>
                    <option>Carpet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Policy Number</label>
                  <input
                    type="text"
                    placeholder="FG-XXXXX-XXXX"
                    className="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">Description of Issue</label>
                  <textarea
                    rows="4"
                    placeholder="Please describe the stain, damage, or defect…"
                    className="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div className="flex gap-2.5 bg-gray-800/60 rounded-lg p-3.5 border border-gray-700/50">
                  <Info className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    By submitting, you confirm that the information provided is accurate to the best of your knowledge.
                  </p>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-lg transition-colors duration-300 mt-1 shadow-lg shadow-amber-900/30 group">
                  Submit Claim Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
