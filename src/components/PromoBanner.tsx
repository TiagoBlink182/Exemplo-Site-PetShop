const PromoBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Oferta Especial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            ECONOMIZE 50% EM TODOS OS ITENS DO SEU PRIMEIRO PEDIDO.
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Aproveite nossa promoção exclusiva para novos clientes. Válido para primeira compra.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-foreground/90 transition-colors">
              Comprar Agora
            </a>
            <a href="#services" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
