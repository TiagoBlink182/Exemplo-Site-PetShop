import { Scissors, Heart, Home, Stethoscope, Dog, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "HOSPEDAGEM PARA ANIMAIS DE ESTIMAÇÃO",
    description: "Ambiente seguro e confortável para seu pet enquanto você viaja.",
  },
  {
    icon: Heart,
    title: "ALIMENTAÇÃO DE ANIMAIS DE ESTIMAÇÃO",
    description: "Rações premium e alimentação balanceada para todas as raças.",
  },
  {
    icon: Home,
    title: "ADOÇÃO E PASSEIO DE ANIMAIS DE ESTIMAÇÃO",
    description: "Passeios diários e programa de adoção responsável.",
  },
  {
    icon: Stethoscope,
    title: "ASSISTENTE DE SERVIÇOS DE ANIMAIS DE ESTIMAÇÃO",
    description: "Acompanhamento veterinário completo para seu pet.",
  },
  {
    icon: Dog,
    title: "ADESTRAMENTO E QUALIFICAÇÃO DE ANIMAIS",
    description: "Treinamento profissional para comportamento e obediência.",
  },
  {
    icon: ShoppingBag,
    title: "TREINAMENTO DE SEGURANÇA DE ANIMAIS DE ESTIMAÇÃO",
    description: "Técnicas de segurança e cuidados especializados.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-8 bg-secondary">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="section-title">
            O QUE OFERECEMOS PARA SEU PET
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
