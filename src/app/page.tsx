import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, CheckCircle2, BarChart, Zap } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Eficiencia estratégica',
    description: 'Procesos optimizados que aceleran la captación y la gestión comercial.',
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: 'Escalabilidad estructurada',
    description: 'Sistemas preparados para acompañar el crecimiento de tu empresa.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Ventaja competitiva',
    description: 'Tecnología aplicada con enfoque estratégico para posicionarte por delante del mercado.',
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
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
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
      
      <section id="growth" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impulsa el <span className="text-primary">crecimiento</span> de tu empresa</h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-lg">
              Diseñamos e implementamos sistemas que combinan marketing, automatización y tecnología avanzada para crear una estructura digital que genera resultados medibles y crecimiento sostenible.
            </p>
          </div>
          <div className="space-y-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-6 text-left p-6 rounded-lg border-transparent max-w-3xl mx-auto">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cómo lo Hacemos <span className="text-primary">Realidad</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {index < processSteps.length -1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border -translate-x-0"></div>
                )}
                <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground z-10 text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
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
