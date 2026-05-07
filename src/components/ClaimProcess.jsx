import { Info } from 'lucide-react';

export default function ClaimProcess() {
  return (
    <section id="claim" className="py-24 bg-indigo-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Instructions */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Start Your Claim<br />Process
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
              We've simplified our claim submission to be as stress-free as possible. 
              No login required—just provide your policy details and a brief description 
              of the issue.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-amber-700 shadow-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-[15px] mb-1">Enter Policy Info</h4>
                  <p className="text-sm text-gray-500">Find your policy number on your purchase receipt or warranty card.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-amber-700 shadow-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-[15px] mb-1">Describe the Issue</h4>
                  <p className="text-sm text-gray-500">Tell us what happened. Photos can be uploaded in the next step.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-amber-700 shadow-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-[15px] mb-1">Get Reviewed</h4>
                  <p className="text-sm text-gray-500">An agent will reach out within 24 business hours to finalize your claim.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-[500px] bg-white rounded-xl border border-gray-200 p-8 shadow-lg shadow-indigo-100/50">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Policy Number</label>
                <input 
                  type="text" 
                  placeholder="CC-XXXXX-XXXX" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Description of Issue</label>
                <textarea 
                  rows="4"
                  placeholder="Please describe the stain, damage, or defect..." 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow"
                ></textarea>
              </div>

              <div className="bg-gray-50 rounded-md p-3 flex gap-3 border border-gray-100">
                <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  By submitting this form, you acknowledge that the information provided 
                  is accurate to the best of your knowledge.
                </p>
              </div>

              <button className="w-full bg-gray-900 text-white font-medium py-3 rounded-md hover:bg-gray-800 transition-colors mt-2">
                Submit Claim Details
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
