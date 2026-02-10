'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Hero Banner Component - Responsivo para Celular
 * Design: Carrossel com proporção adequada para mobile,
 * overlay com conteúdo bem posicionado.
 */
export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1200&h=600&fit=crop',
      title: 'Páscoa Cacau Show',
      subtitle: 'A maior Páscoa do Brasil.',
      cta: 'Aproveite'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=1200&h=600&fit=crop',
      title: 'Biscoiteria',
      subtitle: 'Sabores crocantes e irresistíveis.',
      cta: 'Descobrir'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&h=600&fit=crop',
      title: 'Páscoa Infantil Snoopy',
      subtitle: 'Diversão com muito chocolate.',
      cta: 'Ver coleção'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&h=600&fit=crop',
      title: 'Páscoa Infantil',
      subtitle: 'Para encantar as meninas.',
      cta: 'Explorar'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-48 md:h-96 overflow-hidden rounded-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center md:items-center">
            <div className="container px-4 md:px-8">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-3 font-display">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg text-white/90 mb-3 md:mb-6 font-serif-alt">
                  {slide.subtitle}
                </p>
                <button className="px-6 md:px-8 py-2 md:py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105 text-sm md:text-base">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-1 md:p-2 rounded-full transition"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-1 md:p-2 rounded-full transition"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              index === currentSlide ? 'bg-accent' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
