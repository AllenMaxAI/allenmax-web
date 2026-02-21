'use client';

import { LayoutTemplate, Share2, Megaphone, Search, Mail, Target } from 'lucide-react';
import React from 'react';
import { ServicesSection } from '@/components/services/ServicesSection';
import { CtaSection } from '@/components/layout/CtaSection';

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
    <div className="flex flex-col">
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Marketing Digital</h1>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Diseñamos ecosistemas digitales donde estrategia, captación y tecnología trabajan de forma integrada para generar crecimiento real.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4 border-l-2 border-primary pl-8">
              <h2 className="text-2xl font-bold tracking-tight">
                No implementamos acciones aisladas. <span className="text-primary">Construimos sistemas.</span>
              </h2>
              <p className="text-muted-foreground">
                Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection services={services} />
      <CtaSection />
    </div>
  );
}
