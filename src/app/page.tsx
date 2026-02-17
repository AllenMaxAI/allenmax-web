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
    description: 'Resultados hasta 3 veces más rápidos que con métodos tradicionales, permitiéndote ver el impacto en tiempo récord.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Escalabilidad',
    description: 'Soluciones diseñadas para crecer contigo, perfectas para pymes, clínicas y negocios en expansión.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Innovación',
    description: 'Aplicamos tecnología de vanguardia para que siempre estés un paso por delante de tu competencia.',
  },
];

const processSteps = [
  {
    step: "1",
    title: "Contacto Inicial",
    description: "Agenda una llamada. Queremos escuchar sobre tu proyecto, tus metas y tus desafíos actuales."
  },
  {
    step: "2",
    title: "Propuesta Estratégica",
    description: "Recibirás un plan de acción detallado, con tiempos, costes y resultados esperados. Sin sorpresas."
  },
  {
    step: "3",
    title: "Desarrollo Ágil",
    description: "Creamos y personalizamos tu solución de forma rápida, manteniéndote informado en cada paso."
  },
  {
    step: "4",
    title: "Refinamiento y Optimización",
    description: "Iteramos constantemente sobre la solución, usando datos reales para maximizar los resultados."
  },
  {
    step: "5",
    title: "Lidera tu Sector",
    description: "Con la nueva ventaja competitiva, estarás listo para dominar tu mercado."
  }
];

const homePageImage = PlaceHolderImages.find(p => p.id === 'business-analysis');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="z-10 flex flex-col items-center gap-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Potenciamos tu Negocio con IA y Marketing Digital
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Combinamos estrategias de marketing probadas y tecnología de inteligencia artificial para atraer más clientes, optimizar tus operaciones y superar a la competencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link href="/contacto">Descubre Cómo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Crecimiento Inteligente para tu Empresa</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Nuestra fusión de IA y marketing está diseñada para darte una ventaja competitiva real.
            </p>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Revoluciona tu Negocio con Estrategias Inteligentes</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Implementamos un ecosistema digital que une lo mejor del marketing y la IA. Creamos soluciones avanzadas para impulsar un crecimiento real y sostenible, pensado para empresas como la tuya.
            </p>
            <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span>Atrae clientes cualificados de forma automática.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span>Optimiza tus operaciones y reduce costes operativos.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span>Ofrece una experiencia de cliente excepcional y personalizada.</span>
                </li>
            </ul>
          </div>
        </div>
      </section>

       <section id="proceso" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">De la Idea al Liderazgo en 5 Pasos</h2>
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
