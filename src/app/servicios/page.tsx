import React from 'react';
import { Section } from '@/components/Section';
import { CheckCircle2, MessageSquare, PhoneCall, Zap, Sparkles, LayoutDashboard, Share2, BarChart3 } from 'lucide-react';

export default function ServiciosPage() {
  return (
    <div className="pt-24 bg-background">
      {/* Solución Core */}
      <Section id="solucion" title="El Sistema AllenMax" subtitle="Nuestra suite integral de automatización basada en IA">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Chatbots Inteligentes", 
              icon: <MessageSquare />, 
              features: ["WhatsApp, Web y RRSS", "Calificación de leads", "Respuesta inmediata 24/7", "Nutrición de prospectos"] 
            },
            { 
              title: "Agentes de Voz", 
              icon: <PhoneCall />, 
              features: ["Llamadas entrantes/salientes", "Transcripción en tiempo real", "Gestión de citas automática", "Análisis de sentimiento"] 
            },
            { 
              title: "Integración Total", 
              icon: <Zap />, 
              features: ["Conexión con tu CRM actual", "Flujos inteligentes en Zapier/Make", "Acciones automáticas post-llamada", "Sincronización de datos"] 
            }
          ].map((sol, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border hover:border-primary/30 transition-all group shadow-sm">
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

      {/* Servicios Especializados */}
      <Section id="servicios-especializados" title="Servicios Especializados" subtitle="Potenciamos cada área estratégica de tu negocio" className="bg-white/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Ingeniería de Prompts", icon: <Sparkles />, desc: "Diseñamos la lógica de tus IAs para que suenen humanas, empáticas y maximicen las ventas." },
            { title: "Webs Inteligentes", icon: <LayoutDashboard />, desc: "Páginas optimizadas para la conversión con formularios dinámicos conectados a tu IA." },
            { title: "RRSS con IA", icon: <Share2 />, desc: "Gestión de contenidos, copies y métricas optimizada por algoritmos para ganar relevancia." },
            { title: "Estrategia de Automatización", icon: <Zap />, desc: "Diseño de flujos operativos complejos que ahorran cientos de horas al mes a tu equipo." },
            { title: "Optimización SEO", icon: <BarChart3 />, desc: "Posicionamiento centrado en captar tráfico cualificado con alta intención de compra." },
            { title: "Seguimiento Comercial", icon: <PhoneCall />, desc: "Automatización total del ciclo de vida del cliente: desde el lead hasta la post-venta." }
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
    </div>
  );
}
