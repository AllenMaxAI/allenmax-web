
'use client';

import React from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Cpu, 
  Bot, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Chatbots Inteligentes",
      icon: <MessageSquare size={20} className="text-primary" />,
      desc: "Automatizamos la atención y gestión de oportunidades, asegurando que ningún cliente quede sin respuesta. Nuestros chatbots se integran con tus sistemas existentes.",
      items: [
        "Respuestas inmediatas y personalizadas",
        "Calificación de leads automáticamente",
        "Agendación de citas y reuniones",
        "Integración con CRM y sistemas internos"
      ],
      reversed: false
    },
    {
      title: "Agentes de IA",
      icon: <Bot size={20} className="text-primary" />,
      desc: "Desarrollamos asistentes virtuales personalizados que ayudan a tu equipo en tareas específicas, mejorando la eficiencia y liberando tiempo estratégico.",
      items: [
        "Soporte interno y atención comercial",
        "Automatización de consultas frecuentes",
        "Gestión de información",
        "Integración con flujos de trabajo internos"
      ],
      reversed: true
    },
    {
      title: "Ingeniería de Prompts",
      icon: <Cpu size={20} className="text-primary" />,
      desc: "Optimizamos los modelos de IA para que cumplan tareas concretas con la máxima eficiencia. Diseñamos la lógica detrás de cada interacción inteligente.",
      items: [
        "Diseño de prompts estratégicos",
        "Estandarización de procesos",
        "Optimización de resultados ROI",
        "Modelos de lenguaje personalizados"
      ],
      reversed: false
    },
    {
      title: "Automatización de Procesos",
      icon: <Zap size={20} className="text-primary" />,
      desc: "Conectamos tus herramientas actuales para eliminar tareas manuales repetitivas y reducir el margen de error humano al mínimo.",
      items: [
        "Integración nativa de aplicaciones",
        "Flujos de trabajo autónomos",
        "Sincronización de datos en tiempo real",
        "Escalabilidad operativa inmediata"
      ],
      reversed: true
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
      {/* Sistema de Fondos de Home */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[1000px] bg-primary/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[60%] h-[800px] bg-blue-400/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Exacto a Captura */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-foreground uppercase">
              Inteligencia <br />Artificial
            </h1>
            <p className="text-lg text-foreground/50 font-medium max-w-xl leading-relaxed">
              La IA no es una moda: es una herramienta estratégica cuando se aplica correctamente. 
              La integramos en tus procesos para optimizar resultados.
            </p>
          </div>
          <div className="lg:col-span-5 border-l-4 border-primary pl-8 py-2">
            <h2 className="text-xl font-black text-foreground mb-4">
              No implementamos acciones aisladas. <br />
              <span className="text-primary">Construimos sistemas.</span>
            </h2>
            <p className="text-sm text-foreground/50 font-medium leading-relaxed">
              Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible.
            </p>
          </div>
        </div>

        {/* Listado de Servicios con Distribución de Captura */}
        <div className="space-y-32">
          {servicios.map((s, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
              
              {/* Bloque de Contenido */}
              <div className={`space-y-8 ${s.reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight uppercase">{s.title}</h3>
                </div>
                <p className="text-base text-foreground/50 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

              {/* Bloque "Incluye" */}
              <div className={`${s.reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground/30 mb-6">Incluye:</h4>
                <ul className="grid gap-4">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                      <span className="text-sm font-bold text-foreground/60 uppercase tracking-tight group-hover:text-foreground transition-colors">
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
            <h2 className="text-3xl font-black uppercase tracking-tight italic text-foreground">¿Tu próximo sistema?</h2>
            <p className="text-foreground/40 max-w-xl mx-auto font-medium">
              Analicemos qué piezas de IA necesita tu negocio para escalar al siguiente nivel.
            </p>
            <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-xl shadow-primary/10 group" asChild>
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
