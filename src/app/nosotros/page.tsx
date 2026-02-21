'use client';

import { CheckCircle2, XCircle, ShieldCheck, Zap, BarChart3, Target } from 'lucide-react';
import React from 'react';
import { CtaSection } from '@/components/layout/CtaSection';

const philosophyItems = [
  {
    icon: <ShieldCheck />,
    title: 'Estructura antes que volumen',
    description: 'Priorizamos la base sólida antes de intentar escalar el caos.',
  },
  {
    icon: <Zap />,
    title: 'Sistemas antes que improvisación',
    description: 'Cada proceso está documentado y automatizado para ser predecible.',
  },
  {
    icon: <BarChart3 />,
    title: 'Datos antes que intuición',
    description: 'Tomamos decisiones basadas en métricas reales, no en suposiciones.',
  },
  {
    icon: <Target />,
    title: 'Tecnología con criterio',
    description: 'No implementamos herramientas por moda, sino por su utilidad estratégica.',
  },
];

const forYouItems = [
  "Busca dar un salto cualitativo y profesionalizar su operación.",
  "Quiere construir sistemas de crecimiento, no solo campañas aisladas.",
  "Necesita invertir en una arquitectura digital sólida y escalable.",
  "Valora la estrategia y los datos por encima de la improvisación.",
];

const notForYouItems = [
  "Busca atajos o 'hacks' de crecimiento rápido sin una base sólida.",
  "No está dispuesta a alinear su operación con la nueva estrategia.",
  "Prioriza el volumen de leads sobre la calidad y la conversión real.",
  "Considera la tecnología y el marketing como un gasto, no una inversión.",
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-2 mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Nuestra Identidad</span>
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1]">
                  Arquitectos de <br />
                  <span className="text-primary">Evolución.</span>
                </h1>
                <div className="h-1.5 w-20 bg-primary rounded-full" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-primary font-medium mb-16 leading-relaxed">
              Construimos sistemas de crecimiento para empresas que quieren evolucionar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AllenMax nace con una idea clara: 
                  <span className="block text-foreground font-semibold mt-2">El problema no es la falta de herramientas. Es la falta de estructura.</span>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Muchas empresas invierten en marketing o implementan tecnología sin una estrategia integrada. El resultado es dispersión y crecimiento inestable.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8 py-2">
                <p className="text-xl font-bold mb-4">Nosotros hacemos lo contrario.</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Diseñamos sistemas donde marketing, automatización y tecnología trabajan como una única estructura orientada a resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA ESTRATÉGICA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Arquitectura Estratégica
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra identidad se define por la estructura que construimos. No somos una agencia convencional, somos los arquitectos de tu ecosistema digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-20 items-start">
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-primary tracking-tight">
                Qué nos diferencia
              </h3>
              <div className="space-y-12">
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-foreground">No somos solo una agencia de marketing</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Transformamos tráfico en activos reales mediante sistemas de conversión diseñados para durar.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-foreground">No somos solo una empresa tecnológica</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Diseñamos la arquitectura estratégica sobre la que tu empresa escala de forma sólida y predecible.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-bold tracking-tight">
                Nuestra Filosofía
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                {philosophyItems.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="text-primary h-5 w-5 flex-shrink-0">
                        {item.icon}
                       </div>
                      <h4 className="font-bold text-base leading-tight">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALINEACIÓN */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              ¿Conectamos?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La sinergia es clave. Para que funcione, la alineación debe ser total.
            </p>
          </div>

          <div className="space-y-16">
            <h3 className="text-center text-2xl font-bold text-primary">La colaboración es ideal si tu empresa:</h3>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {forYouItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative text-center my-28">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Y por el contrario
              </span>
            </div>
          </div>

          <div className="space-y-16">
            <h3 className="text-center text-2xl font-bold text-[#c20000]">Quizás no sea el momento si:</h3>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              {notForYouItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <XCircle className="h-6 w-6 text-[#c20000] flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-muted-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
