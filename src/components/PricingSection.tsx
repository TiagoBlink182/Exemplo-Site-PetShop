import { Check } from "lucide-react";

const plans = [
  {
    name: "BÁSICO",
    price: "49",
    description: "Para cuidados essenciais",
    features: [
      "Banho simples",
      "Escovação",
      "Corte de unhas",
      "Limpeza de ouvidos",
    ],
    featured: false,
  },
  {
    name: "PADRÃO",
    price: "99",
    description: "O mais popular",
    features: [
      "Todos do plano básico",
      "Tosa higiênica",
      "Hidratação",
      "Perfume especial",
      "Laço ou gravata",
    ],
    featured: true,
  },
  {
    name: "ESTENDIDO",
    price: "149",
    description: "Experiência completa",
    features: [
      "Todos do plano padrão",
      "Tosa completa",
      "Spa relaxante",
      "Massagem",
      "Transporte incluso",
      "Atendimento VIP",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-10 bg-secondary">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossos Planos
          </span>
          <h2 className="section-title mb-4">
            PREÇOS COMPETITIVOS PARA SERVIÇOS PARA ANIMAIS DE ESTIMAÇÃO
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 card-hover ${
                plan.featured
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-card"
              }`}
            >
              <div className="text-center mb-6">
                <h3 className={`font-bold text-lg mb-2 ${plan.featured ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-sm ${plan.featured ? "" : "text-muted-foreground"}`}>R$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? "" : "text-muted-foreground"}`}>/mês</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.featured ? "bg-primary-foreground" : "bg-primary"
                    }`}>
                      <Check size={12} className={plan.featured ? "text-primary" : "text-primary-foreground"} />
                    </span>
                    <span className={plan.featured ? "" : "text-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.featured
                  ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
