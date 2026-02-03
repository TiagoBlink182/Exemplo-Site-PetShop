import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-primary-foreground/60 text-sm">Ligue para nós</p>
              <p className="text-primary-foreground font-semibold">+55 11 99999-9999</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-primary-foreground/60 text-sm">Email</p>
              <p className="text-primary-foreground font-semibold">contato@petshop.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-primary-foreground/60 text-sm">Localização</p>
              <p className="text-primary-foreground font-semibold">Rua dos Pets, 123</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-primary-foreground/60 text-sm">Horário</p>
              <p className="text-primary-foreground font-semibold">Seg - Sáb: 8h - 18h</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Receba nossas novidades
              </h3>
              <p className="text-primary-foreground/60">
                Inscreva-se para receber promoções e dicas exclusivas.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="px-6 py-4 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary w-full sm:w-80"
              />
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
