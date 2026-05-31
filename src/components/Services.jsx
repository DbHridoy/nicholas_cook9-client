import { Droplets, Wrench, Shield } from 'lucide-react';

const services = [
  {
    title: 'Professional Cleaning',
    description:
      'Maintain the vibrant look of your floors with our deep steam cleaning and fiber restoration services, designed to remove deep-seated allergens and dirt.',
    icon: Droplets,
    accent: 'from-sky-500 to-blue-600',
    light: 'bg-sky-50',
    iconColor: 'text-sky-600',
    badge: 'Most Popular',
  },
  {
    title: 'Emergency Repair',
    description:
      'Accidents happen. Our expert technicians provide seamless patching, seam repair, and restoration services to restore your flooring\'s original beauty.',
    icon: Wrench,
    accent: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
    iconColor: 'text-amber-700',
    badge: '24h Response',
  },
  {
    title: 'Protection Treatment',
    description:
      'Extend the life of your investment with our advanced soil and stain repellency application, creating an invisible barrier against future spills.',
    icon: Shield,
    accent: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    badge: 'Recommended',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-700 font-semibold tracking-wider text-xs uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Specialized care for every stage of your flooring's lifecycle, delivered by certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.accent}`} />

                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${service.light} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.description}</p>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a href="#claim" className={`inline-flex items-center gap-2 text-sm font-semibold ${service.iconColor} hover:gap-3 transition-all`}>
                      Get Started →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
