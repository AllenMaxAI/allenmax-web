'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function CalendlyPersistent() {
  const pathname = usePathname();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isVisible = pathname === '/contacto';

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
        
        // Simulamos la carga para el desvanecimiento del blur
        setTimeout(() => {
          setIsLoaded(true);
        }, 2500);
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
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isInitialized]);

  // Si no es la página de contacto, mantenemos el widget montado pero oculto y sin interactividad
  return (
    <div 
      className={cn(
        "fixed inset-0 z-40 flex items-center justify-center transition-opacity duration-500 pointer-events-none",
        isVisible ? "opacity-100" : "opacity-0 invisible"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl h-full flex items-center justify-end">
        <div className="w-full lg:w-[50%] relative mt-16 lg:mt-0">
          <div 
            className={cn(
              "rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-white min-h-[700px] md:min-h-[900px] relative pointer-events-auto transition-transform duration-500",
              isVisible ? "translate-y-0" : "translate-y-10"
            )}
          >
            {/* Skeleton con Blur Refinado */}
            <div 
              className={cn(
                "absolute inset-0 z-20 bg-white transition-opacity duration-1000 pointer-events-none flex flex-col",
                isLoaded ? "opacity-0" : "opacity-100"
              )}
            >
              <div className="flex flex-col p-6 md:p-10 blur-[15px] opacity-40">
                {/* Logo CUADRADO pequeño superior */}
                <div className="w-20 h-20 bg-[#020817] rounded-md mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                  {/* Puntos de carga centrados dentro del logo blureado */}
                  <div className="flex gap-1 z-30 scale-75">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                  </div>
                </div>
                
                <div className="w-32 h-3 bg-gray-300 mx-auto mb-3 rounded-full" />
                <div className="w-64 h-7 bg-gray-400 mx-auto mb-8 rounded-full" />
                
                <div className="space-y-4 mb-10 max-w-[300px] mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded-full" />
                    <div className="w-20 h-3 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-300 rounded-full" />
                    <div className="w-60 h-3 bg-gray-200 rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 mb-10 text-center">
                  <div className="w-72 h-3 bg-gray-200 mx-auto rounded-full" />
                  <div className="w-80 h-3 bg-gray-200 mx-auto rounded-full mt-6" />
                </div>
                
                <div className="h-px bg-gray-200 w-full mb-10" />

                {/* SECCIÓN CALENDARIO REALISTA */}
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

            {/* Contenedor del Widget */}
            <div 
              ref={calendlyRef}
              className={cn(
                "w-full h-[700px] md:h-[900px] transition-opacity duration-700",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
