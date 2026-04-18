
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start space-y-8 z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-primary text-xs font-bold tracking-wider uppercase">
            Innovación en Alicante
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
            Automatización con IA en <span className="text-primary">Alicante</span> para tu negocio
          </h1>
          <p className="text-xl text-foreground/70 max-w-lg leading-relaxed">
            Impulsa tu negocio con IA. Reducimos costes, optimizamos procesos y liberamos el potencial de tu equipo con soluciones inteligentes personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full px-8 py-7 text-lg font-bold bg-primary hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
              Agendar demo gratuita
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg font-bold border-primary text-primary hover:bg-primary/5 transition-all">
              Ver servicios
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/60">
              <span className="font-bold text-foreground">+50 negocios</span> ya confían en nosotros
            </p>
          </div>
        </div>
        
        <div className="relative z-0 hidden lg:block">
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-secondary opacity-30 blur-[100px] rounded-full"></div>
          <div className="relative bg-white/50 backdrop-blur-sm border border-white/20 rounded-3xl p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            {heroImg && (
              <Image 
                src={heroImg.imageUrl} 
                alt={heroImg.description} 
                width={600} 
                height={400} 
                className="rounded-2xl object-cover w-full shadow-inner"
                data-ai-hint={heroImg.imageHint}
              />
            )}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Sistema activo</p>
                <p className="text-[10px] text-muted-foreground">Optimización en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
