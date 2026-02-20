
'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { CtaSection } from '@/components/layout/CtaSection';

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

export default function ServiciosPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="space-y-4 mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Nuestros Servicios</span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1]">
                La Sinergia <span className="text-primary">Perfecta.</span>
              </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                  Marketing Digital e <br className="hidden md:block" /> Inteligencia Artificial
                </h2>
                <div className="h-2 w-20 bg-primary rounded-full" />
              </div>
              {/* Bloque de texto eliminado */}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS DE SERVICIOS */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {serviceCategories.map((category) => (
              <Card key={category.title} className="text-center flex flex-col justify-between p-10 border border-white/5 bg-card/40 backdrop-blur-sm shadow-2xl hover:bg-card/60 transition-all duration-300 group">
                  <div>
                    <div className="flex justify-center mb-8 bg-primary/10 w-20 h-20 rounded-2xl items-center mx-auto text-primary transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>
                  <div className="mt-10">
                    <Button asChild className="w-full btn-glow h-14 text-lg font-bold">
                        <Link href={category.href}>Saber más</Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
