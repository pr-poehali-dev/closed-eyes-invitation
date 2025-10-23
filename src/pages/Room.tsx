import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Room = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4E] via-[#6B4C9A] to-[#2D1B4E] relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Icon 
              name="Sparkles" 
              size={10 + Math.random() * 12} 
              className="text-accent opacity-70"
            />
          </div>
        ))}
      </div>

      {showContent && (
        <Card className="relative z-10 max-w-3xl w-full bg-card/80 backdrop-blur-lg border-primary/30 shadow-2xl animate-fade-in">
          <div className="p-8 md:p-12 lg:p-16 text-center space-y-10">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-glow">
                <Icon name="Gift" size={48} className="text-accent" />
              </div>
            </div>

            <h1 
              className="text-5xl md:text-6xl lg:text-7xl text-accent mb-8 animate-fade-in"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                animationDelay: '0.2s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              Сюрприз для тебя! 🎁
            </h1>

            <div 
              className="space-y-6 text-xl md:text-2xl text-foreground/90 animate-fade-in"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                animationDelay: '0.4s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <p className="leading-relaxed">
                Ты прошёл через дверь с закрытыми глазами...
              </p>
              
              <p className="text-accent font-medium text-3xl md:text-4xl leading-relaxed my-8">
                И теперь здесь твой особенный момент ✨
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Спасибо, что довериться мне и пришёл
              </p>
            </div>

            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-fade-in"
              style={{ 
                animationDelay: '0.6s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Icon name="Heart" size={32} className="text-accent mx-auto mb-4 animate-pulse" />
                <p className="text-accent font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  С любовью
                </p>
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Icon name="Star" size={32} className="text-accent mx-auto mb-4 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <p className="text-accent font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Для тебя
                </p>
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Icon name="Sparkles" size={32} className="text-accent mx-auto mb-4 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <p className="text-accent font-medium" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Особенное
                </p>
              </div>
            </div>

            <div 
              className="flex justify-center gap-4 pt-10 animate-fade-in"
              style={{ 
                animationDelay: '0.8s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <Icon name="Heart" size={28} className="text-accent animate-pulse" />
              <Icon name="Heart" size={28} className="text-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Icon name="Heart" size={28} className="text-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Room;
