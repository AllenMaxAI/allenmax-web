import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Target, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const philosophyItems = [
  {
    icon: <ShieldCheck />,
    title: "Estructura antes que volumen",
    description: "Priorizamos la base sólida antes de intentar escalar el caos."
  },
  {
    icon: <Zap />,
    title: "Sistemas antes que improvisación",
    description: "Cada proceso está documentado y automatizado para ser predecible."
  },
  {
    icon: <BarChart3 />,
    title: "Datos antes que intuición",
    description: "Tomamos decisiones basadas en métricas reales, no en suposiciones."
  },
  {
    icon: <Target />,
    title: "Tecnología aplicada con criterio",
    description: "No implementamos herramientas por moda, sino por su utilidad estratégica."
  }
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
      <section className="pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-lg text-primary font-medium mb-12 leading-relaxed">
              Construimos sistemas de crecimiento para empresas que quieren evolucionar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AllenMax nace con una idea clara: 
                  <span className="block text-foreground font-semibold mt-2">El problema no es la falta de herramientas. El problema es la falta de estructura.</span>
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

      {/* SECCIÓN CREATIVA: IDENTIDAD ESTRATÉGICA */}
      <section className="py-20 md:py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Arquitectura Estratégica
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nuestra identidad se define por la estructura que construimos. No somos una agencia convencional; somos los arquitectos de tu ecosistema digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  Qué nos diferencia
                </h3>
                <p className="text-lg text-muted-foreground">
                  No solo creamos campañas, construimos sistemas. No solo implementamos tecnología, diseñamos la arquitectura sobre la que tu empresa escala.
                </p>
              </div>
              <div className="space-y-10 relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Más que Marketing</h4>
                  <p className="text-muted-foreground leading-relaxed">Transformamos tráfico en activos mediante sistemas de conversión que perduran.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Más que Tecnología</h4>
                  <p className="text-muted-foreground leading-relaxed">Diseñamos la estructura que permite un crecimiento sólido y predecible.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-primary">Nuestra Filosofía</h3>
                <p className="text-lg text-muted-foreground">
                  Son los principios que guían cada decisión que tomamos.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {philosophyItems.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-mono text-sm">0{index + 1}</span>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-8">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: ¿ENCAJAMOS? */}
      <section className="py-20 md:py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Título de la sección */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Un Salto Cualitativo: ¿Encajamos?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Trabajamos con un perfil de empresa muy concreto. Aquellas que entienden que el verdadero crecimiento es una maratón, no un sprint.
            </p>
          </div>

          {/* Grid de Contraste */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* Columna "SÍ" */}
            <div className="bg-card p-8 md:p-10 rounded-2xl border border-white/10 space-y-8">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold">La Sinergia es Perfecta si...</h3>
              </div>
              <ul className="space-y-5">
                {forYouItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-base font-medium text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Columna "NO" */}
            <div className="bg-destructive/5 p-8 md:p-10 rounded-2xl border border-destructive/20 space-y-8">
              <div className="flex items-center gap-4">
                <XCircle className="h-8 w-8 text-destructive flex-shrink-0" />
                <h3 className="text-2xl font-bold">No es el Momento si...</h3>
              </div>
              <ul className="space-y-5">
                {notForYouItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <ArrowRight className="h-5 w-5 text-destructive/80 flex-shrink-0 mt-1" />
                    <span className="text-base font-medium text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pt-20 md:pt-32 pb-24 md:pb-32 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Si tu empresa está lista para evolucionar hacia un modelo más estructurado...
            </h2>
            <p className="text-xl text-muted-foreground">
              Podemos ayudarte a construirlo. El siguiente paso es una conversación estratégica.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" className="btn-glow h-14 px-10 text-lg">
                <Link href="/contacto" className="flex items-center gap-2">
                  Agendar llamada estratégica <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
