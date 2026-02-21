'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    Calendly?: any;
  }
}

type CalendlyView = 'calendar' | 'times' | 'details' | 'success';

export function CalendlyPersistent() {
  const pathname = usePathname();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Estados reactivos para la UI custom
  const [showLine, setShowLine] = useState(true);
  const [isTimesView, setIsTimesView] = useState(false);
  const [isCalendarView, setIsCalendarView] = useState(true);
  
  // Refs para persistencia entre navegaciones
  const lastHeightRef = useRef<number | null>(null);
  const lastViewRef = useRef<CalendlyView>('calendar');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isVisible = pathname === '/contacto';

  // Lógica de clasificación de vista basada en altura
  const classifyView = (h: number): CalendlyView => {
    if (h >= 980) return 'calendar';
    if (h <= 960) return 'times';
    return 'details';
  };

  useEffect(() => {
    if (!mounted) return;

    const handleCalendlyEvents = (e: MessageEvent) => {
      if (e.data?.event && typeof e.data.event === 'string' && e.data.event.startsWith('calendly.')) {
        
        // Manejo de altura para clasificar vistas
        if (e.data.event === 'calendly.page_height') {
          const raw = e.data.payload?.height ?? e.data.payload;
          const h = parseInt(String(raw), 10);

          if (!Number.isNaN(h)) {
            lastHeightRef.current = h;
            const view = classifyView(h);
            lastViewRef.current = view;
            
            // Actualizar estados visuales
            setShowLine(view === 'calendar' || view === 'details');
            setIsTimesView(view === 'times');
            setIsCalendarView(view === 'calendar');
          }
        }

        // Pantalla final de éxito
        if (e.data.event === 'calendly.event_scheduled') {
          lastViewRef.current = 'success';
          setShowLine(true);
          setIsTimesView(false);
          setIsCalendarView(false);
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvents);
    return () => window.removeEventListener('message', handleCalendlyEvents);
  }, [mounted]);

  // Simulación de progreso de carga para el esqueleto
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

  // Inicialización del widget de Calendly
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

  // Restaurar estado visual inmediatamente al volver a /contacto para evitar parpadeos (flash)
  useEffect(() => {
    if (isVisible) {
      if (lastHeightRef.current !== null) {
        const h = lastHeightRef.current;
        const view = classifyView(h);
        const isSuccess = lastViewRef.current === 'success';
        
        setShowLine(view === 'calendar' || view === 'details' || isSuccess);
        setIsTimesView(view === 'times' && !isSuccess);
        setIsCalendarView(view === 'calendar' && !isSuccess);
      } else {
        // Estado inicial por defecto
        setShowLine(true);
        setIsTimesView(false);
        setIsCalendarView(true);
      }
    }
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div 
      className={cn(
        "absolute top-0 left-0 w-full z-40 flex justify-center transition-opacity duration-500 pointer-events-none pt-24 md:pt-32",
        isVisible ? "opacity-100" : "opacity-0 invisible h-0"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-end">
        <div className="w-full lg:w-[50%] relative flex justify-center">
          <div 
            className={cn(
              "w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white min-h-[1050px] relative pointer-events-auto transition-transform duration-500",
              isVisible ? "translate-y-0" : "translate-y-10"
            )}
          >
            {/* BARRA DE PROGRESO DE CARGA */}
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

            {/* PARCHES PARA OCULTAR BRANDING NATIVO */}
            <div 
              className="absolute top-0 right-0 w-[140px] h-[100px] bg-white z-[45] pointer-events-auto"
              aria-hidden="true"
            />
            <div 
              className="absolute bottom-0 left-0 w-full h-[65px] bg-white border-t border-[#e5e7eb] z-[45] pointer-events-auto"
              aria-hidden="true"
            />
            
            {/* LÍNEA DE CABECERA PERSONALIZADA */}
            {showLine && (
              <div 
                className="absolute top-[86px] left-0 w-full h-[1px] bg-[#e5e7eb] z-[45] pointer-events-auto"
              />
            )}

            {/* PARCHE PARA OCULTAR ZONA HORARIA EN VISTA DE HORAS */}
            {isTimesView && (
              <div 
                className="absolute top-[82px] left-0 w-full h-[20px] bg-white z-[90] pointer-events-none"
                aria-hidden="true"
              />
            )}

            {/* PARCHE PARA ZONA HORARIA EN VISTA DE CALENDARIO INICIAL */}
            {isCalendarView && (
              <div 
                className="absolute top-[820px] left-0 w-full h-[20px] bg-white z-[90] pointer-events-none"
                aria-hidden="true"
              />
            )}

            {/* ESQUELETO DE CARGA PERSONALIZADO */}
            <div 
              className={cn(
                "absolute inset-0 z-[60] bg-white pointer-events-none flex flex-col transition-opacity duration-700",
                isLoaded ? "opacity-0 invisible" : "opacity-100"
              )}
            >
              <div className="flex flex-col mt-4">
                <div className="w-11 h-11 bg-gray-100/80 rounded-full mx-auto mt-4 z-50" />
                <div className="h-10" />
                <div className="px-10 space-y-8 mt-10 blur-[8px] opacity-30">
                  <div className="w-40 h-8 bg-gray-300 mx-auto mb-6 rounded-full" />
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="w-28 h-3 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENEDOR DEL WIDGET */}
            <div 
              ref={calendlyRef}
              className={cn(
                "w-full h-[1050px] bg-white transition-opacity duration-700 mx-auto",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
