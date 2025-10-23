import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D1B4E] via-[#6B4C9A] to-[#2D1B4E] relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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
              size={12 + Math.random() * 8} 
              className="text-accent opacity-60"
            />
          </div>
        ))}
      </div>

      <Card className="relative z-10 max-w-2xl w-full bg-card/80 backdrop-blur-lg border-primary/30 shadow-2xl animate-fade-in">
        <div className="p-8 md:p-12 text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-glow">
              <Icon name="KeyRound" size={40} className="text-accent" />
            </div>
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-accent mb-6 animate-fade-in"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              animationDelay: '0.2s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            Приглашаю тебя в комнату
          </h1>

          <div 
            className="space-y-4 text-lg md:text-xl text-foreground/90 animate-fade-in"
            style={{ 
              fontFamily: "'Raleway', sans-serif",
              animationDelay: '0.4s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <p className="leading-relaxed">
              Но есть условие...
            </p>
            
            <p className="text-accent font-medium leading-relaxed">
              Заходи с закрытыми глазами
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Если будешь подсматривать, то ничего не получится
            </p>
          </div>

          <div 
            className="pt-4 animate-fade-in"
            style={{ 
              animationDelay: '0.6s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <p className="text-2xl md:text-3xl text-accent" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Заходи спиной 😊
            </p>
          </div>

          <div 
            className="flex justify-center gap-3 pt-6 animate-fade-in"
            style={{ 
              animationDelay: '0.8s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <Icon name="Heart" size={24} className="text-accent animate-pulse" />
            <Icon name="Star" size={24} className="text-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Icon name="Heart" size={24} className="text-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
