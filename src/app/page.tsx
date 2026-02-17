import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Rocket, Zap, Briefcase } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Velocidad',
    description: 'Implementación ágil para resultados rápidos y eficientes.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Escalabilidad',
    description: 'Soluciones que crecen y se adaptan a tu negocio.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Innovación',
    description: 'Tecnología de vanguardia para darte una ventaja competitiva.',
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
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revoluciona tu negocio con <span className="text-primary">IA</span></h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-lg">
              Implementamos estrategias inteligentes potenciadas por IA y soluciones tecnológicas avanzadas para crear un ecosistema digital que impulsa el crecimiento real y sostenible de tu empresa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center gap-4 p-8 border border-border/20 rounded-lg bg-card/50">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
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

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
                Lo que <span className="text-primary">cambia</span> cuando implementamos el sistema
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto text-left">
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
          
          <div className="max-w-3xl mx-auto space-y-12">
              {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <p className="text-muted-foreground text-lg text-center md:text-left">{step.description}</p>
                      <div className="flex items-center gap-4 flex-shrink-0">
                           <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-xl flex-shrink-0">
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
