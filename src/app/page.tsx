import { Button } from '@/components/ui/button';
import { CheckCircle2, TrendingUp, Zap, XCircle, Rocket, Target, Scaling, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: <Zap />,
    title: "Eficiencia y Velocidad",
    description: "Implementamos procesos optimizados en tiempo récord para que veas resultados cuanto antes."
  },
  {
    icon: <TrendingUp />,
    title: "Crecimiento Sostenible",
    description: "Creamos sistemas escalables que se adaptan y crecen junto a tu empresa, sin fricciones."
  },
  {
    icon: <Target />,
    title: "Precisión Estratégica",
    description: "Aplicamos un enfoque data-driven para asegurar que cada acción esté alineada con tus objetivos."
  }
];

const systemChanges = [
  'Mayor volumen de oportunidades cualificadas',
  'Procesos comerciales más eficientes',
  'Mejor organización interna',
  'Mayor previsibilidad en ingresos',
  'Crecimiento estructurado',
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
  'Los gestione correctamente.',
  'Automatice seguimientos.',
  'Optimice conversiones.',
  'Permita escalar con control.',
];

export default function Home() {
  
  return (
    <div className="flex flex-col">
       <section className="h-[60vh] min-h-[600px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-6">
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
            <span className="block">Transformamos <span className="text-primary">Empresas</span> con</span>
            <span className="block">Soluciones de <span className="text-primary">Inteligencia Artificial</span></span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Combinamos marketing y tecnología con inteligencia artificial para atraer más clientes, optimizar operaciones y superar a la competencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link href="#proceso">Descubre cómo lo hacemos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                El problema: Invertir en marketing sin tener un <span className="text-primary">sistema</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Muchas empresas generan contactos, pero sin una estructura que los aproveche, el esfuerzo se diluye. El resultado es una pérdida de oportunidades y un crecimiento estancado.
              </p>
               <p className="mt-6 text-xl font-semibold">
                Sin un sistema, <span className="text-primary">no hay crecimiento sostenible.</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg text-center md:text-left">La mayoría de estructuras no:</h3>
              <ul className="space-y-4">
                {problemPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Impulsa el <span className="text-primary">crecimiento</span> de tu empresa
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
             Diseñamos e implementamos sistemas que combinan marketing, automatización y tecnología avanzada para crear una estructura digital que genera resultados medibles y crecimiento sostenible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-start text-left p-6 rounded-lg bg-card border">
                 <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full text-primary mb-4">
                  {React.cloneElement(benefit.icon, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que <span className="text-primary">cambia</span> cuando implementamos el sistema</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto text-left mt-12">
              {systemChanges.map((change, index) => (
                  <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-muted-foreground">{change}</p>
                  </div>
              ))}
          </div>
        </div>
      </section>
      
       <section id="proceso" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Cómo lo Hacemos <span className="text-primary">Realidad</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-12">
            {/* The vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" />

            <div className="relative flex flex-col items-start md:items-stretch gap-y-24">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex w-full items-center",
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  )}
                >
                   {/* Mobile Circle - always on left */}
                  <div className="absolute top-0 left-8 -translate-x-1/2 z-10 md:hidden">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-2xl flex-shrink-0">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Desktop Circle - on the center line */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-2xl flex-shrink-0">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content Box */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-4rem)] pl-24 md:pl-0",
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    <h3 className="font-bold text-3xl mb-2">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">¿Listo para <span className="text-primary">transformar</span> tu empresa?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Agenda una llamada estratégica gratuita y descubre el potencial real de unir la IA y el marketing para tu negocio.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 btn-glow">
            <Link href="/contacto">
              Agendar Reunión
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
