import { Play, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80')`,
        }}
      >
        <div className="gradient-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-semibold text-lg mb-4 block animate-fade-in">
            PET SHOP
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-in-left">
            FAÇA SEUS ANIMAIS DE ESTIMAÇÃO FELIZES
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Cuidamos dos seus pets com amor e dedicação. Oferecemos os melhores serviços e produtos para garantir a saúde e felicidade do seu melhor amigo.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#services" className="btn-primary">
              <Calendar size={20} />
              Agendar Agora
            </a>
            <a href="#about" className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors font-medium group">
              <span className="w-12 h-12 rounded-full border-2 border-primary-foreground flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <Play size={20} className="ml-1" />
              </span>
              Assistir Vídeo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
