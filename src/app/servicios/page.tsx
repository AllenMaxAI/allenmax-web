'use client';

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CtaSection } from '@/components/layout/CtaSection';
import { cn } from '@/lib/utils';
import React from 'react';

// Importación de la imagen local
import serviciosImg from '@/img/servicios.png';

const serviceCategories = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Marketing Digital',
    description: 'Estrategias probadas para construir tu presencia online, atraer a tu audiencia y convertir visitantes en clientes.',
    href: '/servicios/marketing-digital',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Inteligencia Artificial',
    description: 'Soluciones de IA a medida para automatizar procesos, potenciar la toma de decisiones y desbloquear un rendimiento superior.',
    href: '/servicios/ia',
  },
];

function FadeInSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function ServiciosPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="space-y-12">
              <div className={cn(
                "space-y-2 transition-all duration-1000 ease-out",
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Nuestros Servicios</span>
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1]">
                    La Sinergia <br />
                    <span className="text-primary">Perfecta.</span>
                  </h1>
                  <div className="h-1.5 w-20 bg-primary rounded-full" />
                </div>
              </div>
              
              <p className={cn(
                "text-xl md:text-2xl text-primary font-medium leading-relaxed transition-all duration-1000 delay-300 ease-out",
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Estructuramos tu crecimiento con sistemas que combinan marketing y tecnología.
              </p>

              <div className={cn(
                "grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 delay-500 ease-out",
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No ofrecemos servicios aislados. 
                    <span className="block text-foreground font-semibold mt-2">Diseñamos soluciones que se integran en el ADN de tu negocio.</span>
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-8 py-2">
                  <p className="text-xl font-bold mb-4">Sinergia Estratégica.</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Conectamos cada pieza para que la captación y conversión funcionen de forma coordinada.
                  </p>
                </div>
              </div>
            </div>

            {/* Contenedor de la imagen nueva */}
            <div className={cn(
              "relative hidden lg:flex justify-center transition-all duration-1000 delay-700 ease-out items-start",
              isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <div className="relative w-full max-w-[450px] aspect-square">
                <Image 
                  src={serviciosImg}
                  alt="Servicios AllenMax"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS DE SERVICIOS */}
      <section className="pt-24 md:pt-32 pb-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {serviceCategories.map((category, index) => (
              <FadeInSection key={category.title} delay={index * 200}>
                <Card className="text-center flex flex-col justify-between p-10 border border-white/5 bg-card/40 backdrop-blur-sm shadow-none hover:bg-card/60 transition-all duration-300 group h-full">
                    <div>
                      <div className="flex justify-center mb-8 bg-primary/10 w-20 h-20 rounded-2xl items-center mx-auto text-primary transition-transform duration-300 group-hover:scale-110">
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">{category.description}</p>
                    </div>
                    <div className="mt-10">
                      <Button asChild className="w-full h-14 text-lg font-bold">
                          <Link href={category.href}>Saber más</Link>
                      </Button>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
