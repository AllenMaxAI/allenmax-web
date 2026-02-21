'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { XCircle, Rocket, GanttChartSquare, Milestone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { CtaSection } from '@/components/layout/CtaSection';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: <Rocket />,
    title: "Velocidad",
    description: "Implementamos soluciones de IA y marketing en semanas, no meses. Así ves resultados tangibles mucho antes, superando a tu competencia."
  },
  {
    icon: <GanttChartSquare />,
    title: "Estrategia",
    description: "Cada solución que creamos está alineada con tus objetivos. No solo implementamos herramientas, construimos sistemas que impulsan tu crecimiento."
  },
  {
    icon: <Milestone />,
    title: "Resultados",
    description: "Nos enfocamos en métricas que importan: aumento de ventas, reducción de costes y mejora de la eficiencia. Tu éxito es nuestro éxito."
  }
];

const processSteps = [
  {
    step: "1",
    title: "Contacto",
    description: "Agenda una llamada y cuéntanos tu proyecto."
  },
  {
    step: "2",
    title: "Propuesta",
    description: "Recibe un plan detallado con tiempos y costes."
  },
  {
    step: "3",
    title: "Desarrollo",
    description: "Creamos soluciones personalizadas de forma ágil."
  },
  {
    step: "4",
    title: "Refinamiento",
    description: "Iteración constante enfocada en resultados."
  },
  {
    step: "5",
    title: "Lidera tu sector",
    description: "Aplica IA para obtener ventaja competitiva."
  }
];

const problemPoints = [
  'Gestión correcta de oportunidades.',
  'Automatización de seguimientos.',
  'Optimización de conversiones.',
  'Escalado con control real.',
];

function FadeInSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
}

function AnimatedProcessStep({ step, index }: { step: typeof processSteps[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.5 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={domRef} className="relative">
      {/* Mobile view */}
      <div className="md:hidden">
        <div className={cn(
          "flex items-center gap-4 mb-4 transition-all duration-700",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        )}>
          <div className={cn(
            "bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 transition-transform duration-700 delay-300",
            isVisible ? "scale-100" : "scale-0"
          )}>
             <span className="text-lg font-bold">{step.step}</span>
          </div>
          <h3 className="font-bold text-xl">{step.title}</h3>
        </div>
        <p className={cn(
          "text-base text-muted-foreground leading-relaxed transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>{step.description}</p>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-16 items-center">
        {isEven ? (
          <>
            <div className={cn(
              "text-right transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}>
              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
            <div className="flex items-center gap-4">
               <div className={cn(
                 "bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 z-10 transition-all duration-700 ease-out shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                 isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
               )}>
                 <span className="text-xl font-bold">{step.step}</span>
              </div>
              <h3 className={cn(
                "font-bold text-xl transition-all duration-700 delay-500",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}>{step.title}</h3>
            </div>
          </>
        ) : (
          <>
             <div className="flex items-center gap-4 justify-end">
              <h3 className={cn(
                "font-bold text-xl transition-all duration-700 delay-500",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}>{step.title}</h3>
               <div className={cn(
                 "bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 z-10 transition-all duration-700 ease-out shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                 isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
               )}>
                 <span className="text-xl font-bold">{step.step}</span>
              </div>
            </div>
            <div className={cn(
              "text-left transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-[#030a1c] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-32 h-[80vh] min-h-[700px] flex items-center justify-center text-center px-4">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 blur-[140px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/20 blur-[140px] rounded-full animate-pulse [animation-delay:2s]" />
        </div>

        <div className="z-10 flex flex-col items-center gap-8 max-w-5xl">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              Liderando la Revolución Digital
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-[1.05]">
              <span className="block">Transformamos empresas con</span>
              <span className="block text-primary">Marketing e Inteligencia Artificial</span>
            </h1>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Combinamos marketing estratégico y tecnología avanzada para atraer más clientes, optimizar tus operaciones y escalar tu negocio sin límites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button asChild size="lg" className="btn-glow h-14 px-10 text-lg font-bold">
              <Link href="#proceso">Descubre cómo lo hacemos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg border-white/10 hover:bg-white/5">
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>
      </section>

      {/* SECCIÓN PROBLEMA */}
      <section className="px-4 py-24 bg-gradient-to-b from-transparent to-card/5">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                El problema: Invertir en marketing sin tener un <span className="text-primary">sistema</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Muchas empresas generan contactos, pero sin una estructura que los aproveche, el esfuerzo se diluye. El resultado es una pérdida constante de oportunidades y un crecimiento estancado.
              </p>
              <div className="pt-4 border-l-4 border-primary pl-8 space-y-2">
                 <p className="text-xl font-bold italic text-white/90">
                  "Sin un sistema predecible, no hay crecimiento sostenible."
                </p>
                <p className="text-sm text-muted-foreground">AllenMax, Estrategia & Evolución.</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative bg-card/40 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                <h3 className="font-bold mb-10 text-2xl text-white/90">La mayoría de estructuras fallan en:</h3>
                <ul className="space-y-8">
                  {problemPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-5">
                      <div className="bg-primary/20 p-2 rounded-lg">
                        <XCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-xl text-muted-foreground leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Impulsa el crecimiento de tu empresa
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
             Diseñamos e implementamos sistemas que combinan marketing, automatización y tecnología avanzada para crear una estructura digital de alto rendimiento.
            </p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {benefits.map((benefit, idx) => (
              <FadeInSection key={benefit.title} className={cn("flex flex-col items-center text-center gap-6 group", `delay-[${idx * 200}ms]`)}>
                <div className="flex-shrink-0 bg-primary/10 p-6 rounded-2xl text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "h-10 w-10" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* PROCESO ANIMADO */}
      <section id="proceso" className="px-4 py-32 bg-card/5">
        <div className="container mx-auto">
          <FadeInSection className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Cómo lo Hacemos Realidad
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-xl leading-relaxed">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </FadeInSection>

          <div className="relative max-w-5xl mx-auto mt-20">
            {/* Central Vertical Line with Glow */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary to-primary/50 -translate-x-1/2 hidden md:block opacity-30 blur-[1px]" />
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="relative flex flex-col gap-y-32">
              {processSteps.map((step, index) => (
                <AnimatedProcessStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
