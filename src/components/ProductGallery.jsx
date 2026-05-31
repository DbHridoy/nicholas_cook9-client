import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'hardwood',
    name: 'Premium Hardwood',
    type: 'Natural Wood',
    color: 'from-amber-900/80 to-amber-700/60',
    image: '/assets/hardwood.png',
    description: 'Timeless oak and maple selections with industry-leading scratch and water-resistant finishes.',
    features: ['Real wood grain', 'Refinishable', 'Lifetime structural warranty'],
  },
  {
    id: 'laminate',
    name: 'Modern Laminate',
    type: 'High-Durability',
    color: 'from-slate-900/80 to-slate-600/60',
    image: '/assets/laminate.jpg',
    description: 'Ultra-realistic wood textures with superior impact resistance for high-traffic active households.',
    features: ['Scratch resistant', 'Easy click-lock install', 'Budget-friendly'],
  },
  {
    id: 'vinyl',
    name: 'Luxury Vinyl Plank',
    type: 'Waterproof (LVP)',
    color: 'from-teal-900/80 to-teal-600/60',
    image: '/assets/vinyl.jpg',
    description: '100% waterproof flooring that combines the beauty of wood with the durability of vinyl.',
    features: ['100% Waterproof', 'Pet friendly', 'Sound dampening'],
  },
  {
    id: 'tile',
    name: 'Designer Tile',
    type: 'Ceramic & Porcelain',
    color: 'from-stone-900/80 to-stone-600/60',
    image: '/assets/tile.jpg',
    description: 'Exquisite ceramic and porcelain tiles perfect for kitchens, bathrooms, and high-moisture areas.',
    features: ['Stain proof', 'Heat resistant', 'Endless design options'],
  },
  {
    id: 'carpet',
    name: 'Plush Carpet',
    type: 'Soft Fiber',
    color: 'from-rose-900/80 to-rose-700/60',
    image: '/assets/carpet.jpg',
    description: 'Premium stain-protected fibers that offer unparalleled comfort and warmth for bedrooms and lounges.',
    features: ['Stain protection', 'Allergen reduction', 'Sound insulation'],
  },
];

export default function ProductGallery() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-700 font-semibold tracking-wider text-xs uppercase mb-4">
            Premium Collections
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Protected Surfaces
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Every flooring type we cover is backed by our comprehensive AxisOne Assurance,
            ensuring your home stays beautiful for decades.
          </p>
        </div>

        {/*
          First row: 3 cards
          Second row: 2 cards centered
        */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Row 2 — centered pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[calc(66.666%+0.75rem)] mx-auto">
            {products.slice(3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
            {product.type}
          </span>
        </div>
        {/* Hover CTA icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-grow">{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.features.map((f, i) => (
            <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-100">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
