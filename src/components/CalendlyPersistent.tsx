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
        
        // Simular tiempo de carga para la transición
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
            {/* 1. BARRA DE PROGRESO SUPREMA (Prioridad máxima de visibilidad) */}
            <div 
              className={cn(
                "absolute top-0 left-0 w-full z-[70] h-1 transition-opacity duration-700",
                isLoaded ? "opacity-0 invisible" : "opacity-100"
              )}
            >
              <div 
                className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300 ease-out shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* 2. CAPAS DE SEGURIDAD (PERSISTENTES) - Ocultan branding de Calendly */}
            <div 
              className="absolute top-0 right-0 w-[275px] h-[100px] bg-white z-[45] pointer-events-auto"
              aria-hidden="true"
            />
            <div 
              className="absolute bottom-0 left-0 w-full h-[65px] bg-white border-t border-[#e5e7eb] z-[45] pointer-events-auto"
              aria-hidden="true"
            />
            <div 
              className="absolute top-[86px] left-0 w-full h-[1px] bg-[#e5e7eb] z-[45] pointer-events-auto"
            />

            {/* 3. ESQUELETO DE CARGA (Limpio y Minimalista) */}
            <div 
              className={cn(
                "absolute inset-0 z-40 bg-white pointer-events-none flex flex-col transition-opacity duration-700",
                isLoaded ? "opacity-0 invisible" : "opacity-100"
              )}
            >
              <div className="flex flex-col mt-4">
                {/* Logo AllenMax: Muy sutil, sin blur para evitar artefactos */}
                <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mt-4 z-50 opacity-40" />
                
                {/* Espacio del header */}
                <div className="h-10" />
                
                {/* Contenido del widget: Bloques de carga limpios */}
                <div className="px-10 space-y-8 mt-10 opacity-[0.05]">
                  <div className="w-40 h-8 bg-gray-400 mx-auto mb-6 rounded-full" />
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                    <div className="w-28 h-3 bg-gray-300 rounded-full" />
                  </div>
                  <div className="space-y-4 mb-12 max-w-[280px] mx-auto text-center">
                    <div className="w-full h-2 bg-gray-200 rounded-full" />
                    <div className="w-5/6 h-2 bg-gray-200 rounded-full mx-auto" />
                    <div className="w-4/6 h-2 bg-gray-200 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. WIDGET REAL DE CALENDLY */}
            <div 
              ref={calendlyRef}
              className={cn(
                "w-full h-[1050px] bg-white transition-opacity duration-700",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
