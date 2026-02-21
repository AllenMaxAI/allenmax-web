'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

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
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current && !isInitialized) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1&primary_color=3b82f6&text_color=ffffff&background_color=020817&hide_branding=1',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
        setIsInitialized(true);
        
        // Simulamos la carga completa del widget real para sincronizar con el desvanecimiento
        setTimeout(() => {
          setIsLoaded(true);
          setProgress(100);
        }, 2200);
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
              {/* Barra de progreso superior con blur de 25px */}
              <div className="absolute top-0 left-0 w-full z-30 overflow-hidden">
                <Progress 
                  value={progress} 
                  className="h-1 rounded-none bg-transparent blur-[25px] transition-all duration-300" 
                />
              </div>

              {/* Contenido blureado */}
              <div className="flex flex-col p-6 md:p-10 blur-[15px] opacity-40 mt-4">
                {/* Logo cuadrado con puntos de carga centrados */}
                <div className="w-16 h-16 bg-[#020817] rounded-md mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="flex gap-1 z-30 scale-75">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                  </div>
                </div>
                
                {/* Detalles informativos */}
                <div className="w-32 h-3 bg-gray-300 mx-auto mb-3 rounded-full" />
                <div className="w-64 h-7 bg-gray-400 mx-auto mb-8 rounded-full" />
                
                <div className="space-y-4 mb-10 max-w-[300px] mx-auto text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded-full" />
                    <div className="w-20 h-3 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded-full" />
                    <div className="w-40 h-3 bg-gray-200 rounded-full" />
                  </div>
                </div>
                
                {/* Texto descriptivo largo */}
                <div className="space-y-4 mb-10 text-center">
                  <div className="w-72 h-3 bg-gray-200 mx-auto rounded-full" />
                  <div className="w-80 h-3 bg-gray-200 mx-auto rounded-full mt-6" />
                </div>
                
                <div className="h-px bg-gray-200 w-full mb-10" />

                {/* Sección de Calendario (Parte inferior) */}
                <div className="w-48 h-6 bg-gray-300 mx-auto mb-10 rounded-full" />
                
                <div className="flex justify-center items-center gap-10 mb-8">
                  <div className="w-4 h-4 bg-gray-200 rounded-full" />
                  <div className="w-40 h-5 bg-gray-300 rounded-full" />
                  <div className="w-4 h-4 bg-gray-200 rounded-full" />
                </div>

                <div className="grid grid-cols-7 gap-6 max-w-[350px] mx-auto mb-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="w-8 h-2 bg-gray-200 rounded-full mx-auto" />
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-x-6 gap-y-6 max-w-[350px] mx-auto mb-10">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-200 rounded-full" />
                    </div>
                  ))}
                </div>
                
                <div className="w-56 h-4 bg-gray-200 mx-auto rounded-full" />
              </div>
            </div>

            {/* Widget real de Calendly */}
            <div 
              ref={calendlyRef}
              className={cn(
                "w-full h-[1050px] transition-opacity duration-700",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
