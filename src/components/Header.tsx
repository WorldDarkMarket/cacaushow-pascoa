'use client';

import { ShoppingCart, MapPin, User, Search, ChevronDown, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useSearch } from '@/contexts/SearchContext';

/**
 * Header Component - Responsivo para celular
 * Design: Top bar, header com logo, menu mobile, barra de busca,
 * localização, carrinho e Cacau Lovers.
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { count, setOpen } = useCart();
  const { user, setLoginOpen, setRegisterOpen, signOut } = useAuth();
  const { query, setQuery } = useSearch();

  const categories = [
    { name: 'Chocolate', id: 'chocolate' },
    { name: 'Biscoito', id: 'biscoito' },
    { name: 'Cestas e Presentes', id: 'cestas' },
    { name: 'Páscoa', id: 'pascoa' },
    { name: 'Lifestyle', id: 'lifestyle' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Cinza muito escuro */}
      <div style={{backgroundColor: '#2a2a2a'}} className="text-gray-300 text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">ACESSIBILIDADE</a>
            <a href="#" className="hover:text-white transition">SEJA UM REVENDEDOR</a>
            <a href="#" className="hover:text-white transition">SEJA UM FRANQUEADO</a>
            <a href="#" className="hover:text-white transition">ÁREA PARA EMPRESAS</a>
            <a href="#" className="hover:text-white transition">NOSSOS HOTÉIS</a>
            <a href="#" className="hover:text-white transition">CACAU PARK</a>
            <a href="#" className="hover:text-white transition">GRUPO PLAYCENTER</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">ENCONTRE UMA LOJA</a>
            <a href="#" className="hover:text-white transition">VALE PRESENTE</a>
          </div>
        </div>
      </div>

      {/* Main Header - Fundo cinza muito escuro */}
      <div style={{backgroundColor: '#2a2a2a'}} className="text-white">
        <div className="container py-3">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between gap-4 mb-3">
            {/* Logo CS */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="text-2xl font-display font-bold text-white">Cacau Show</div>
            </div>

            {/* Search Bar - Centralizada */}
            <div className="flex-1 max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar Produto"
                  className="w-full px-4 py-2 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {user ? (
                  <>
                    <span className="text-sm">Olá, {user.name}</span>
                    <button className="px-3 py-2 bg-secondary text-white rounded-full hover:bg-opacity-90 transition text-sm" onClick={signOut}>
                      Sair
                    </button>
                  </>
                ) : (
                  <button className="px-5 py-2 bg-secondary text-white rounded-full hover:bg-opacity-90 transition font-medium text-sm flex items-center gap-2" onClick={() => setLoginOpen(true)}>
                    <User className="w-4 h-4" />
                    ENTRAR
                  </button>
                )}
                <button className="px-5 py-2 bg-secondary text-white rounded-full hover:bg-opacity-90 transition font-medium text-sm" onClick={() => setRegisterOpen(true)}>
                  CADASTRAR
                </button>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 text-white hover:opacity-80 transition text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>Cacau Show - SP</span>
                <span className="text-xs">ALTERAR</span>
              </button>
              <button onClick={() => setOpen(true)} className="relative p-2 hover:bg-gray-700 rounded-full transition">
                <ShoppingCart className="w-5 h-5 text-white" />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between gap-2 mb-3">
            {/* Logo CS */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-xl font-display font-bold text-white">Cacau Show</div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2">
              <button className="relative p-2 hover:bg-gray-700 rounded-full transition" onClick={() => setOpen(true)}>
                <ShoppingCart className="w-4 h-4 text-white" />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-xs">
                  {count}
                </span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-700 rounded-full transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full px-3 py-2 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center justify-between pt-2 border-t border-gray-700">
            <div className="flex gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="group relative">
                  <button className="text-white hover:opacity-80 transition font-medium text-sm flex items-center gap-1 py-1">
                    {cat.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Dropdown placeholder */}
                  <div className="absolute left-0 top-full hidden group-hover:block text-white rounded shadow-lg min-w-48" style={{backgroundColor: '#1f1f1f'}}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-sm">Subcategoria 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-sm">Subcategoria 2</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-white hover:opacity-80 transition font-medium text-sm">
                Verão
              </a>
              <button className="px-4 py-1 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 fill-current" />
                Cacau Lovers
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden pt-3 border-t border-gray-700">
              <div className="space-y-3">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="block text-white hover:text-gray-300 transition font-medium text-sm py-2"
                  >
                    {cat.name}
                  </a>
                ))}
                <a href="#" className="block text-white hover:text-gray-300 transition font-medium text-sm py-2">
                  Verão
                </a>
                <button className="w-full px-3 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition text-sm flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 fill-current" />
                  Cacau Lovers
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
