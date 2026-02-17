import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, CalendarClock, PhoneCall, PlugZap, SearchCode, Workflow } from 'lucide-react';
import Link from 'next/link';

const aiServices = [
  {
    icon: <Bot />,
    title: "Desarrollo de Chatbots Personalizados",
    description: "Creamos chatbots inteligentes que entienden y responden a tus clientes 24/7, mejorando la satisfacción y liberando a tu equipo."
  },
  {
    icon: <Workflow />,
    title: "Asistentes Virtuales para Atención al Cliente",
    description: "Asistentes avanzados que gestionan consultas complejas, realizan seguimiento de pedidos y personalizan la experiencia del usuario."
  },
  {
    icon: <SearchCode />,
    title: "Automatización de Procesos Internos",
    description: "Optimizamos flujos de trabajo, desde la gestión de RRHH hasta la contabilidad, reduciendo errores y aumentando la productividad."
  },
  {
    icon: <PlugZap />,
    title: "Integración con CRM",
    description: "Conectamos la IA con tu CRM para centralizar datos, automatizar la entrada de leads y obtener una visión 360º de tus clientes."
  },
  {
    icon: <CalendarClock />,
    title: "Automatización de Citas, Recordatorios y Cobros",
    description: "Un sistema que gestiona tu agenda, envía recordatorios automáticos y procesa pagos, minimizando las ausencias y mejorando el flujo de caja."
  },
  {
    icon: <PhoneCall />,
    title: "Automatización de Llamadas con IA",
    description: "Agentes de voz con IA para realizar y recibir llamadas, calificar leads, realizar encuestas y mucho más, de forma masiva y eficiente."
  },
  {
    icon: <ArrowRight />,
    title: "Sistemas Inteligentes de Captación",
    description: "Implementamos sistemas que analizan datos para identificar los leads más prometedores y los nutren de forma automática hasta la venta."
  }
];

export default function AIServicesPage() {
  return (
    <>
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Servicios de Inteligencia Artificial</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Automatización, eficiencia y datos para una ventaja competitiva decisiva.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map(service => (
              <Card key={service.title} className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-final" className="py-20 text-center bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Potencia tu Empresa con IA</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-100">
            Descubre cómo nuestras soluciones de IA pueden transformar tus operaciones y resultados. Agenda una consultoría gratuita.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-gray-200 btn-glow">
            <Link href="/contacto">
              Agendar Consultoría de IA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
