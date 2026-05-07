export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="font-semibold text-xl tracking-tight text-gray-900">
        CarpetCare Pro
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-gray-900 transition-colors">Warranties</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Services</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Process</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
      </nav>
      <div>
        <button className="bg-gray-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
          File a Claim
        </button>
      </div>
    </header>
  )
}
