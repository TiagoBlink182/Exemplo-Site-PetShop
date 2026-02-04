import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-foreground text-primary-foreground py-0.5 md:py-1">
        <div className="container mx-auto px-2 md:px-4 flex flex-wrap justify-between items-center text-xs md:text-sm gap-2">
          <div className="flex items-center gap-4">
            <a href="mailto:contato@petshop.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">contato@petshop.com</span>
            </a>
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+55 11 99999-9999</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span className="hidden md:inline">Rua dos Pets, 123 - São Paulo</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-1 md:gap-2">
              <div className="w-8 md:w-9 h-8 md:h-9 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base md:text-lg">🐾</span>
              </div>
              <span className="font-bold text-base md:text-lg text-foreground">PET SHOP</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3 md:gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                INÍCIO
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                SOBRE
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1">
                SERVIÇOS <ChevronDown size={16} />
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                PRODUTOS
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1">
                PÁGINAS <ChevronDown size={16} />
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-primary">
                CONTATO
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                  INÍCIO
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                  SOBRE
                </a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                  SERVIÇOS
                </a>
                <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                  PRODUTOS
                </a>
                <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                  PÁGINAS
                </a>
                <a href="#contact" className="btn-primary w-fit">
                  CONTATO
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
