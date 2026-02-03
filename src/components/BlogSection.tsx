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
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nosso Blog
          </span>
          <h2 className="section-title">
            ÚLTIMOS ARTIGOS DO NOSSO BLOG
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Novo
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
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
