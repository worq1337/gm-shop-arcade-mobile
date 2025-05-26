
import { Heart, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-gold-900/20 py-12">
      <div className="container mx-auto px-4">
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
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gold-300/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-gold-300/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@gmshop.com</span>
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
                <a href="#" className="text-gold-200/70 hover:text-gold-300 transition-colors text-sm">
                  Telegram: @gmshop_support
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
