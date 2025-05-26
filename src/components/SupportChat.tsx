
import { useState } from 'react';
import { Send, X, MessageCircle, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface SupportChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportChat = ({ isOpen, onClose }: SupportChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Здравствуйте! Я помощник GM Shop. Как могу помочь вам сегодня?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Автоответ от поддержки
    setTimeout(() => {
      const autoReply: Message = {
        id: messages.length + 2,
        text: "Спасибо за ваше сообщение! Наш специалист ответит вам в ближайшее время. Для срочных вопросов обращайтесь в Telegram: @gmshopsupport",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gaming-dark border-gold-900/20">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-gold-300">
            <MessageCircle className="h-5 w-5" />
            <span>Техническая поддержка</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-96">
          {/* Область сообщений */}
          <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gaming-charcoal/30 rounded-lg mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-gold-500 text-gaming-dark'
                      : 'bg-gaming-charcoal text-gold-100'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <Bot className="h-4 w-4 mt-0.5 text-gold-400" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-gaming-dark/70' : 'text-gold-400/70'
                      }`}>
                        {message.timestamp.toLocaleTimeString('ru-RU', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    {message.isUser && (
                      <User className="h-4 w-4 mt-0.5 text-gaming-dark/70" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Поле ввода */}
          <div className="flex space-x-2">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Напишите ваш вопрос..."
              className="flex-1 resize-none h-10 px-3 py-2 bg-gaming-charcoal/50 border border-gold-900/30 rounded-lg text-gold-100 placeholder-gold-400/60 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              rows={1}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-gold-500 hover:bg-gold-600 text-gaming-dark"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportChat;
