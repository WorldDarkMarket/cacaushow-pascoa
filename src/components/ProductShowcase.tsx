'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useCart } from '@/contexts/CartContext';
import { useSearch } from '@/contexts/SearchContext';

/**
 * Product Showcase Component - Elegância Clássica
 * Design: Grid de produtos com imagens, preços,
 * botões de favorito e hover effects elegantes.
 */
export default function ProductShowcase() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { add } = useCart();
  const { query } = useSearch();

  const discountRate = 0.6;
  const parsePrice = (s: string) =>
    Number(s.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", "."));
  const formatBRL = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const products = [
    {
      id: 1,
      name: 'Ovo de Páscoa Pelúcia Patrick Bob Esponja',
      price: 'R$ 129,99',
      badge: 'Infantil',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Ovo de Páscoa Pelúcia Batman',
      price: 'R$ 84,99',
      badge: 'Infantil',
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'laCreme Pistache',
      price: 'R$ 99,99',
      badge: 'Exclusivo',
      image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Cesta Chocomonstros da Monstrinha Claudete',
      price: 'R$ 34,99',
      badge: 'Infantil',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'laCreme Zero Lactose 180g',
      price: 'R$ 89,99',
      badge: 'Novo',
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Ovo de Páscoa laCreme',
      price: 'R$ 94,99',
      badge: 'Pré-venda',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Estojo Ursinhos Carinhosos Ursinho Zangadinho',
      price: 'R$ 54,99',
      badge: null,
      image: 'https://images.unsplash.com/photo-1508669194393-7f8656379228?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Scooby-Doo 170g',
      price: 'R$ 119,99',
      badge: null,
      image: 'https://images.unsplash.com/photo-1578376748869-447868770e25?w=400&h=400&fit=crop'
    },
    {
      id: 9,
      name: 'Pelúcia Ursinhos Carinhosos Arco-Íris',
      price: 'R$ 109,99',
      badge: 'Infantil',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop',
      finalPriceLabel: 'R$ 39,99'
    },
    {
      id: 10,
      name: 'Ovo de Páscoa ao Leite Pelúcia Snoopy Astronauta',
      price: 'R$ 99,99',
      badge: 'Novo',
      image: 'https://images.unsplash.com/photo-1563729768-6af2c4d5c329?w=400&h=400&fit=crop',
      finalPriceLabel: 'R$ 39,99'
    },
    {
      id: 11,
      name: 'Tablete ao Leite Pelúcia Chapéu Seletor Harry Potter',
      price: 'R$ 109,99',
      badge: 'Novo',
      image: 'https://images.unsplash.com/photo-1596989082572-6b4de7fa1ae6?w=400&h=400&fit=crop',
      finalPriceLabel: 'R$ 39,99'
    },
    {
      id: 12,
      name: 'Pelúcia Ursinhos Carinhosos Ursinho Zangadinho',
      price: 'R$ 119,99',
      badge: 'Novo',
      image: 'https://images.unsplash.com/photo-1508669194393-7f8656379228?w=400&h=400&fit=crop',
      finalPriceLabel: 'R$ 35,99'
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const list = (() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(p => p.name.toLowerCase().includes(q));
  })();

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl font-bold text-foreground mb-8">
          Ovos de Páscoa
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <CardContent className="px-0">
                <AspectRatio ratio={1}>
                  <div className="absolute inset-0 bg-muted/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {product.badge && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary">{product.badge}</Badge>
                      </div>
                    )}
                    <Button
                      aria-label="Favoritar"
                      variant="ghost"
                      size="icon-sm"
                      className="absolute top-3 left-3 bg-white/70 hover:bg-white"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        className={`transition ${
                          favorites.includes(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </Button>
                  </div>
                </AspectRatio>
              </CardContent>
              <CardContent className="pt-4">
                <h3 className="font-serif-alt font-semibold text-foreground mb-1 text-base md:text-lg line-clamp-2">
                  {product.name}
                </h3>
                {(() => {
                  const original = parsePrice(product.price);
                  const discounted = Math.max(0, original * (1 - discountRate));
                  const finalLabel = (product as any).finalPriceLabel ?? formatBRL(discounted);
                  return (
                    <>
                      <p className="text-muted-foreground text-sm line-through">
                        {formatBRL(original)}
                      </p>
                      <div className="flex items-baseline gap-1 mb-4">
                        <p className="font-display text-lg md:text-xl font-bold text-primary">
                          {finalLabel}
                        </p>
                        <span className="text-xs text-muted-foreground">/un</span>
                      </div>
                    </>
                  );
                })()}
                <div className="flex justify-center">
                  <Button
                    onClick={() =>
                      (() => {
                        const original = parsePrice(product.price);
                        const discounted = Math.max(0, original * (1 - discountRate));
                        const finalLabel = (product as any).finalPriceLabel ?? formatBRL(discounted);
                        add({
                          id: product.id,
                          name: product.name,
                          image: product.image,
                          priceLabel: finalLabel,
                        });
                      })()
                    }
                  >
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
