
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ChatWidget } from '@/components/ChatWidget';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  PhoneCall, 
  Calendar, 
  LayoutDashboard, 
  ShieldCheck, 
  BarChart3, 
  Share2, 
  Sparkles, 
  AlertCircle,
  Clock,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const images = PlaceHolderImages;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />

        {/* Sección: Problema */}
        <Section id="problema" title="¿Por qué tu negocio no crece más?" subtitle="Identificamos las fugas de ingresos más comunes">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="text-red-500" />, title: "No responder a tiempo", desc: "El 80% de los leads se pierden si no se contactan en los primeros 5 minutos." },
              { icon: <AlertCircle className="text-red-500" />, title: "Mala gestión de leads", desc: "Contactos que se olvidan en Excel o bandejas de entrada saturadas." },
              { icon: <LayoutDashboard className="text-red-500" />, title: "Procesos manuales", desc: "Tu equipo pierde horas en tareas que una IA podría hacer en segundos." },
              { icon: <Calendar className="text-red-500" />, title: "Pérdida de citas", desc: "Falta de seguimiento que se traduce en huecos vacíos en tu agenda." }
            ].map((item, i) => (
              <Card key={i} className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Sección: Solución Core */}
        <Section id="solucion" title="El Sistema AllenMax" subtitle="Automatización integral basada en IA" className="bg-white/50">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Chatbots Inteligentes", 
                icon: <MessageSquare />, 
                features: ["WhatsApp, Web y RRSS", "Calificación de leads", "Respuesta 24/7"] 
              },
              { 
                title: "Agentes de Voz", 
                icon: <PhoneCall />, 
                features: ["Llamadas con IA", "Transcripción automática", "Gestión de citas"] 
              },
              { 
                title: "Integración Total", 
                icon: <Zap />, 
                features: ["Conexión con tu CRM", "Flujos inteligentes", "Acciones automáticas"] 
              }
            ].map((sol, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border hover:border-primary/30 transition-all group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{sol.title}</h3>
                <ul className="space-y-3">
                  {sol.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Sección: Producto Estrella (CRM Dental) */}
        <Section id="crm-dental" title="CRM Inteligente para Clínicas" subtitle="Diseñado para maximizar la conversión de pacientes" dark className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase mb-4">
                Producto Estrella
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">Control total de tu clínica desde una sola pantalla</h3>
              <div className="grid gap-4">
                {[
                  { t: "Omnicanalidad", d: "WhatsApp, redes y llamadas en un solo lugar." },
                  { t: "Transcripciones", d: "Mira qué pasa en cada llamada de tu recepción." },
                  { t: "Gestión de Citas", d: "Calendario inteligente integrado con agentes de IA." },
                  { t: "Métricas en Vivo", d: "Rendimiento y conversión de pacientes al instante." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <ShieldCheck className="text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">{item.t}</h4>
                      <p className="text-sm text-white/60">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
              {images.find(img => img.id === 'crm-dental') && (
                <Image 
                  src={images.find(img => img.id === 'crm-dental')!.imageUrl} 
                  alt="CRM Dental Dashboard" 
                  width={800} 
                  height={600} 
                  className="rounded-2xl relative z-10 shadow-2xl border border-white/10"
                  data-ai-hint="medical dashboard"
                />
              )}
            </div>
          </div>
        </Section>

        {/* Sección: Servicios Adicionales */}
        <Section id="servicios" title="Servicios Especializados" subtitle="Potencia cada área de tu negocio">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ingeniería de Prompts", icon: <Sparkles />, desc: "Diseñamos la lógica de tus IAs para que suenen humanas y vendan más." },
              { title: "Webs Inteligentes", icon: <LayoutDashboard />, desc: "Páginas optimizadas para la conversión con formularios dinámicos." },
              { title: "RRSS con IA", icon: <Share2 />, desc: "Gestión de contenidos y métricas optimizada por algoritmos avanzados." },
              { title: "Estrategia de Automatización", icon: <Zap />, desc: "Diseño de flujos operativos que ahorran cientos de horas." },
              { title: "Optimización SEO", icon: <BarChart3 />, desc: "Posicionamiento centrado en captar leads cualificados." },
              { title: "Seguimiento Comercial", icon: <PhoneCall />, desc: "Automatización total del ciclo de venta y post-venta." }
            ].map((service, i) => (
              <div key={i} className="group p-6 bg-white border rounded-2xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-accent/30 text-primary flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold mb-2 text-lg">{service.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Sección: Cómo Funciona */}
        <Section id="proceso" title="Tu camino a la automatización" subtitle="4 pasos para transformar tus resultados" className="bg-white/30">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Análisis", d: "Auditamos tu negocio y detectamos cuellos de botella." },
              { n: "02", t: "Diseño", d: "Creamos el mapa de tu nuevo sistema inteligente." },
              { n: "03", t: "Implementación", d: "Integramos las herramientas y formamos a tu equipo." },
              { n: "04", t: "Optimización", d: "Mejoramos el rendimiento basado en datos reales." }
            ].map((step, i) => (
              <div key={i} className="relative p-6 text-center">
                <span className="text-6xl font-black text-primary/5 absolute top-0 left-1/2 -translate-x-1/2 z-0">{step.n}</span>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2">{step.t}</h4>
                  <p className="text-sm text-foreground/60">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Final */}
        <Section id="contacto" title="¿Listo para el siguiente nivel?" subtitle="Empieza a automatizar tu negocio y aumenta tus resultados desde hoy">
          <div className="max-w-2xl mx-auto bg-primary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-3xl font-bold mb-6 relative z-10">Transforma tu empresa con AllenMax</h3>
            <p className="text-white/80 mb-8 text-lg relative z-10">
              Agenda una llamada de 15 minutos para ver cómo podemos ayudarte a escalar.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-8 text-xl font-bold relative z-10" asChild>
              <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                Agendar llamada
              </a>
            </Button>
          </div>
        </Section>

        {/* FAQ Básica */}
        <Section id="faq" title="Preguntas Frecuentes" className="bg-white/50">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Es AllenMax solo para clínicas dentales?</AccordionTrigger>
                <AccordionContent>
                  Aunque tenemos un CRM especializado para el sector dental, nuestras soluciones de automatización e IA son aplicables a cualquier empresa de servicios que quiera optimizar su captación y atención al cliente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cómo se integra con mis sistemas actuales?</AccordionTrigger>
                <AccordionContent>
                  Utilizamos integraciones nativas y herramientas como Zapier o Make para conectar nuestra IA con casi cualquier software que ya utilices (CRM, ERP, Calendarios, etc.).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cuánto tiempo tarda la implementación?</AccordionTrigger>
                <AccordionContent>
                  Dependiendo de la complejidad, un sistema base puede estar operativo en menos de 2 semanas. El CRM dental tiene un despliegue casi inmediato.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
