
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
  MousePointer2,
  TrendingUp,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ServiceVisualProps {
  type: string;
  className?: string;
}

const ServiceVisual = ({ type, className }: ServiceVisualProps) => {
  switch (type) {
    case 'chatbot':
      return (
        <div className={cn("relative w-full h-full min-h-[200px] bg-slate-50 rounded-2xl border border-slate-200/50 p-6 flex flex-col gap-3 overflow-hidden group-hover:border-primary/30 transition-colors", className)}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="self-end bg-primary text-white text-[11px] px-4 py-2 rounded-2xl rounded-tr-none shadow-sm animate-in slide-in-from-right-4 duration-700">
            ¿Cómo podéis ayudarme?
          </div>
          <div className="self-start bg-white text-foreground/80 text-[11px] px-4 py-2 rounded-2xl rounded-tl-none shadow-md border border-slate-100 animate-in slide-in-from-left-4 duration-1000 delay-300">
            ¡Hola! Estamos automatizando tu clínica 24/7.
          </div>
          <div className="mt-auto w-full h-10 bg-white rounded-full border border-slate-200 flex items-center px-4 justify-between shadow-inner">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <ArrowRight size={12} className="text-white" />
            </div>
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className={cn("relative w-full h-full min-h-[200px] bg-primary/5 rounded-2xl border border-primary/10 flex flex-col items-center justify-center overflow-hidden gap-6", className)}>
          <div className="flex items-center gap-1.5 h-16">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,122,255,0.3)]" 
                style={{ height: `${20 + Math.random() * 80}%`, animationDuration: `${0.5 + Math.random()}s` }}
              ></div>
            ))}
          </div>
          <div className="flex gap-3">
            <div className="px-4 py-1.5 bg-white rounded-full flex items-center gap-2 shadow-sm border border-slate-100">
              <Phone size={12} className="text-primary" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Llamada en curso</span>
            </div>
          </div>
        </div>
      );
    case 'automation':
      return (
        <div className={cn("relative w-full h-full min-h-[200px] bg-slate-900 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden", className)}>
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center gap-4">
             <div className="flex gap-8 items-center">
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                  <Zap className="text-yellow-400" size={24} />
                </div>
                <div className="w-16 h-[2px] bg-gradient-to-r from-primary/50 to-transparent relative">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-primary rounded-full blur-[2px] animate-[shimmer_2s_infinite]"></div>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <Cpu className="text-blue-400" size={24} />
                </div>
             </div>
          </div>
        </div>
      );
    case 'web':
      return (
        <div className={cn("relative w-full h-full min-h-[160px] bg-slate-50 rounded-2xl border border-slate-200 p-4", className)}>
          <div className="w-full h-full bg-white rounded-xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col">
            <div className="h-6 border-b border-slate-50 bg-slate-50/50 flex items-center px-3 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
            </div>
            <div className="p-4 space-y-3">
              <div className="w-3/4 h-3 bg-slate-100 rounded-full"></div>
              <div className="w-full h-6 bg-primary/5 rounded-lg border border-primary/10"></div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 bg-slate-50 rounded-lg"></div>
                <div className="h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MousePointer2 size={14} className="text-white animate-bounce" />
                </div>
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
  return (
    <div className="pt-24 bg-background min-h-screen">
      <Section 
        id="servicios-header" 
        title="Ingeniería de Sistemas Inteligentes" 
        subtitle="No vendemos software. Construimos los sistemas nerviosos que hacen que tu empresa sea más eficiente y rentable."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Chatbots - Destacado principal */}
          <div className="md:col-span-8 bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center h-full">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">
                  <MessageSquare size={12} />
                  Automatización de Respuesta
                </div>
                <h3 className="text-3xl font-extrabold tracking-tight">Chatbots que cierran ventas</h3>
                <p className="text-slate-500 leading-relaxed">
                  Aseguramos que ningún lead se enfríe. Chatbots que califican, agendan y responden con la precisión de tu mejor comercial, integrándose directamente en tu CRM.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Respuestas 24/7", "Cualificación IA", "Agendación Citas", "Multi-plataforma"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CheckCircle2 size={14} className="text-primary" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 h-full">
                <ServiceVisual type="chatbot" className="h-full" />
              </div>
            </div>
          </div>

          {/* Agentes de Voz */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex-1">
              <ServiceVisual type="voice" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Bot className="text-primary" size={24} />
                Agentes de Voz
              </h3>
              <p className="text-sm text-slate-500">
                IA que habla con tus clientes. Ideal para confirmar citas, encuestas de satisfacción y gestión de agenda telefónica sin esperas.
              </p>
              <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent group-hover:gap-2 transition-all">
                Ver demostración <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Automatización de Procesos */}
          <div className="md:col-span-4 bg-slate-950 rounded-[2.5rem] p-10 border border-white/5 shadow-2xl group flex flex-col text-white">
            <div className="mb-8 flex-1">
              <ServiceVisual type="automation" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Zap className="text-primary" size={24} />
                Procesos Core
              </h3>
              <p className="text-sm text-slate-400">
                Conectamos tus herramientas (CRM, ERP, Web) para eliminar tareas manuales. Si es repetitivo, AllenMax lo automatiza.
              </p>
            </div>
          </div>

          {/* Webs Inteligentes */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex-1">
              <ServiceVisual type="web" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Globe className="text-primary" size={24} />
                Webs Smart
              </h3>
              <p className="text-sm text-slate-500">
                Páginas diseñadas para convertir. Incluyen formularios inteligentes y sistemas de seguimiento automático integrados de serie.
              </p>
            </div>
          </div>

          {/* Prompts e Ingeniería */}
          <div className="md:col-span-4 bg-primary rounded-[2.5rem] p-10 border border-primary/20 shadow-xl group flex flex-col text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="flex-1 flex items-center justify-center mb-8">
              <Sparkles size={64} className="text-white/20 animate-pulse" />
            </div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-bold tracking-tight">Prompt Engineering</h3>
              <p className="text-sm text-white/80">
                Optimizamos el "cerebro" de la IA para tu negocio. Maximizamos la relevancia y minimizamos errores en cada respuesta.
              </p>
            </div>
          </div>

        </div>
      </Section>

      <Section id="metodologia" title="Nuestra Metodología" subtitle="Por qué no somos una agencia más" className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: <Layers className="text-primary" />, 
              t: "Sistemas, no herramientas", 
              d: "No instalamos un chatbot y nos vamos. Diseñamos un sistema nervioso completo que conecta todos tus departamentos." 
            },
            { 
              icon: <TrendingUp className="text-primary" />, 
              t: "Foco en el ROI", 
              d: "Cada automatización se mide por su capacidad de ahorrar tiempo o generar ingresos directos en tu cuenta de resultados." 
            },
            { 
              icon: <Sparkles className="text-primary" />, 
              t: "Personalización Total", 
              d: "Tu negocio es único. Tu IA también debe serlo. Entrenamos modelos con tus datos y el tono de voz de tu marca." 
            }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-3xl shadow-md border border-slate-100 flex items-center justify-center mx-auto mb-6">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h4 className="text-xl font-bold tracking-tight">{item.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-50%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(500%) translateY(-50%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
