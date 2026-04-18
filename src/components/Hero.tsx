
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const handleCalendly = () => {
    window.open('https://calendly.com/tu-usuario', '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6 overflow-hidden bg-background">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start space-y-8 z-10 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-bold tracking-tight animate-in fade-in slide-in-from-top-4 duration-1000">
            <Sparkles size={14} className="animate-pulse" />
            <span>Impulsando el Futuro en Alicante</span>
          </div>
          
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            <h1 className="text-5xl lg:text-[80px] font-extrabold leading-[1.1] tracking-[-0.04em] text-foreground">
              Automatiza tu <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Captación</span> y Atención
            </h1>
            <p className="text-xl text-foreground/60 max-w-lg leading-relaxed font-medium">
              Ayudamos a empresas y clínicas dentales a centralizar su comunicación y multiplicar sus resultados mediante inteligencia artificial estratégica.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={handleCalendly}
              className="rounded-full px-10 py-7 text-lg font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20"
            >
              Agendar llamada
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="rounded-full px-10 py-7 text-lg font-bold border-2 border-primary/20 text-foreground hover:bg-primary/5 transition-all"
            >
              <a href="/crm-dental">Ver CRM Dental</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6 animate-in fade-in duration-1000 delay-700">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-background overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                </div>
              ))}
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-foreground">+100 empresas</p>
              <p className="text-xs text-foreground/40 font-medium">Transformando su operativa con IA</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-0 hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl rounded-[3rem] -z-10"></div>
          
          <div className="relative bg-white border border-white/40 rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] -rotate-1 hover:rotate-0 transition-all duration-1000 group">
            <div className="overflow-hidden rounded-[2rem]">
              {heroImg && (
                <Image 
                  src={heroImg.imageUrl} 
                  alt={heroImg.description} 
                  width={800} 
                  height={600} 
                  className="object-cover w-full h-[450px] group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint={heroImg.imageHint}
                />
              )}
            </div>

            {/* Status Badge flotante mejorado */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Agente IA activo</p>
                <p className="text-[11px] text-foreground/50 font-medium tracking-tight">Gestionando leads en tiempo real</p>
              </div>
            </div>

            {/* Decoración extra para profundidad */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
