
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
  Layout,
  Cpu,
  MousePointer2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceVisualProps {
  type: string;
}

const ServiceVisual = ({ type }: ServiceVisualProps) => {
  switch (type) {
    case 'automation':
      return (
        <div className="relative w-full h-40 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] [opacity:0.3]"></div>
          <div className="flex gap-4 items-center z-10">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-blue-100 animate-bounce">
              <Zap className="text-primary" size={20} />
            </div>
            <div className="w-12 h-0.5 bg-blue-200 relative overflow-hidden">
              <div className="absolute inset-y-0 bg-primary w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-sm border border-blue-100">
              <Cpu className="text-blue-400" size={20} />
            </div>
          </div>
        </div>
      );
    case 'chatbot':
      return (
        <div className="relative w-full h-40 bg-blue-50/50 rounded-2xl border border-blue-100/50 p-4 flex flex-col gap-2 overflow-hidden">
          <div className="self-end bg-primary text-white text-[10px] px-3 py-1.5 rounded-2xl rounded-tr-none shadow-sm animate-pulse">
            ¿Cómo podéis ayudarme?
          </div>
          <div className="self-start bg-white text-foreground/80 text-[10px] px-3 py-1.5 rounded-2xl rounded-tl-none shadow-sm border border-blue-100">
            ¡Claro! Creamos agentes de IA...
          </div>
          <div className="mt-auto w-full h-8 bg-white/80 rounded-full border border-blue-100 flex items-center px-3 justify-between">
            <div className="w-1/2 h-2 bg-blue-50 rounded-full"></div>
            <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
              <ArrowRight size={10} className="text-white" />
            </div>
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className="relative w-full h-40 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex flex-col items-center justify-center overflow-hidden gap-4">
          <div className="flex items-center gap-1 h-8">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-primary rounded-full animate-pulse" 
                style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Phone size={14} className="text-white rotate-[135deg]" />
            </div>
            <div className="w-20 h-8 bg-primary rounded-full flex items-center justify-center gap-2 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">En vivo</span>
            </div>
          </div>
        </div>
      );
    case 'web':
      return (
        <div className="relative w-full h-40 bg-blue-50/50 rounded-2xl border border-blue-100/50 p-3 overflow-hidden">
          <div className="w-full h-full bg-white rounded-lg border border-blue-100 shadow-sm overflow-hidden flex flex-col">
            <div className="h-4 border-b border-blue-50 bg-blue-50/20 flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="w-2/3 h-2 bg-blue-100 rounded-full"></div>
              <div className="w-full h-4 bg-primary/10 rounded-md"></div>
              <div className="w-1/2 h-8 bg-primary rounded-md self-center mt-2 flex items-center justify-center">
                <MousePointer2 size={12} className="text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      );
    case 'prompts':
      return (
        <div className="relative w-full h-40 bg-slate-900 rounded-2xl border border-white/10 p-4 font-mono text-[10px] overflow-hidden">
          <div className="text-green-400 opacity-80">{"{ \"system_instruction\": \"...\" }"}</div>
          <div className="text-blue-300 mt-2">{"prompt > /generate_optimized"}</div>
          <div className="text-white/60 mt-1 animate-pulse">|</div>
          <div className="absolute bottom-0 right-0 p-3">
            <Sparkles className="text-primary/40" size={24} />
          </div>
        </div>
      );
    case 'social':
      return (
        <div className="relative w-full h-40 bg-blue-50/50 rounded-2xl border border-blue-100/50 p-4 flex flex-col gap-4 overflow-hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20"></div>
            <div className="flex-1 space-y-1">
              <div className="w-1/2 h-2 bg-blue-200 rounded-full"></div>
              <div className="w-1/3 h-1.5 bg-blue-100 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg border border-blue-100 shadow-sm flex items-center justify-center">
            <Share2 className="text-primary/20" size={32} />
          </div>
          <div className="flex justify-between">
            <div className="w-8 h-1.5 bg-red-100 rounded-full"></div>
            <div className="w-8 h-1.5 bg-blue-100 rounded-full"></div>
            <div className="w-8 h-1.5 bg-green-100 rounded-full"></div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function ServiciosPage() {
  const mainServices = [
    {
      title: "Chatbots Inteligentes",
      type: "chatbot",
      icon: <MessageSquare />,
      desc: "Automatizamos la atención y gestión de oportunidades, asegurando que ningún cliente quede sin respuesta.",
      features: [
        "Respuestas inmediatas",
        "Calificación de leads",
        "Agendación de citas",
        "Integración nativa"
      ]
    },
    {
      title: "Agentes de IA",
      type: "voice",
      icon: <Bot />,
      desc: "Asistentes virtuales que ayudan a tu equipo en tareas específicas, mejorando la eficiencia operativa.",
      features: [
        "Soporte comercial",
        "Consultas frecuentes",
        "Gestión de info",
        "Flujos internos"
      ]
    },
    {
      title: "Automatización",
      type: "automation",
      icon: <Zap />,
      desc: "Eliminamos fricción operativa mediante sistemas que conectan tus herramientas y flujos de trabajo.",
      features: [
        "Integración total",
        "Flujos inteligentes",
        "Seguimiento auto",
        "Optimización ROI"
      ]
    },
    {
      title: "Webs Inteligentes",
      type: "web",
      icon: <Globe />,
      desc: "Desarrollamos webs que ya vienen con automatización integrada para convertir desde el minuto uno.",
      features: [
        "Integración captación",
        "Formularios dinámicos",
        "Seguimiento auto",
        "Foco en conversión"
      ]
    },
    {
      title: "Ingeniería Prompts",
      type: "prompts",
      icon: <Sparkles />,
      desc: "Optimizamos los modelos de IA para que cumplan tareas concretas con la máxima eficiencia técnica.",
      features: [
        "Prompts estratégicos",
        "Estandarización",
        "IA avanzada",
        "Rendimiento alto"
      ]
    },
    {
      title: "Social Media IA",
      type: "social",
      icon: <Share2 />,
      desc: "Combinamos creatividad y tecnología para que tu estrategia de redes sea más efectiva y rentable.",
      features: [
        "Análisis de métricas",
        "Copies optimizados",
        "Programación auto",
        "Mejora por datos"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-background min-h-screen">
      <Section 
        id="servicios-hero" 
        title="Inteligencia Artificial Estratégica" 
        subtitle="No implementamos acciones aisladas. Construimos sistemas diseñados para atraer, convertir y fidelizar."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-border shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="mb-6">
                <ServiceVisual type={service.type} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
              </div>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-y-3 mb-8">
                {service.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-2 text-[12px] font-medium text-foreground/70">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>

              <button className="mt-auto flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                Saber más <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section id="filosofia-footer" title="Nuestra Metodología" subtitle="Por qué elegir AllenMax" className="bg-primary/5 rounded-t-[4rem]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-8 bg-white rounded-3xl border border-border shadow-sm">
              <h4 className="font-bold text-xl mb-3">Estrategia sobre Tecnología</h4>
              <p className="text-foreground/60 text-sm">No usamos IA porque sí. La usamos donde realmente mueve la aguja de tu rentabilidad y ahorra tiempo a tu equipo.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-border shadow-sm">
              <h4 className="font-bold text-xl mb-3">Sistemas Escalables</h4>
              <p className="text-foreground/60 text-sm">Diseñamos soluciones que crecen contigo, automatizando lo repetitivo para que tú te enfoques en escalar.</p>
            </div>
          </div>
          <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-125 duration-700"></div>
            <h3 className="text-3xl font-bold mb-6 italic leading-tight">"El éxito no viene de una acción aislada, sino de un sistema que trabaja por ti 24/7."</h3>
            <p className="text-white/80 text-lg">
              En AllenMax nos enfocamos en el ROI. Si una automatización no te ahorra tiempo o no te genera más ingresos, simplemente no la implementamos.
            </p>
          </div>
        </div>
      </Section>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
