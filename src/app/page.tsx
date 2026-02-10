import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import CartDrawer from '@/components/CartDrawer';
import LoginDialog from '@/components/LoginDialog';
import RegisterDialog from '@/components/RegisterDialog';
import Image from 'next/image';

/**
 * Home Page - Fiel ao Original Cacau Show
 * Design: Layout completo com header escuro, hero banner,
 * categorias, vitrine de produtos e footer.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="py-6 px-4">
          <div className="container">
            <HeroBanner />
          </div>
        </section>

        {/* Product Showcase */}
        <ProductShowcase />

        {/* About Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-8 font-display">
              Todos os Momentos Combinam com Cacau Show
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 font-serif-alt">
              <p>
                Na <strong>Cacau Show</strong>, cada chocolate é feito para transformar momentos simples em experiências especiais. São <strong>Trufas</strong> irresistíveis, <strong>Tabletes</strong> cremosos, <strong>Bombons</strong> artesanais e <strong>Presentes</strong> de chocolate que combinam qualidade, sabor e muito carinho.
              </p>
              <p>
                Aqui, o amor pelo cacau se transforma em produtos imperdíveis: do clássico <strong>chocolate ao leite</strong>, aos <strong>intensos</strong> e <strong>recheados</strong>. Tudo preparado com ingredientes selecionados e o cuidado que só quem entende de chocolate pode oferecer.
              </p>
              <p>
                Quer surpreender alguém ou dar um presente? Na <strong>Cacau Show</strong>, você encontra opções para todos os gostos e ocasiões. Descubra o mundo <strong>Cacau Show</strong> e viva momentos doces, cheio de sabor, afeto e boas lembranças.
              </p>
            </div>
          </div>
        </section>

        {/* Lines Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-12 font-display">
              Nossas Linhas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'LaNut',
                  desc: 'Crocância em cada mordida',
                  image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=400&fit=crop'
                },
                {
                  name: 'laCreme',
                  desc: 'Cremosos em cada detalhe',
                  image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&h=400&fit=crop'
                },
                {
                  name: 'Especiais',
                  desc: 'Sabores únicos e exclusivos',
                  image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=400&fit=crop'
                },
                {
                  name: 'Dreams',
                  desc: 'Sonhos em forma de chocolate',
                  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop'
                }
              ].map((line, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                >
                  <img
                    src={line.image}
                    alt={line.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center">
                    <h3 className="text-3xl font-bold text-white mb-2 font-display">
                      {line.name}
                    </h3>
                    <p className="text-white/90 font-serif-alt">
                      {line.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
      <CartDrawer />
      <LoginDialog />
      <RegisterDialog />
    </div>
  );
}
