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
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* LADO IZQUIERDO: QUÉ NOS DIFERENCIA (Arquitectura de marca) */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-6">
                <div className="inline-block bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Diferenciación</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  No somos una agencia convencional.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos arquitectos de tu infraestructura digital, diseñando sistemas que otros solo intentan publicitar.
                </p>
              </div>

              <div className="relative space-y-12">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent ml-[-1rem] hidden md:block" />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <span className="text-primary text-sm font-mono">01.</span>
                    Más que marketing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformamos tráfico en activos reales mediante sistemas de conversión diseñados para durar. No buscamos clics, buscamos estructuras.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <span className="text-primary text-sm font-mono">02.</span>
                    Más que tecnología
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Diseñamos la arquitectura estratégica sobre la que tu empresa escala de forma sólida y predecible. La tecnología es el medio, el sistema es el fin.
                  </p>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: NUESTRA FILOSOFÍA (Grid de pilares) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestra Filosofía</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creemos en el crecimiento ordenado y en la tecnología aplicada con un propósito claro.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                {philosophyItems.map((item, index) => (
                  <div key={index} className="group space-y-5">
                    <div className="text-primary transition-transform duration-300 group-hover:scale-110 origin-left">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'h-8 w-8' })}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <p className="text-sm font-medium text-primary/60 italic border-l-2 border-primary/20 pl-4">
                  "No implementamos herramientas por moda, sino por su utilidad estratégica."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IS IT FOR YOU? (Rediseñado creativo) */}
      <section className="py-20 md:py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            
            {/* LADO IZQUIERDO: PERFIL IDEAL */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Es para ti?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Trabajamos con empresas que buscan profesionalizar su operación y dar un salto cualitativo real.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  "Ya tienen base y quieren dar el siguiente salto.",
                  "Buscan estructura, no solo campañas.",
                  "Entienden que el crecimiento requiere sistema.",
                  "Están dispuestas a profesionalizar su operación."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-foreground/80 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LADO DERECHO: EXCLUSIVIDAD / NO ES PARA TI */}
            <div className="lg:col-span-5">
              <div className="relative p-8 md:p-12">
                {/* Decoración sutil de fondo para marcar exclusividad */}
                <div className="absolute inset-0 bg-destructive/5 rounded-3xl -rotate-1" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4 text-destructive">
                    <XCircle className="h-8 w-8" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">No es para todos</h3>
                  </div>
                  <p className="text-lg text-muted-foreground/90 leading-relaxed italic">
                    "No acompañamos a negocios que buscan soluciones rápidas sin compromiso estratégico, ni a quienes no están dispuestos a evolucionar sus procesos internos para alcanzar una eficiencia real."
                  </p>
                  <div className="pt-4">
                    <div className="h-px w-12 bg-destructive/30" />
                  </div>
                </div>
              </div>
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
