import { Droplets, Wrench, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Professional Cleaning",
      description: "Maintain the vibrant look of your floors with our deep steam cleaning and fiber restoration services, designed to remove deep-seated allergens and dirt.",
      icon: <Droplets className="w-5 h-5 text-amber-800" />,
    },
    {
      title: "Emergency Repair",
      description: "Accidents happen. Our expert technicians provide seamless patching, seam repair, and re-stretching services to restore your carpet's original beauty.",
      icon: <Wrench className="w-5 h-5 text-amber-800" />,
    },
    {
      title: "Protection Treatment",
      description: "Extend the life of your investment with our advanced soil and stain repellency application, creating an invisible barrier against future spills.",
      icon: <Shield className="w-5 h-5 text-amber-800" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Specialized care for every stage of your flooring's lifecycle, delivered by certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
