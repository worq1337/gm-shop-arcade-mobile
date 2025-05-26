
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gaming-dark/95 backdrop-blur-sm border-b border-gold-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-gold-500"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center animate-float">
                  <span className="text-gaming-dark font-bold text-lg">G</span>
                </div>
                <h1 className="text-2xl font-bold gold-gradient">GM Shop</h1>
              </div>
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Поиск игр и товаров..."
                  className="w-full pl-10 pr-4 py-2 bg-gaming-charcoal/50 border border-gold-900/30 rounded-lg text-gold-100 placeholder-gold-400/60 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-gold-400 hover:text-gold-300 hover:bg-gold-900/20">
                <Search className="h-5 w-5 md:hidden" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold-400 hover:text-gold-300 hover:bg-gold-900/20">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-gold-400 hover:text-gold-300 hover:bg-gold-900/20">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gold-500 text-gaming-dark text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse-gold">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 z-50 h-full w-64 bg-gaming-dark border-r border-gold-900/20 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-gaming-dark font-bold text-lg">G</span>
              </div>
              <h2 className="text-xl font-bold gold-gradient">GM Shop</h2>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gold-500"
              onClick={toggleMobileMenu}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="space-y-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gold-200 hover:text-gold-100 hover:bg-gold-900/20 py-3 px-4 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Каталог
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gold-200 hover:text-gold-100 hover:bg-gold-900/20 py-3 px-4 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Акции
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gold-200 hover:text-gold-100 hover:bg-gold-900/20 py-3 px-4 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Помощь
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
