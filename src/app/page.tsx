import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target, Lightbulb, XCircle } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Agilidad',
    description: 'Implementamos con rapidez para que veas resultados en semanas, no meses.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Datos',
    description: 'Cada decisión se basa en datos para maximizar tu retorno de inversión.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Crecimiento',
    description: 'No solo atraemos clientes, construimos un sistema para un crecimiento predecible.',
  },
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
       <section className="h-[60vh] min-h-[500px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-6">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Transformamos <span className="text-primary">Empresas</span> con <br/> Soluciones de <span className="text-primary">Inteligencia Artificial</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Combinamos marketing y tecnología con inteligencia artificial para atraer más clientes, optimizar operaciones y superar a la competencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link href="#proceso">Descubre cómo lo hacemos <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-lg grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
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
            <div className="md:col-span-2 bg-background/50 p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-4 text-lg">La mayoría de estructuras no:</h3>
              <ul className="space-y-4">
                {problemPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">El <span className="text-primary">potencial</span> de unir Marketing e IA</h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-lg">
              No se trata de usar IA, se trata de integrarla en una estrategia de marketing sólida para crear un sistema de crecimiento predecible y escalable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-start text-left gap-4 p-8 border border-border/20 rounded-lg bg-card/50">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                </div>
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
          
          <div className="max-w-4xl mx-auto space-y-12">
              {processSteps.map((step, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                      <div className="md:col-span-2 text-center md:text-left">
                        <p className="text-muted-foreground text-lg">{step.description}</p>
                      </div>
                      <div className="flex items-center gap-4 justify-center md:justify-end flex-shrink-0">
                           <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-2xl flex-shrink-0">
                              {step.step}
                          </div>
                          <h3 className="font-bold text-2xl">{step.title}</h3>
                      </div>
                  </div>
              ))}
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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
