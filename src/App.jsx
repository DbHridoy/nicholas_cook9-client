import Header from './components/Header';
import Hero from './components/Hero';
import Assurance from './components/Assurance';
import Services from './components/Services';
import ProductGallery from './components/ProductGallery';
import ClaimProcess from './components/ClaimProcess';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Assurance />
        <ProductGallery />
        <Services />
        <ClaimProcess />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}

export default App
