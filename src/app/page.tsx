import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Cpu, Rocket, Scaling } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

const homePageImage = PlaceHolderImages.find(p => p.id === 'business-analysis');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="h-[70vh] min-h-[500px] flex items-center justify-center text-center px-4">
        <div className="z-10 flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transformamos empresas con soluciones de marketing digital e IA
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
                  <div className="mx-auto bg-secondary p-3 rounded-full mb-4 w-fit">{benefit.icon}</div>
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
      
      <section id="como-lo-hacemos" className="py-16 md:py-24 bg-secondary px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            {homePageImage && (
              <Image
                src={homePageImage.imageUrl}
                alt={homePageImage.description}
                fill
                className="object-cover"
                data-ai-hint={homePageImage.imageHint}
              />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revoluciona tu negocio con IA</h2>
            <p className="mt-4 text-muted-foreground text-lg">
             Implementamos estrategias inteligentes potenciadas por IA y soluciones tecnológicas avanzadas para crear un ecosistema digital que impulsa el crecimiento real y sostenible de tu empresa.
            </p>
          </div>
        </div>
      </section>

       <section id="proceso" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cómo lo Hacemos Realidad</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground">Nuestro proceso probado garantiza resultados excepcionales y una implementación sin fricciones.</p>
          </div>
          <div className="relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
             {processSteps.map((step, index) => (
                <div key={step.step} className={`relative flex items-center md:justify-center mb-12 group`}>
                    <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                         <Card className="w-full md:max-w-sm bg-card/80 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300">
                             <CardHeader>
                                 <CardTitle>{step.title}</CardTitle>
                             </CardHeader>
                             <CardContent>
                                 <p className="text-muted-foreground">{step.description}</p>
                             </CardContent>
                         </Card>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bg-secondary border-4 border-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-primary text-lg group-hover:scale-110 transition-transform">
                        {step.step}
                    </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-20 text-center bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">¿Listo para transformar tu empresa?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-100">
            Agenda una llamada estratégica gratuita y descubre el potencial real de unir la IA y el marketing para tu negocio.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-gray-200 btn-glow">
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
