import { Play, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[380px] md:min-h-[480px] lg:min-h-[520px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80')`,
        }}
      >
        <div className="gradient-overlay" />
      </div>

      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-semibold text-xs md:text-sm mb-2 md:mb-3 block animate-fade-in">
            PET SHOP
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-2 md:mb-4 animate-slide-in-left">
            FAÇA SEUS ANIMAIS DE ESTIMAÇÃO FELIZES
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-3 md:mb-4 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Cuidamos dos seus pets com amor e dedicação. Oferecemos os melhores serviços e produtos para garantir a saúde e felicidade do seu melhor amigo.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#services" className="btn-primary">
              <Calendar size={18} />
              <span className="text-sm md:text-base">Agendar Agora</span>
            </a>
            <a href="#about" className="hidden sm:flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors font-medium group">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary-foreground flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <Play size={16} className="ml-1" />
              </span>
              <span className="text-sm md:text-base">Assistir Vídeo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
