import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Cpu, Rocket, Scaling, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Automatización con IA',
    description: 'Optimizamos tus procesos internos y externos para una eficiencia sin precedentes.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Chatbots y Asistentes Virtuales',
    description: 'Mejora la atención al cliente 24/7 con asistentes inteligentes y personalizados.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Estrategias de Marketing Digital',
    description: 'Diseñamos planes de marketing a medida para alcanzar tus objetivos de negocio.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Sistemas de Captación y Conversión',
    description: 'Construimos embudos de venta que convierten visitantes en clientes leales.',
  },
];

const benefits = [
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Aumento de Ventas',
    description: 'Sistemas inteligentes que identifican y nutren oportunidades de venta, maximizando tu facturación.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Reducción de Costes',
    description: 'La automatización de tareas repetitivas libera a tu equipo y reduce gastos operativos.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Automatización de Procesos',
    description: 'Desde la atención al cliente hasta la gestión interna, opera de forma más ágil y sin errores.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Escalabilidad del Negocio',
    description: 'Infraestructura tecnológica que crece contigo, permitiéndote expandir sin límites.',
  },
];

const pillars = [
  { title: 'Innovación', description: 'Aplicamos la última tecnología en IA para darte una ventaja competitiva.' },
  { title: 'Estrategia', description: 'Cada solución se basa en un análisis profundo de tu negocio y tus metas.' },
  { title: 'Resultados', description: 'Nos enfocamos en métricas claras que demuestran el retorno de tu inversión.' },
  { title: 'Implementación', description: 'Integramos nuestras soluciones de forma rápida y eficiente en tus sistemas.' },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="z-10 flex flex-col items-center gap-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Transforma tu Empresa con IA y Marketing Inteligente
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Llevamos tu negocio al siguiente nivel con soluciones de automatización y estrategias digitales que generan resultados medibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link href="/contacto">Agendar Llamada</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="que-hacemos" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Qué Hacemos</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground">Soluciones integrales para la nueva era digital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card/80 backdrop-blur-sm border-white/10 text-center hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-3 rounded-full mb-4 w-fit">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-16 md:py-24 bg-secondary px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beneficios Directos Para Tu Negocio</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground">Impacto real donde más importa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
               <div key={benefit.title} className="flex items-start gap-6">
                <div className="bg-background p-3 rounded-full">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section id="porque-elegirnos" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Por Qué Elegir Synapse Growth</h2>
            <p className="max-w-xl mx-auto mt-4 text-muted-foreground">Nuestros pilares para tu éxito.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-20 text-center bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">¿Listo para transformar tu empresa?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-100">
            Agenda una llamada estratégica gratuita y descubre el potencial de la IA y el marketing inteligente para tu negocio.
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
