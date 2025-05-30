import { Star, Shield, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-charcoal to-gaming-dark"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjE1LCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
      
      {/* Анимированные фигуры на фоне */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Круги */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/10 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-gold-400/15 to-gold-500/5 animate-pulse-gold"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-gold-600/10 to-gold-700/5 animate-glow"></div>
        
        {/* Треугольники */}
        <div className="absolute top-60 right-10 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-gold-500/20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-gold-400/15 animate-pulse-gold" style={{animationDelay: '2s'}}></div>
        
        {/* Квадраты и ромбы */}
        <div className="absolute top-32 left-1/3 w-12 h-12 bg-gradient-to-br from-gold-500/15 to-gold-600/5 rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-16 w-8 h-8 bg-gradient-to-br from-gold-400/20 to-gold-500/10 rotate-12 animate-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-gradient-to-br from-gold-600/15 to-gold-700/5 rotate-45 animate-pulse-gold" style={{animationDelay: '3s'}}></div>
        
        {/* Линии */}
        <div className="absolute top-1/3 left-20 w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent animate-glow" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/3 right-16 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400/25 to-transparent animate-pulse-gold" style={{animationDelay: '1.8s'}}></div>
        
        {/* Звезды */}
        <div className="absolute top-24 right-1/3">
          <Star className="w-6 h-6 text-gold-500/20 animate-pulse-gold" style={{animationDelay: '4s'}} />
        </div>
        <div className="absolute bottom-24 left-1/2">
          <Star className="w-4 h-4 text-gold-400/15 animate-float" style={{animationDelay: '3.5s'}} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gaming-charcoal/50 border border-gold-900/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-gold-500" />
            <span className="text-gold-300 text-sm font-medium">Премиальный магазин игровых товаров</span>
          </div>
          
          <div className="relative mb-6">
            {/* Основной текст без анимации */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
              <span className="gold-gradient glow-text">GM SHOP</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gold-200/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Начать покупки в популярных играх. Покупайте игровую валюту, буст и улучшения 
            для ваших любимых мобильных играх. Безопасно, быстро и надежно.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-gaming-dark font-bold px-8 py-3 rounded-lg hover-lift">
              Каталог
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-gaming-dark font-bold px-8 py-3 rounded-lg hover-lift"
            >
              Акции
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
