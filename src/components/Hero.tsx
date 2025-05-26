
import { Star, Shield, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-charcoal to-gaming-dark"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjE1LCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gaming-charcoal/50 border border-gold-900/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-gold-500" />
            <span className="text-gold-300 text-sm font-medium">Премиальный магазин игровых товаров</span>
          </div>
          
          <div className="relative mb-6 animate-slide-up">
            {/* Анимированный задний фон для SHOP */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-32 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rounded-3xl blur-xl animate-glow"></div>
              <div className="absolute w-3/4 h-24 bg-gradient-to-r from-gold-400/10 via-gold-500/30 to-gold-400/10 rounded-2xl animate-pulse"></div>
              <div className="absolute w-1/2 h-16 bg-gradient-to-r from-transparent via-gold-600/40 to-transparent rounded-xl blur-md animate-float"></div>
            </div>
            
            {/* Основной текст */}
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-bold">
              <span className="gold-gradient glow-text">SHOP</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gold-200/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Начать покупки популярные игры. Покупайте игровую валюту, предметы и улучшения 
            для ваших любимых мобильных игр. Безопасно, быстро и надежно.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-gaming-dark font-bold px-8 py-3 rounded-lg hover-lift">
              Начать покупки
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gold-500/50 text-gold-300 hover:bg-gold-500/10 px-8 py-3 rounded-lg hover-lift flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Поддержка 24/7</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="gaming-card p-6 rounded-xl hover-lift animate-fade-in">
              <Shield className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="font-bold text-gold-300 mb-2">Безопасность</h3>
              <p className="text-gold-200/70 text-sm">Гарантия безопасности всех транзакций</p>
            </div>
            
            <div className="gaming-card p-6 rounded-xl hover-lift animate-fade-in">
              <Zap className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="font-bold text-gold-300 mb-2">Быстрая доставка</h3>
              <p className="text-gold-200/70 text-sm">Получите товары в течение минут</p>
            </div>
            
            <div className="gaming-card p-6 rounded-xl hover-lift animate-fade-in">
              <Star className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="font-bold text-gold-300 mb-2">Качество</h3>
              <p className="text-gold-200/70 text-sm">Только оригинальные игровые товары</p>
            </div>
          </div>
        </div>
      </div>

      {/* Чат поддержки - кружочек в правом нижнем углу */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-gaming-dark shadow-lg hover-lift animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
