import Navbar from "./components/Navbar";
import ProductSection from './components/Product/ProductSection'
import SimilarItems from './components/SimilarItems'
import Reviews from './components/Reviews'
import DiscoverMore from './components/DiscoverMore'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <ProductSection />
      <SimilarItems />
      <Reviews />
      <DiscoverMore />
      <Footer />
    </main>
  );
}



