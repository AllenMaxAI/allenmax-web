import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shuffle, Rocket, CheckCircle2, BrainCircuit, BarChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const benefits = [
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Velocidad',
    description: 'Resultados 3 veces más rápidos que los métodos tradicionales.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: 'Escalabilidad',
    description: 'Soluciones que crecen con tu negocio.',
  },
  {
    icon: <Shuffle className="h-6 w-6 text-primary" />,
    title: 'Innovación',
    description: 'Tecnología de vanguardia para mantenerte por delante de la competencia.',
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
      <section className="h-[60vh] min-h-[450px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-6">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Transformamos Empresas con <br/> Soluciones de <span className="text-primary">Inteligencia Artificial</span>
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
      
      <section id="growth" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revoluciona tu negocio con <span className="text-primary">IA</span></h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-lg">
              Implementamos estrategias inteligentes potenciadas por IA y soluciones tecnológicas avanzadas para crear un ecosistema digital que impulsa el crecimiento real y sostenible de tu empresa.
            </p>
          </div>
          <div className="space-y-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-6 text-left p-6 rounded-lg border border-border bg-card/50 max-w-3xl mx-auto">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Crea tu propio asistente con <span className="text-primary">IA</span></h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Genera tu propio agente de IA entrenado para tu empresa. Automatiza cualquier proceso que se te ocurra y haz que la IA trabaje para ti.
                    </p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-center gap-3">
                            <BrainCircuit className="h-5 w-5 text-primary" />
                            <span>Atención al cliente 24/7</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <BarChart className="h-5 w-5 text-primary" />
                            <span>Cualificación de leads</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Rocket className="h-5 w-5 text-primary" />
                            <span>Y mucho más...</span>
                        </li>
                    </ul>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src="https://picsum.photos/seed/ai-assistant/800/450"
                        alt="Asistente de IA"
                        fill
                        className="object-cover"
                        data-ai-hint="AI assistant interface"
                    />
                </div>
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

      <section id="proceso" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cómo lo Hacemos <span className="text-primary">Realidad</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </div>
          <div className="relative">
             <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-border"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-8 text-center">
              {processSteps.map((step) => (
                <div key={step.step} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground z-10 text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
