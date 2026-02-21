'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function CalendlyPersistent() {
  const pathname = usePathname();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const isVisible = pathname === '/contacto';

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1.5;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current && !isInitialized) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1&primary_color=3b82f6&text_color=ffffff&background_color=ffffff&hide_branding=1',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
        setIsInitialized(true);
        
        // Tiempo de espera para asegurar que el iframe real ha renderizado antes de quitar el blur
        setTimeout(() => {
          setIsLoaded(true);
          setProgress(100);
        }, 3500);
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const interval = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInitialized]);

  return (
    <div 
      className={cn(
        "absolute top-0 left-0 w-full z-40 flex justify-center transition-opacity duration-500 pointer-events-none pt-24 md:pt-32",
        isVisible ? "opacity-100" : "opacity-0 invisible h-0"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-end">
        <div className="w-full lg:w-[50%] relative">
          <div 
            className={cn(
              "rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white min-h-[1050px] relative pointer-events-auto transition-transform duration-500",
              isVisible ? "translate-y-0" : "translate-y-10"
            )}
          >
            {/* Esqueleto de Carga con Blur */}
            <div 
              className={cn(
                "absolute inset-0 z-20 bg-white transition-opacity duration-1000 pointer-events-none flex flex-col",
                isLoaded ? "opacity-0" : "opacity-100"
              )}
            >
              {/* Contenedor de Barra de Progreso (Halo de luz de 25px) */}
              <div className="absolute top-0 left-0 w-full z-30 h-1">
                {/* Glow / Blur de 25px más intenso */}
                <div 
                  className="absolute top-0 left-0 h-8 bg-primary/60 blur-[25px] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
                {/* Línea nítida core */}
                <div 
                  className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Contenido blureado - Réplica de la captura */}
              <div className="flex flex-col p-6 md:p-10 blur-[18px] opacity-40 mt-8">
                
                {/* Logo Cuadrado Pequeño (Simulando la PFP del widget) */}
                <div className="w-10 h-10 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                   <div className="flex gap-1 scale-50">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  </div>
                </div>
                
                {/* Textos Informativos */}
                <div className="w-20 h-2 bg-gray-200 mx-auto mb-3 rounded-full" />
                <div className="w-48 h-5 bg-gray-300 mx-auto mb-6 rounded-full" />
                
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="w-4 h-4 bg-gray-200 rounded-full" />
                  <div className="w-24 h-2 bg-gray-200 rounded-full" />
                </div>
                
                {/* Descripción blureada */}
                <div className="space-y-2 mb-10 max-w-[280px] mx-auto text-center">
                  <div className="w-full h-1.5 bg-gray-100 rounded-full" />
                  <div className="w-5/6 h-1.5 bg-gray-100 rounded-full mx-auto" />
                  <div className="w-4/5 h-1.5 bg-gray-100 rounded-full mx-auto" />
                </div>
                
                <div className="h-px bg-gray-100 w-full mb-8" />

                {/* Sección Calendario Inferior */}
                <div className="w-32 h-4 bg-gray-300 mx-auto mb-8 rounded-full" />
                
                {/* Selector de Mes */}
                <div className="flex justify-between items-center max-w-[320px] mx-auto mb-6 px-2">
                  <div className="w-6 h-6 bg-gray-100 rounded-full" />
                  <div className="w-24 h-3 bg-gray-200 rounded-full" />
                  <div className="w-6 h-6 bg-gray-100 rounded-full" />
                </div>

                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-4 max-w-[320px] mx-auto mb-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="w-4 h-1.5 bg-gray-100 rounded-full mx-auto" />
                  ))}
                </div>

                {/* Cuadrícula de Calendario Realista */}
                <div className="grid grid-cols-7 gap-y-6 max-w-[320px] mx-auto mb-10">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className="aspect-square w-8 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                      <div className="w-2 h-2 bg-gray-200 rounded-full" />
                    </div>
                  ))}
                </div>
                
                {/* Zona Horaria */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-4 h-4 bg-gray-100 rounded-full" />
                  <div className="w-40 h-2 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>

            {/* Widget real de Calendly */}
            <div 
              ref={calendlyRef}
              className={cn(
                "w-full h-[1050px] transition-opacity duration-700 bg-white",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Capa para ocultar el branding de Calendly */}
            <div 
              className={cn(
                "absolute bottom-0 left-0 w-full h-[65px] bg-white border-t border-[#e5e7eb] z-30 pointer-events-none transition-opacity duration-700",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
