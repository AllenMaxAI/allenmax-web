'use client';

import React from 'react';
import { Bot, BrainCircuit, Terminal, AppWindow, Workflow, Share2 } from 'lucide-react';
import { ServicesSection } from '@/components/services/ServicesSection';
import { CtaSection } from '@/components/layout/CtaSection';

const aiServices = [
  {
    icon: <Bot />,
    title: "Chatbots Inteligentes",
    description: "Automatizamos la atención y gestión de oportunidades, asegurando que ningún cliente quede sin respuesta. Nuestros chatbots se integran con tus sistemas existentes.",
    points: [
      "Respuestas inmediatas y personalizadas",
      "Calificación de leads automáticamente",
      "Agendación de citas y reuniones",
      "Integración con CRM y sistemas internos"
    ],
  },
  {
    icon: <BrainCircuit />,
    title: "Agentes de IA",
    description: "Desarrollamos asistentes virtuales personalizados que ayudan a tu equipo en tareas específicas, mejorando la eficiencia y liberando tiempo estratégico.",
    points: [
      "Soporte interno y atención comercial",
      "Automatización de consultas frecuentes",
      "Gestión de información",
      "Integración con flujos de trabajo internos"
    ],
  },
  {
    icon: <Terminal />,
    title: "Ingeniería de Prompts",
    description: "Optimizamos los modelos de IA para que cumplan tareas concretas con máxima eficiencia. Esto asegura que cada interacción genere resultados útiles.",
    points: [
      "Diseño de prompts estratégicos",
      "Estandarización de procesos",
      "Automatización avanzada",
      "Optimización de rendimiento"
    ],
  },
    {
    icon: <AppWindow />,
    title: "Creación de Páginas Web Inteligentes",
    description: "Desarrollamos webs que ya vienen con automatización integrada, conectando captación, seguimiento y conversión desde el primer día.",
    points: [
      "Integración con sistemas de captación",
      "Formularios inteligentes y dinámicos",
      "Automatización de seguimiento",
      "Enfoque en conversión y resultados"
    ],
  },
  {
    icon: <Workflow />,
    title: "Automatización de Procesos",
    description: "Eliminamos fricción operativa mediante sistemas que conectan tus herramientas y flujos de trabajo, haciendo que cada tarea se ejecute sin errores.",
    points: [
      "Integración entre herramientas y sistemas internos",
      "Flujos de trabajo inteligentes",
      "Seguimiento automático de acciones y resultados",
      "Optimización comercial y operativa"
    ],
  },
  {
    icon: <Share2 />,
    title: "Gestión de Redes Sociales con IA",
    description: "Combinamos creatividad y tecnología para que tu estrategia de redes sea más efectiva, analizando resultados y optimizando cada publicación.",
    points: [
      "Análisis de rendimiento y métricas",
      "Optimización de copies y creatividades",
      "Automatización de programación de publicaciones",
      "Mejora continua basada en datos"
    ],
  }
];

export default function AIServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Inteligencia Artificial</h1>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                La IA no es una moda: es una herramienta estratégica cuando se aplica correctamente. La integramos en tus procesos para optimizar resultados.
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

      <ServicesSection services={aiServices} />
      <CtaSection />
    </div>
  );
}
