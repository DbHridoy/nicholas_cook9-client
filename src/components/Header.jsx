export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="font-semibold text-xl tracking-tight text-gray-900">
        CarpetCare Pro
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
        <a href="#assurance" className="hover:text-gray-900 transition-colors">Warranties</a>
        <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
        <a href="#claim" className="hover:text-gray-900 transition-colors">Process</a>
        <a href="#support" className="hover:text-gray-900 transition-colors">Support</a>
      </nav>
      <div>
        <a href="#claim" className="inline-block bg-gray-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
          File a Claim
        </a>
      </div>
    </header>
  )
}
