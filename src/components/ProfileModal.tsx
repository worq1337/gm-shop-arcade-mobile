
import { useState } from 'react';
import { User, Mail, MessageCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации/регистрации
    console.log('Form submitted:', formData);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', confirmPassword: '', phone: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gaming-dark border-gold-900/20">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-gold-300 text-center">
            <User className="h-5 w-5" />
            <span>{isLogin ? 'Вход в аккаунт' : 'Регистрация'}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Социальные кнопки */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Войти через Telegram
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gold-900/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gaming-dark px-2 text-gold-400">или</span>
            </div>
          </div>

          {/* Форма входа/регистрации */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gold-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-400 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-10 bg-gaming-charcoal/50 border-gold-900/30 text-gold-100 placeholder-gold-400/60 focus:border-gold-500 focus:ring-gold-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gold-300">Пароль</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pr-10 bg-gaming-charcoal/50 border-gold-900/30 text-gold-100 placeholder-gold-400/60 focus:border-gold-500 focus:ring-gold-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-400 hover:text-gold-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gold-300">Подтвердите пароль</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Повторите пароль"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="bg-gaming-charcoal/50 border-gold-900/30 text-gold-100 placeholder-gold-400/60 focus:border-gold-500 focus:ring-gold-500"
                  required
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gold-500 hover:bg-gold-600 text-gaming-dark font-medium"
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>

          {isLogin && (
            <div className="text-center">
              <button className="text-sm text-gold-400 hover:text-gold-300 transition-colors">
                Забыли пароль?
              </button>
            </div>
          )}

          <div className="text-center pt-4">
            <p className="text-sm text-gold-400">
              {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
              <button 
                onClick={toggleAuthMode}
                className="ml-1 text-gold-300 hover:text-gold-200 font-medium transition-colors"
              >
                {isLogin ? 'Зарегистрироваться' : 'Войти'}
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
