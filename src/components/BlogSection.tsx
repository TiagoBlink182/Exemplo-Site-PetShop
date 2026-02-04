import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "CUIDADOS ESSENCIAIS COM SEU CÃO NO VERÃO",
    excerpt: "Descubra como manter seu cão saudável e feliz durante os dias quentes de verão.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    date: "15 Jan 2026",
    author: "Dr. Carlos",
  },
  {
    title: "ALIMENTAÇÃO SAUDÁVEL PARA GATOS",
    excerpt: "Guia completo sobre a dieta ideal para felinos de todas as idades.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    date: "12 Jan 2026",
    author: "Ana Beatriz",
  },
  {
    title: "COMO ESCOLHER O BRINQUEDO IDEAL",
    excerpt: "Dicas para selecionar brinquedos seguros e divertidos para seu pet.",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&q=80",
    date: "10 Jan 2026",
    author: "Pedro Oliveira",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-10 bg-background">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nosso Blog
          </span>
          <h2 className="section-title">
            ÚLTIMOS ARTIGOS DO NOSSO BLOG
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-44 md:h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-sm font-medium">
                  Novo
                </div>
              </div>
              <div className="p-3 md:p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base mb-1 md:mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Ler mais <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
