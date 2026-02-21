import { Button } from '@/components/ui/button';
import { XCircle, Rocket, GanttChartSquare, Milestone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { CtaSection } from '@/components/layout/CtaSection';

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

export default function Home() {
  
  return (
    <div className="flex flex-col bg-[#020617] bg-[radial-gradient(ellipse_at_50%_50%,_rgba(37,99,235,0.18),_transparent_65%)] bg-fixed">
       <section className="pt-24 md:pt-32 h-[60vh] min-h-[600px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-6">
           <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter max-w-4xl leading-[1.1]">
            <span className="block">Transformamos empresas con</span>
            <span className="block text-primary">Marketing e Inteligencia Artificial</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Combinamos marketing y tecnología con inteligencia artificial para atraer más clientes, optimizar operaciones y superar a la competencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link href="#proceso">Descubre cómo lo hacemos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROBLEMA */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                El problema: Invertir en marketing sin tener un <span className="text-primary">sistema</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Muchas empresas generan contactos, pero sin una estructura que los aproveche, el esfuerzo se diluye. El resultado es una pérdida de oportunidades y un crecimiento estancado.
              </p>
              <div className="pt-4 border-l-2 border-primary pl-6">
                 <p className="text-lg font-semibold italic">
                  Sin un sistema, no hay crecimiento sostenible.
                </p>
              </div>
            </div>
            
            <div className="bg-card/20 p-8 md:p-10 rounded-2xl border border-white/5 shadow-sm">
              <h3 className="font-bold mb-8 text-xl">La mayoría de estructuras no logran:</h3>
              <ul className="space-y-6">
                {problemPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <XCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-muted-foreground leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Impulsa el crecimiento de tu empresa
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
             Diseñamos e implementamos sistemas que combinan marketing, automatización y tecnología avanzada para crear una estructura digital que genera resultados medibles y crecimiento sostenible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center gap-4">
                 <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full text-primary">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "h-8 w-8" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       <section id="proceso" className="pt-20 md:pt-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Cómo lo Hacemos Realidad
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg leading-relaxed">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-12">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="relative flex flex-col gap-y-16">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative">
                    <div className="md:hidden">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                           <span className="text-lg font-bold">{step.step}</span>
                        </div>
                        <h3 className="font-bold text-xl">{step.title}</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 md:gap-x-16 items-center">
                      {isEven ? (
                        <>
                          <div className="text-right">
                            <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                          <div className="flex items-center gap-4">
                             <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                               <span className="text-xl font-bold">{step.step}</span>
                            </div>
                            <h3 className="font-bold text-xl">{step.title}</h3>
                          </div>
                        </>
                      ) : (
                        <>
                           <div className="flex items-center gap-4 justify-end">
                            <h3 className="font-bold text-xl">{step.title}</h3>
                             <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                               <span className="text-xl font-bold">{step.step}</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
