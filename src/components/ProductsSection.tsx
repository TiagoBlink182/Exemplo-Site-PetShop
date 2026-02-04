import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Ração Premium",
    price: "R$ 89,90",
    originalPrice: "R$ 109,90",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80",
    rating: 5,
  },
  {
    name: "Coleira Ajustável",
    price: "R$ 45,00",
    originalPrice: "R$ 59,90",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80",
    rating: 4,
  },
  {
    name: "Brinquedo Interativo",
    price: "R$ 39,90",
    originalPrice: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&q=80",
    rating: 5,
  },
  {
    name: "Cama Confortável",
    price: "R$ 129,00",
    originalPrice: "R$ 159,00",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80",
    rating: 5,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-10 bg-background">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Produtos
          </span>
          <h2 className="section-title">
            PRODUTOS PARA SEUS MELHORES AMIGOS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingCart size={18} className="text-primary-foreground" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < product.rating ? "text-pet-orange fill-pet-orange" : "text-muted"}
                    />
                  ))}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-lg">{product.price}</span>
                  <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
