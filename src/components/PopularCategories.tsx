
import { Card } from '@/components/ui/card';
import { Crown, Coins, Diamond, Sword, Shield, Star } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Mobile Legends',
    icon: Crown,
    description: 'Diamonds & Skins',
    color: 'from-purple-500 to-purple-700',
    items: '1,234 товара'
  },
  {
    id: 2,
    name: 'PUBG Mobile',
    icon: Sword,
    description: 'UC & Items',
    color: 'from-orange-500 to-red-600',
    items: '987 товаров'
  },
  {
    id: 3,
    name: 'Free Fire',
    icon: Diamond,
    description: 'Diamonds & Bundles',
    color: 'from-blue-500 to-cyan-600',
    items: '756 товаров'
  },
  {
    id: 4,
    name: 'Clash of Clans',
    icon: Shield,
    description: 'Gems & Gold',
    color: 'from-green-500 to-emerald-600',
    items: '543 товара'
  },
  {
    id: 5,
    name: 'Brawl Stars',
    icon: Star,
    description: 'Gems & Brawlers',
    color: 'from-yellow-500 to-orange-500',
    items: '432 товара'
  },
  {
    id: 6,
    name: 'Fortnite',
    icon: Coins,
    description: 'V-Bucks & Skins',
    color: 'from-purple-600 to-pink-600',
    items: '678 товаров'
  }
];

const PopularCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gaming-dark to-gaming-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient">Популярные игры</span>
          </h2>
          <p className="text-gold-200/70 text-lg max-w-2xl mx-auto">
            Выберите свою любимую игру и найдите нужные товары
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="gaming-card hover-lift cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gold-100 group-hover:text-gold-300 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gold-400/70 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gold-300/60 text-sm">
                      {category.items}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-gold"></div>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
