
import { Button } from '@/components/ui/button';
import { Gamepad2, Zap, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-charcoal to-gaming-dark"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold-500/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gold-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gold-600/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-gold-500/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="h-16 w-16 text-gold-500 animate-glow" />
              <div className="absolute inset-0 animate-pulse-gold">
                <Crown className="h-16 w-16 text-gold-400/50" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gold-gradient glow-text">GM Shop</span>
            <br />
            <span className="text-gold-100 text-3xl md:text-4xl font-normal">
              Магазин игровых товаров
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gold-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Премиальные игровые товары для мобильных игр. Золото, кристаллы, аккаунты и многое другое.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-gaming-dark font-bold px-8 py-4 text-lg shadow-2xl hover-lift animate-glow"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Начать покупки
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold-500/50 text-gold-300 hover:bg-gold-500/10 px-8 py-4 text-lg hover-lift"
            >
              <Zap className="mr-2 h-5 w-5" />
              Популярные игры
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gold-300/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-gold"></div>
              <span>Мгновенная доставка</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-gold"></div>
              <span>Безопасные платежи</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-gold"></div>
              <span>24/7 поддержка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
