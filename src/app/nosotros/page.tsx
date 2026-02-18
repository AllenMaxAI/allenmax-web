import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Target, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

const philosophyItems = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Estructura antes que volumen",
    description: "Priorizamos la base sólida antes de intentar escalar el caos."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Sistemas antes que improvisación",
    description: "Cada proceso está documentado y automatizado para ser predecible."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Datos antes que intuición",
    description: "Tomamos decisiones basadas en métricas reales, no en suposiciones."
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Tecnología aplicada con criterio",
    description: "No implementamos herramientas por moda, sino por su utilidad estratégica."
  }
];

export default function NosotrosPage() {
  return (
    <div className="flex flex-col pb-24">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-12 leading-tight">
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
                <p className="text-muted-foreground">
                  Diseñamos sistemas donde marketing, automatización y tecnología trabajan como una única estructura orientada a resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED IDENTITY SECTION (Diferenciadores + Filosofía) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 xl:gap-20">
              
              {/* Bloque: Diferenciadores (1/3) */}
              <div className="lg:col-span-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Qué nos diferencia</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    No somos una agencia de marketing convencional ni una consultora tecnológica aislada. Somos arquitectos de tu infraestructura digital.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                    <h3 className="text-xl font-bold mb-3">No solo marketing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Transformamos tráfico en activos reales mediante sistemas de conversión diseñados para durar.
                    </p>
                  </div>
                  <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                    <h3 className="text-xl font-bold mb-3">No solo tecnología</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Diseñamos la arquitectura estratégica sobre la que tu empresa escala de forma sólida y predecible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloque: Nuestra Filosofía Grid (2/3) */}
              <div className="lg:col-span-2">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestra Filosofía</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Creemos en el crecimiento ordenado y en la tecnología aplicada con un propósito claro.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {philosophyItems.map((item, index) => (
                    <div key={index} className="bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/30 transition-all group">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'h-6 w-6 text-primary' })}
                      </div>
                      <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* IS IT FOR YOU? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">¿Es para ti?</h2>
              <p className="text-lg text-muted-foreground">Trabajamos con empresas que:</p>
              <ul className="space-y-4">
                {[
                  "Ya tienen base y quieren dar el siguiente salto.",
                  "Buscan estructura, no solo campañas.",
                  "Entienden que el crecimiento requiere sistema.",
                  "Están dispuestas a profesionalizar su operación."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 flex flex-col justify-center">
              <div className="bg-destructive/5 border border-destructive/10 p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <h3 className="text-xl font-bold">No es para todos</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  No es para negocios que buscan soluciones rápidas sin estrategia o que no están dispuestos a cambiar sus procesos internos por eficiencia real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
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
