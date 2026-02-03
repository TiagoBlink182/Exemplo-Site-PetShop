import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">🐾</span>
              </div>
              <span className="font-bold text-xl text-primary-foreground">PET SHOP</span>
            </div>
            <p className="text-primary-foreground/60 mb-6 leading-relaxed">
              Cuidando dos seus animais de estimação com amor e dedicação desde 2010. 
              Oferecemos os melhores serviços e produtos para seu pet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Banho e Tosa
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Veterinário
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Hospedagem
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Adestramento
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                  Passeios
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-primary-foreground/60">
                <span>Segunda - Sexta</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-primary-foreground/60">
                <span>Sábado</span>
                <span>08:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-primary-foreground/60">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Pet Shop. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
