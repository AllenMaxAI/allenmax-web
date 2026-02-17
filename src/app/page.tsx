import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Rocket, Scaling } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Velocidad',
    description: 'Resultados 3 veces más rápidos que los métodos tradicionales.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Escalabilidad',
    description: 'Soluciones que crecen con tu negocio.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Innovación',
    description: 'Tecnología de vanguardia para mantenerte por delante de la competencia.',
  },
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
      <section className="h-[70vh] min-h-[500px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transformamos Empresas con <br /> Soluciones de Inteligencia Artificial
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Combinamos marketing y tecnología con inteligencia artificial para atraer más clientes, optimizar operaciones y superar a la competencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link href="#como-lo-hacemos">Descubre cómo lo hacemos <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-card/80 backdrop-blur-sm border-white/10 text-center hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="como-lo-hacemos" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
           <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revoluciona tu negocio con IA</h2>
            <p className="mt-4 text-muted-foreground text-lg">
             Implementamos estrategias inteligentes potenciadas por IA y soluciones tecnológicas avanzadas para crear un ecosistema digital que impulsa el crecimiento real y sostenible de tu empresa.
            </p>
          </div>
        </div>
      </section>

       <section id="proceso" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cómo lo Hacemos Realidad</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2"></div>
              
              <div className="grid grid-cols-5 gap-x-4">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="relative h-48 flex items-center justify-center">
                    
                    {/* Content above the line */}
                    <div className="text-center absolute bottom-1/2 translate-y-[-1rem] w-full px-2">
                      {index % 2 !== 0 ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground z-10">
                            {step.step}
                          </div>
                          <h3 className="font-bold text-xl">{step.title}</h3>
                        </div>
                      ) : <p className="text-sm text-muted-foreground">{step.description}</p>}
                    </div>

                    {/* Dot on the line */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full z-5"></div>
                    
                    {/* Content below the line */}
                    <div className="text-center absolute top-1/2 translate-y-[1rem] w-full px-2">
                      {index % 2 === 0 ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground z-10">
                            {step.step}
                          </div>
                          <h3 className="font-bold text-xl">{step.title}</h3>
                        </div>
                      ) : <p className="text-sm text-muted-foreground">{step.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-10">
            {processSteps.map((step) => (
              <div key={step.step} className="flex items-center text-center flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground shrink-0">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-2xl">{step.title}</h3>
                </div>
                <p className="text-muted-foreground max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">¿Listo para transformar tu empresa?</h2>
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
