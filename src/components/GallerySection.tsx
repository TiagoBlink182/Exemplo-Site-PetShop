const images = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
  "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80",
  "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&q=80",
  "https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?w=600&q=80",
];

const GallerySection = () => {
  return (
    <section className="py-10 bg-secondary">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Galeria
          </span>
          <h2 className="section-title">
            NOSSOS CLIENTES PELUDOS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
            >
              <img
                src={image}
                alt={`Pet ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver mais
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
