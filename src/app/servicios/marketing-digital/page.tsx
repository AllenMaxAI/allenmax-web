import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, Filter, LineChart, Megaphone, MousePointerClick, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const marketingServices = [
  {
    icon: <BarChart3 />,
    title: "Estrategias de Marketing Digital",
    description: "Diseñamos un plan de acción integral y a medida, alineado con tus objetivos de negocio para maximizar el retorno de la inversión."
  },
  {
    icon: <Megaphone />,
    title: "Generación de Leads",
    description: "Atraemos a tu público objetivo a través de múltiples canales y los convertimos en clientes potenciales cualificados para tu equipo de ventas."
  },
  {
    icon: <Filter />,
    title: "Embudos de Conversión",
    description: "Construimos y optimizamos 'funnels' de venta que guían al usuario desde el primer contacto hasta la compra, de forma automatizada."
  },
  {
    icon: <MousePointerClick />,
    title: "Publicidad Online (SEM y Social Ads)",
    description: "Gestionamos campañas de publicidad en Google, Instagram, Facebook y LinkedIn para generar tráfico y conversiones de alta calidad."
  },
  {
    icon: <LineChart />,
    title: "Optimización de Conversiones (CRO)",
    description: "Analizamos el comportamiento de tus usuarios y aplicamos mejoras en tu web o landing pages para aumentar la tasa de conversión."
  },
  {
    icon: <Zap />,
    title: "Automatización de Campañas",
    description: "Automatizamos el email marketing, la nutrición de leads y las campañas en redes sociales para que puedas escalar tu comunicación sin esfuerzo."
  }
];

export default function MarketingDigitalPage() {
  return (
    <>
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Servicios de Marketing Digital</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Estrategias de crecimiento y generación de clientes para dominar tu mercado.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map(service => (
              <Card key={service.title} className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {React.cloneElement(service.icon, { className: 'h-6 w-6' })}
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
    </>
  );
}
