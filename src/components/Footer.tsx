import { Heart, Mail, Phone, MessageCircle, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gaming-dark border-t border-gold-900/20 py-12 overflow-hidden">
      {/* Анимированные фигуры на фоне */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Круги */}
        <div className="absolute top-8 left-12 w-18 h-18 rounded-full bg-gradient-to-br from-gold-500/12 to-gold-600/6 animate-float"></div>
        <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/10 to-gold-500/5 animate-pulse-gold"></div>
        <div className="absolute bottom-16 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-gold-600/8 to-gold-700/4 animate-glow"></div>
        
        {/* Треугольники */}
        <div className="absolute top-32 right-32 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-gold-500/14 animate-float" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-24 right-1/4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[17px] border-b-gold-400/11 animate-pulse-gold" style={{animationDelay: '3.1s'}}></div>
        
        {/* Квадраты и ромбы */}
        <div className="absolute top-16 left-1/4 w-9 h-9 bg-gradient-to-br from-gold-500/11 to-gold-600/5 rotate-45 animate-float" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-br from-gold-400/14 to-gold-500/7 rotate-12 animate-glow" style={{animationDelay: '2.5s'}}></div>
        
        {/* Линии */}
        <div className="absolute top-1/4 left-32 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500/22 to-transparent animate-glow" style={{animationDelay: '3.4s'}}></div>
        <div className="absolute bottom-1/4 right-28 w-13 h-0.5 bg-gradient-to-r from-transparent via-gold-400/18 to-transparent animate-pulse-gold" style={{animationDelay: '2.8s'}}></div>
        
        {/* Звезды */}
        <div className="absolute top-12 right-1/2">
          <Star className="w-5 h-5 text-gold-500/13 animate-pulse-gold" style={{animationDelay: '4.8s'}} />
        </div>
        <div className="absolute bottom-12 left-2/3">
          <Star className="w-4 h-4 text-gold-400/10 animate-float" style={{animationDelay: '4.4s'}} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-gaming-dark font-bold text-lg">G</span>
              </div>
              <h3 className="text-2xl font-bold gold-gradient">GM Shop</h3>
            </div>
            <p className="text-gold-200/70 mb-6 max-w-md">
              Премиальный магазин игровых товаров для мобильных игр. Быстро, безопасно, надежно.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-gold-300/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+7 (918) 087-04-10</span>
              </div>
              <div className="flex items-center space-x-2 text-gold-300/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">help@gmshop.pw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold-300 mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {['Популярные игры', 'Новые поступления', 'Скидки', 'Помощь', 'О нас'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gold-300 mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-gold-400" />
                <span className="text-gold-200/70 text-sm">Онлайн чат 24/7</span>
              </li>
              <li>
                <a href="https://t.me/gmshopsupport" className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm">
                  Telegram: @gmshopsupport
                </a>
              </li>
              <li>
                <a href="#" className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-900/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gold-200/60 text-sm">
            © 2024 GM Shop. Все права защищены.
          </p>
          <p className="text-gold-200/60 text-sm flex items-center mt-2 md:mt-0">
            Сделано с <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse-gold" /> для геймеров
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
