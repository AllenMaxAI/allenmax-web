import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Eficiencia estratégica',
    description: 'Procesos optimizados que aceleran la captación y la gestión comercial.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: 'Escalabilidad estructurada',
    description: 'Sistemas preparados para acompañar el crecimiento de tu empresa.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Ventaja competitiva',
    description: 'Tecnología aplicada con enfoque estratégico para posicionarte por delante del mercado.',
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
  const growthImage = PlaceHolderImages.find(p => p.id === 'business-analysis');
  
  return (
    <div className="flex flex-col">
      <section className="h-[60vh] min-h-[450px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-6">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Transformamos Empresas con <br/> Soluciones de Inteligencia Artificial
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impulsa el crecimiento de tu empresa</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Diseñamos e implementamos sistemas que combinan marketing, automatización y tecnología avanzada para crear una estructura digital que genera resultados medibles y crecimiento sostenible.
              </p>
              <div className="space-y-8 mt-10">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
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
            <div className="hidden md:block">
              {growthImage && (
                <Image
                  src={growthImage.imageUrl}
                  alt={growthImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover w-full h-full"
                  data-ai-hint={growthImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section id="proceso" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cómo lo Hacemos Realidad</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-4">
              {processSteps.map((step) => (
                <div key={step.step} className="relative flex flex-col items-center gap-3 text-center p-4">
                  <div className="w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground z-10 text-xl">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
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
