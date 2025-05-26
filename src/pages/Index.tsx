
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PopularCategories from '@/components/PopularCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <Hero />
      <PopularCategories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
