import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Zap } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    title: 'Mobile Legends - 5000 Diamonds',
    game: 'Mobile Legends',
    price: 2999,
    originalPrice: 3499,
    discount: 15,
    rating: 4.9,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    isHot: true,
    delivery: 'Мгновенно'
  },
  {
    id: 2,
    title: 'PUBG Mobile - 8100 UC',
    game: 'PUBG Mobile',
    price: 4999,
    originalPrice: 5999,
    discount: 17,
    rating: 4.8,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    isHot: false,
    delivery: '5-10 мин'
  },
  {
    id: 3,
    title: 'Free Fire - 2200 Diamonds',
    game: 'Free Fire',
    price: 1999,
    originalPrice: 2299,
    discount: 13,
    rating: 4.7,
    reviews: 756,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop',
    isHot: true,
    delivery: 'Мгновенно'
  },
  {
    id: 4,
    title: 'Clash of Clans - Пакет Героя',
    game: 'Clash of Clans',
    price: 1499,
    originalPrice: 1799,
    discount: 17,
    rating: 4.9,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop',
    isHot: false,
    delivery: '1-3 мин'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="relative py-16 bg-gaming-charcoal overflow-hidden">
      {/* Анимированные фигуры на фоне */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Круги */}
        <div className="absolute top-16 left-20 w-22 h-22 rounded-full bg-gradient-to-br from-gold-500/18 to-gold-600/9 animate-float"></div>
        <div className="absolute top-40 right-16 w-16 h-16 rounded-full bg-gradient-to-br from-gold-400/14 to-gold-500/7 animate-pulse-gold"></div>
        <div className="absolute bottom-24 left-1/4 w-30 h-30 rounded-full bg-gradient-to-br from-gold-600/12 to-gold-700/6 animate-glow"></div>
        
        {/* Треугольники */}
        <div className="absolute top-48 right-24 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-gold-500/16 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-36 right-1/3 w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-b-[23px] border-b-gold-400/13 animate-pulse-gold" style={{animationDelay: '2.7s'}}></div>
        
        {/* Квадраты и ромбы */}
        <div className="absolute top-28 left-1/3 w-11 h-11 bg-gradient-to-br from-gold-500/14 to-gold-600/7 rotate-45 animate-float" style={{animationDelay: '1.1s'}}></div>
        <div className="absolute bottom-44 left-14 w-8 h-8 bg-gradient-to-br from-gold-400/17 to-gold-500/9 rotate-12 animate-glow" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-10 h-10 bg-gradient-to-br from-gold-600/14 to-gold-700/7 rotate-45 animate-pulse-gold" style={{animationDelay: '3.5s'}}></div>
        
        {/* Линии */}
        <div className="absolute top-1/3 left-28 w-19 h-0.5 bg-gradient-to-r from-transparent via-gold-500/28 to-transparent animate-glow" style={{animationDelay: '3.1s'}}></div>
        <div className="absolute bottom-1/3 right-24 w-15 h-0.5 bg-gradient-to-r from-transparent via-gold-400/22 to-transparent animate-pulse-gold" style={{animationDelay: '2.4s'}}></div>
        
        {/* Звезды */}
        <div className="absolute top-20 right-2/3">
          <Star className="w-6 h-6 text-gold-500/16 animate-pulse-gold" style={{animationDelay: '4.5s'}} />
        </div>
        <div className="absolute bottom-20 left-1/2">
          <Star className="w-4 h-4 text-gold-400/13 animate-float" style={{animationDelay: '4.1s'}} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient">Рекомендуемые товары</span>
          </h2>
          <p className="text-gold-200/70 text-lg max-w-2xl mx-auto">
            Лучшие предложения с максимальной скидкой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="gaming-card hover-lift cursor-pointer group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isHot && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-white px-2 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      HOT
                    </Badge>
                  )}
                  <Badge className="bg-gold-500 text-gaming-dark font-bold px-2 py-1">
                    -{product.discount}%
                  </Badge>
                </div>

                <div className="absolute top-3 right-3">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.delivery}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5">
                <div className="mb-2">
                  <Badge variant="outline" className="text-gold-400 border-gold-400/30 text-xs">
                    {product.game}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-gold-100 mb-2 group-hover:text-gold-300 transition-colors line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                    <span className="text-gold-300 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gold-400/60 text-sm">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gold-500">
                      ₽{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gold-400/60 line-through text-sm">
                        ₽{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-gaming-dark font-bold group-hover:scale-105 transition-transform duration-200"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Купить
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-gold-500/50 text-gold-300 hover:bg-gold-500/10 px-8 py-4 text-lg hover-lift"
          >
            Показать все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
