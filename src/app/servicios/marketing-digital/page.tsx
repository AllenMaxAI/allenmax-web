import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LayoutTemplate, Share2, Megaphone, Search, Mail, CheckCircle2 } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: <LayoutTemplate />,
    title: "Diseño Web UX/UI",
    description: "Desarrollamos sitios web optimizados para convertir.",
    points: [
      "Diseño estratégico centrado en el usuario",
      "Arquitectura orientada a conversión",
      "Experiencia fluida y profesional",
      "Integración con herramientas de captación y automatización"
    ],
    keyStatement: "Tu web no es una tarjeta de presentación. Es el núcleo de tu sistema digital."
  },
  {
    icon: <Share2 />,
    title: "Gestión de Redes Sociales",
    description: "Creamos una presencia coherente, estratégica y alineada con tus objetivos comerciales.",
    points: [
      "Estrategia de contenido",
      "Posicionamiento de marca",
      "Optimización de perfil",
      "Calendario editorial estructurado"
    ],
    keyStatement: "No se trata de publicar más. Se trata de comunicar mejor."
  },
  {
    icon: <Megaphone />,
    title: "Facebook Ads & Google Ads",
    description: "Diseñamos campañas enfocadas en captación cualificada y rentabilidad.",
    points: [
      "Segmentación estratégica",
      "Creatividades orientadas a conversión",
      "Optimización continua basada en datos",
      "Escalado estructurado"
    ],
    keyStatement: "Cada campaña forma parte de un sistema, no de una acción aislada."
  },
  {
    icon: <Search />,
    title: "SEO & SEM",
    description: "Aumentamos tu visibilidad en buscadores con enfoque estratégico.",
    points: [
      "Optimización técnica y estructural",
      "Estrategia de palabras clave",
      "Contenido orientado a posicionamiento",
      "Análisis y mejora continua"
    ],
    keyStatement: "No buscamos tráfico vacío. Buscamos oportunidades reales."
  },
  {
    icon: <Mail />,
    title: "Email Marketing",
    description: "Convertimos tu base de datos en un activo estratégico.",
    points: [
      "Secuencias automatizadas",
      "Nutrición de leads",
      "Campañas comerciales estructuradas",
      "Recuperación de oportunidades"
    ],
    keyStatement: "El email no es solo comunicación. Es conversión y fidelización."
  }
];

export default function MarketingDigitalPage() {
  return (
    <>
      <section className="py-20 md:py-28 text-center bg-grid-pattern">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Marketing Digital & Automatización Inteligente</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Diseñamos ecosistemas digitales donde estrategia, captación y tecnología trabajan de forma integrada para generar crecimiento real.
          </p>
          <div className="mt-8">
            <p className="text-lg font-semibold text-primary">No implementamos acciones aisladas. Construimos sistemas orientados a resultados.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-primary font-bold">🔹 MARKETING DIGITAL ESTRATÉGICO</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Impulsamos tu presencia digital
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Creamos una estructura diseñada para atraer, convertir y fidelizar de forma sostenible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col h-full bg-card/80 backdrop-blur-sm border-white/10 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-xl text-primary">
                      {React.cloneElement(service.icon, { className: 'h-7 w-7' })}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-1">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-center font-semibold text-foreground italic">"{service.keyStatement}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}