import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutTemplate, Share2, Megaphone, Search, Mail, CheckCircle2, Target } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const services = [
    {
      icon: <Target />,
      title: "Marketing Digital Estratégico",
      description: "Impulsamos tu presencia digital con un enfoque integral: no solo creamos campañas, sino que diseñamos un sistema que atrae a clientes potenciales, los convierte y fideliza. Analizamos tu mercado, tu público y tus objetivos para que cada acción tenga un propósito y genere resultados medibles.",
      points: [
        "Estrategia completa de marketing digital adaptada a tu negocio",
        "Análisis de mercado y competencia",
        "Definición de embudos de conversión",
        "Medición de resultados y optimización continua"
      ],
    },
    {
      icon: <LayoutTemplate />,
      title: "Diseño Web UX/UI",
      description: "Tu página web no es solo estética: es el motor de tu estrategia digital. Creamos sitios web centrados en el usuario y optimizados para la conversión, con una experiencia fluida y profesional que transmite confianza y posiciona tu marca.",
      points: [
        "Diseño estratégico centrado en la experiencia del usuario",
        "Arquitectura orientada a conversión",
        "Experiencia fluida y profesional",
        "Integración con herramientas de captación y automatización"
      ],
    },
    {
      icon: <Share2 />,
      title: "Gestión de Redes Sociales",
      description: "No se trata de publicar por publicar. Creamos una presencia coherente y estratégica, alineada con tus objetivos, para que cada publicación tenga un propósito y fortalezca tu marca. Analizamos tu audiencia y optimizamos el contenido para maximizar alcance y engagement.",
      points: [
        "Estrategia de contenido y planificación editorial",
        "Posicionamiento de marca y coherencia visual",
        "Optimización de perfiles",
        "Calendario editorial estructurado"
      ],
    },
    {
      icon: <Megaphone />,
      title: "Facebook Ads & Google Ads",
      description: "Diseñamos campañas enfocadas en atraer clientes cualificados y maximizar la rentabilidad. Analizamos a tu público objetivo, segmentamos estratégicamente y optimizamos creatividades y mensajes para que cada inversión genere resultados tangibles.",
      points: [
        "Segmentación estratégica de audiencia",
        "Creatividades orientadas a conversión",
        "Optimización continua basada en datos",
        "Escalado de campañas de forma estructurada"
      ],
    },
    {
      icon: <Search />,
      title: "SEO & SEM",
      description: "Aumentamos tu visibilidad en buscadores mediante un enfoque estratégico que combina optimización técnica y contenido relevante. Cada acción está diseñada para atraer tráfico de calidad y generar oportunidades reales de negocio.",
      points: [
        "Optimización técnica y estructural de tu web",
        "Estrategia de palabras clave",
        "Contenido orientado a posicionamiento",
        "Análisis y mejora continua"
      ],
    },
    {
      icon: <Mail />,
      title: "Email Marketing",
      description: "Convertimos tu base de datos en un activo estratégico, con campañas automatizadas que nutren leads, recuperan oportunidades y fidelizan clientes. Todo diseñado para generar resultados concretos, no solo enviar correos.",
      points: [
        "Secuencias automatizadas",
        "Nutrición de leads",
        "Campañas comerciales estructuradas",
        "Recuperación de oportunidades"
      ],
    }
];

export default function MarketingDigitalPage() {
  return (
    <>
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Marketing Digital</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Diseñamos ecosistemas digitales donde estrategia, captación y tecnología trabajan de forma integrada para generar crecimiento real.
          </p>
           <p className="max-w-3xl mx-auto mt-6 text-xl font-semibold text-primary tracking-tight">
            No implementamos acciones aisladas. Construimos sistemas orientados a resultados.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-sm font-bold uppercase tracking-wider text-primary">Servicios Estratégicos</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Un Sistema Completo para tu Crecimiento
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className={cn("space-y-4", index % 2 !== 0 && "md:order-2")}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl text-primary">
                      {React.cloneElement(service.icon, { className: 'h-6 w-6' })}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={cn(index % 2 !== 0 && "md:order-1")}>
                  <h4 className="font-semibold text-foreground mb-4">Incluye:</h4>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
