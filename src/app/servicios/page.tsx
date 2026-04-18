
'use client';

import React from 'react';
import { Section } from '@/components/Section';
import { 
  CheckCircle2, 
  MessageSquare, 
  Bot, 
  Zap, 
  Sparkles, 
  Globe, 
  Share2, 
  ArrowRight,
  Phone,
  Cpu,
  MousePointer2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceVisualProps {
  type: string;
  className?: string;
}

const ServiceVisual = ({ type, className }: ServiceVisualProps) => {
  switch (type) {
    case 'chatbot':
      return (
        <div className={cn("relative w-full h-32 bg-slate-50 rounded-xl border border-slate-200 p-4 flex flex-col gap-2 overflow-hidden", className)}>
          <div className="self-end bg-primary text-white text-[10px] px-3 py-1.5 rounded-full rounded-tr-none animate-in slide-in-from-right-2">¿Cómo podéis ayudarme?</div>
          <div className="self-start bg-white text-foreground/60 text-[10px] px-3 py-1.5 rounded-full rounded-tl-none border shadow-sm animate-in slide-in-from-left-2 delay-300">¡Hola! Automatizamos tu clínica 24/7.</div>
          <div className="mt-auto flex gap-1 items-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-primary/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className={cn("relative w-full h-32 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center overflow-hidden", className)}>
          <div className="flex items-center gap-1">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-primary rounded-full animate-pulse" 
                style={{ height: `${30 + Math.random() * 60}%`, animationDuration: `${0.5 + Math.random()}s` }}
              ></div>
            ))}
          </div>
          <div className="absolute top-2 right-2">
            <Phone size={12} className="text-primary animate-ring" />
          </div>
        </div>
      );
    case 'automation':
      return (
        <div className={cn("relative w-full h-32 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden", className)}>
          <div className="flex gap-4 items-center">
            <div className="p-2 bg-white/10 rounded-lg border border-white/20">
              <Zap className="text-yellow-400" size={16} />
            </div>
            <div className="w-12 h-[1px] bg-gradient-to-r from-primary to-transparent relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full blur-[1px] animate-[shimmer_2s_infinite]"></div>
            </div>
            <div className="p-2 bg-white/10 rounded-lg border border-white/20">
              <Cpu className="text-blue-400" size={16} />
            </div>
          </div>
        </div>
      );
    case 'web':
      return (
        <div className={cn("relative w-full h-32 bg-slate-50 rounded-xl border border-slate-200 p-3", className)}>
          <div className="w-full h-full bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="h-3 border-b bg-slate-50 flex items-center px-2 gap-1">
              <div className="w-1 h-1 rounded-full bg-red-400/50"></div>
              <div className="w-1 h-1 rounded-full bg-yellow-400/50"></div>
            </div>
            <div className="p-2 space-y-1.5">
              <div className="w-1/2 h-1.5 bg-slate-100 rounded-full"></div>
              <div className="w-full h-3 bg-primary/10 rounded"></div>
              <div className="flex justify-end pt-1">
                <MousePointer2 size={10} className="text-primary animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Chatbots Inteligentes",
      type: "chatbot",
      desc: "Automatizamos la atención y gestión de oportunidades, asegurando que ningún cliente quede sin respuesta.",
      items: ["Respuestas inmediatas", "Calificación de leads", "Agendación de citas", "Integración con CRM"]
    },
    {
      title: "Agentes de Voz",
      type: "voice",
      desc: "Desarrollamos asistentes virtuales para tareas específicas, liberando tiempo estratégico para tu equipo.",
      items: ["Soporte interno", "Atención comercial", "Gestión de información", "Flujos de trabajo"]
    },
    {
      title: "Automatización de Procesos",
      type: "automation",
      desc: "Eliminamos fricción operativa conectando tus herramientas para que cada tarea se ejecute sin errores.",
      items: ["Integración de sistemas", "Flujos inteligentes", "Seguimiento automático", "Optimización comercial"]
    },
    {
      title: "Webs Inteligentes",
      type: "web",
      desc: "Desarrollamos webs con automatización integrada, conectando captación y conversión desde el día uno.",
      items: ["Enfoque en conversión", "Formularios dinámicos", "Seguimiento integrado", "SEO optimizado"]
    },
    {
      title: "Ingeniería de Prompts",
      type: "automation",
      desc: "Optimizamos los modelos de IA para que cumplan tareas concretas con la máxima eficiencia posible.",
      items: ["Prompts estratégicos", "Estandarización", "Optimización ROI", "Modelos personalizados"]
    },
    {
      title: "RRSS con IA",
      type: "voice",
      desc: "Combinamos creatividad y tecnología para que tu estrategia de redes sea más efectiva y medible.",
      items: ["Análisis de métricas", "Optimización de copies", "Programación automática", "Mejora con datos"]
    }
  ];

  return (
    <div className="pt-24 bg-background min-h-screen">
      <Section 
        id="servicios-header" 
        title="Sistemas, no acciones aisladas" 
        subtitle="Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all group">
              <div className="mb-6">
                <ServiceVisual type={s.type} />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 size={14} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary text-white rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4">¿Por qué AllenMax?</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            La IA no es una moda: es una herramienta estratégica. La integramos en tus procesos para optimizar resultados y construir un negocio escalable.
          </p>
        </div>
      </Section>

      <style jsx global>{`
        @keyframes ring {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-ring {
          animation: ring 0.5s infinite;
        }
        @keyframes shimmer {
          0% { left: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
