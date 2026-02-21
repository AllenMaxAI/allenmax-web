'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    Calendly?: any;
  }
}

export function CalendlyPersistent() {
  const pathname = usePathname();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isVisible = pathname === '/contacto';

  useEffect(() => {
    if (mounted && !isLoaded) {
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
  }, [mounted, isLoaded]);

  useEffect(() => {
    if (!mounted) return;

    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current && !isInitialized) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1&primary_color=3b82f6&text_color=ffffff&background_color=ffffff&hide_branding=1',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
        setIsInitialized(true);
        
        // Simular tiempo de carga para el esqueleto
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
  }, [mounted, isInitialized]);

  if (!mounted) return null;

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
              "rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white min-h-[1050px] relative pointer-events-auto transition-transform duration-500",
              isVisible ? "translate-y-0" : "translate-y-10"
            )}
          >
            {/* Línea de separación persistente (sincronizada con el header del widget real a 86px) */}
            <div 
              className={cn(
                "absolute top-[86px] left-0 w-full h-[1px] bg-[#e5e7eb] z-[35] pointer-events-auto transition-opacity duration-700",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Esqueleto de Carga - Desaparición Instantánea para evitar rastros */}
            <div 
              className={cn(
                "absolute inset-0 z-20 bg-white pointer-events-none flex flex-col",
                isLoaded ? "hidden" : "flex"
              )}
            >
              {/* Contenedor de Barra de Progreso */}
              <div className="absolute top-0 left-0 w-full z-30 h-1">
                <div 
                  className="absolute top-0 left-0 h-8 bg-primary/60 blur-[25px] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
                <div 
                  className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Contenido blureado del esqueleto */}
              <div className="flex flex-col blur-[18px] opacity-40 mt-10">
                {/* Logo AllenMax Negro */}
                <div className="w-16 h-16 bg-[#020817] rounded-lg mx-auto mb-2 flex items-center justify-center relative overflow-hidden">
                   <span className="text-[8px] text-white font-extrabold uppercase tracking-tighter">allenmax</span>
                </div>
                
                {/* Línea horizontal de separación en el esqueleto a 86px */}
                <div className="h-px bg-gray-200 w-full mb-10" />
                
                <div className="px-10 space-y-8">
                  <div className="w-48 h-5 bg-gray-300 mx-auto mb-6 rounded-full" />
                  
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-4 h-4 bg-gray-200 rounded-full" />
                    <div className="w-24 h-2 bg-gray-200 rounded-full" />
                  </div>
                  
                  <div className="space-y-3 mb-12 max-w-[280px] mx-auto text-center">
                    <div className="w-full h-1.5 bg-gray-100 rounded-full" />
                    <div className="w-5/6 h-1.5 bg-gray-100 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Parche superior derecho (ribbon) - Bloqueo de clics activado */}
            <div 
              className={cn(
                "absolute top-0 right-0 w-[275px] h-[100px] bg-white z-30 pointer-events-auto transition-opacity duration-700",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
              aria-hidden="true"
            />

            {/* Widget real de Calendly */}
            <div 
              ref={calendlyRef}
              className={cn(
                "w-full h-[1050px] transition-opacity duration-700 bg-white",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Parche inferior (branding) - Bloqueo de clics activado */}
            <div 
              className={cn(
                "absolute bottom-0 left-0 w-full h-[65px] bg-white border-t border-[#e5e7eb] z-[35] pointer-events-auto transition-opacity duration-700",
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
