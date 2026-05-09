import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home',      label: 'Home' },
  { href: '#assurance', label: 'Warranties' },
  { href: '#products',  label: 'Products' },
  { href: '#services',  label: 'Services' },
  { href: '#claim',     label: 'Process' },
  { href: '#support',   label: 'Support' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center flex-shrink-0">
          <img
            src="/assets/ledger-logo.svg"
            alt="Ledger Group"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-gray-900 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#claim"
            className="hidden md:inline-block bg-gray-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            File a Claim
          </a>
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm font-medium text-gray-700 hover:text-amber-700 border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#claim"
            onClick={() => setMobileOpen(false)}
            className="mt-3 w-full text-center bg-gray-900 text-white px-5 py-3 rounded text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            File a Claim
          </a>
        </div>
      )}
    </header>
  );
}
