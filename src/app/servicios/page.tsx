
'use client';

import React from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Cpu, 
  Bot, 
  Zap, 
  Globe, 
  LayoutDashboard,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Chatbots Inteligentes",
      icon: <MessageSquare size={24} className="text-primary" />,
      desc: "Automatizamos la atención y gestión de oportunidades, asegurando que ningún cliente quede sin respuesta. Nuestros chatbots se integran con tus sistemas existentes.",
      items: [
        "Respuestas inmediatas y personalizadas",
        "Calificación de leads automáticamente",
        "Agendación de citas y reuniones",
        "Integración con CRM y sistemas internos"
      ],
      align: "left"
    },
    {
      title: "Agentes de IA",
      icon: <Bot size={24} className="text-primary" />,
      desc: "Desarrollamos asistentes virtuales personalizados que ayudan a tu equipo en tareas específicas, mejorando la eficiencia y liberando tiempo estratégico.",
      items: [
        "Soporte interno y atención comercial",
        "Automatización de consultas frecuentes",
        "Gestión de información",
        "Integración con flujos de trabajo internos"
      ],
      align: "right"
    },
    {
      title: "Ingeniería de Prompts",
      icon: <Cpu size={24} className="text-primary" />,
      desc: "Optimizamos los modelos de IA para que cumplan tareas concretas con la máxima eficiencia. Diseñamos la lógica detrás de cada interacción inteligente.",
      items: [
        "Diseño de prompts estratégicos",
        "Estandarización de procesos",
        "Optimización de resultados ROI",
        "Modelos de lenguaje personalizados"
      ],
      align: "left"
    },
    {
      title: "Automatización de Procesos",
      icon: <Zap size={24} className="text-primary" />,
      desc: "Conectamos tus herramientas actuales para eliminar tareas manuales repetitivas y reducir el margen de error humano al mínimo.",
      items: [
        "Integración nativa de aplicaciones",
        "Flujos de trabajo autónomos",
        "Sincronización de datos en tiempo real",
        "Escalabilidad operativa inmediata"
      ],
      align: "right"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#020617] min-h-screen text-white relative overflow-hidden">
      {/* Fondo con textura y mallas sutiles */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[1000px] bg-primary/10 blur-[160px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header de la página - Según captura */}
        <div className="mb-32">
          <div className="relative mb-12">
            <h1 className="text-8xl md:text-[140px] font-black text-white/5 absolute -top-20 -left-10 select-none">
              Servicios
            </h1>
            <div className="grid lg:grid-cols-2 gap-20 items-start relative z-10">
              <div className="space-y-6">
                <p className="text-xl text-white/60 font-medium leading-relaxed max-w-xl">
                  La IA no es una moda: es una herramienta estratégica cuando se aplica correctamente. 
                  La integramos en tus procesos para optimizar resultados.
                </p>
              </div>
              <div className="border-l border-primary/40 pl-12 py-2">
                <p className="text-xl text-white/60 font-medium leading-relaxed">
                  Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Listado de Servicios - Distribución Asimétrica */}
        <div className="space-y-40">
          {servicios.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 lg:gap-32 items-center ${s.align === 'right' ? 'lg:direction-rtl' : ''}`}>
              
              {/* Bloque de Título y Descripción */}
              <div className={`space-y-8 ${s.align === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-3xl font-black tracking-tight uppercase">{s.title}</h3>
                </div>
                <p className="text-lg text-white/40 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

              {/* Bloque "Incluye" */}
              <div className={`bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-12 backdrop-blur-sm ${s.align === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-8 px-2">Incluye:</h4>
                <ul className="grid gap-6">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 size={14} className="text-primary" />
                      </div>
                      <span className="text-sm font-bold text-white/70 uppercase tracking-tight group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-40 text-center space-y-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-primary mx-auto"></div>
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tight italic">¿Tu próximo sistema?</h2>
            <p className="text-white/40 max-w-xl mx-auto font-medium">
              Analicemos qué piezas de IA necesita tu negocio para escalar al siguiente nivel.
            </p>
            <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold bg-primary hover:bg-primary/90 transition-all group" asChild>
              <Link href="/contacto">
                Agendar consulta estratégica
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
