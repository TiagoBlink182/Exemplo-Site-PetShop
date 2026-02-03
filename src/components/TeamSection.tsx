import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Carlos Silva",
    role: "Veterinário Chefe",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Ana Beatriz",
    role: "Tosadora Profissional",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
  },
  {
    name: "Pedro Oliveira",
    role: "Adestrador",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Nossa Equipe
            </span>
            <h2 className="section-title mb-6">
              PROFISSIONAIS QUALIFICADOS PARA O CUIDADO DE ANIMAIS DE ESTIMAÇÃO
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais apaixonados por animais, com anos de experiência 
              e formação especializada para garantir o melhor atendimento para o seu pet.
            </p>
            <a href="#contact" className="btn-primary">
              Conhecer Equipe
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-bold text-primary-foreground">{member.name}</h4>
                    <p className="text-primary-foreground/80 text-sm">{member.role}</p>
                    <div className="flex gap-3 mt-3">
                      <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                        <Facebook size={18} />
                      </a>
                      <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Default visible info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent group-hover:opacity-0 transition-opacity">
                  <h4 className="font-bold text-primary-foreground">{member.name}</h4>
                  <p className="text-primary-foreground/80 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
