import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Profissionais qualificados e experientes",
    "Produtos de alta qualidade",
    "Atendimento personalizado",
    "Ambiente seguro e confortável",
  ];

  return (
    <section id="about" className="py-10 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                alt="Cães felizes"
                className="w-full h-[250px] md:h-[320px] lg:h-[400px] object-cover"
              />
            </div>
            {/* Floating Card (moved below image to avoid overlapping) */}
            <div className="mt-4 bg-card p-4 rounded-lg shadow-xl max-w-xs hidden md:block">
              <h4 className="font-bold text-foreground text-lg mb-2">
                NÓS MANTEMOS SEUS ANIMAIS DE ESTIMAÇÃO FELIZES O TEMPO TODO.
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Nossa equipe trabalha com dedicação para oferecer o melhor cuidado.
              </p>
              <a href="#services" className="text-primary font-semibold text-sm hover:underline">
                Saiba mais →
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sobre Nós
            </span>
            <h2 className="section-title mb-6">
              NOSSOS EXCELENTES SERVIÇOS DE CUIDADOS COM ANIMAIS DE ESTIMAÇÃO
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Desde 2010, oferecemos serviços de primeira qualidade para cuidar dos seus animais de estimação. 
              Nossa missão é garantir que seu pet receba todo o amor, cuidado e atenção que merece.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary-foreground" />
                  </span>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
