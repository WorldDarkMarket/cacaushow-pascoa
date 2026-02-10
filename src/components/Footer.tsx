import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer Component - Elegância Clássica
 * Design: Layout com 3 colunas de links institucionais,
 * redes sociais e selos de segurança.
 */
export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Sobre a Cacau Show</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Nossa Fazenda</a></li>
              <li><a href="#" className="hover:underline">Instituto Cacau Show</a></li>
              <li><a href="#" className="hover:underline">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:underline">Nossas Marcas</a></li>
            </ul>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Termos de Uso</a></li>
              <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
              <li><a href="#" className="hover:underline">Política de Trocas</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">SAC</a></li>
            </ul>
          </div>

          {/* Column 3 - Business */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Negócios</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Seja um Revendedor</a></li>
              <li><a href="#" className="hover:underline">Seja um Franqueado</a></li>
              <li><a href="#" className="hover:underline">Área para Empresas</a></li>
              <li><a href="#" className="hover:underline">Linha Cacao Home</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          {/* Social Media */}
          <div className="mb-8">
            <p className="font-semibold mb-4">Siga-nos</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2026 Cacau Show. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>🔒 Segurança SSL</span>
              <span>✓ Compra Protegida</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
