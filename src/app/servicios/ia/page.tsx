import React from 'react';
import { cn } from '@/lib/utils';
import { Bot, BrainCircuit, Terminal, AppWindow, Workflow, Share2, CheckCircle2 } from 'lucide-react';

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
    <>
      <section className="pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Inteligencia Artificial</h1>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                La IA no es una moda: es una herramienta estratégica cuando se aplica correctamente. La integramos en tus procesos para optimizar resultados y generar valor real.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4 border-l-2 border-primary pl-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                No implementamos acciones aisladas. <span className="text-primary">Construimos sistemas.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-32 pb-24 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {aiServices.map((service, index) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className={cn("space-y-4", index % 2 !== 0 && "md:order-2")}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl text-primary">
                      {React.cloneElement(service.icon, { className: 'h-6 w-6' })}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={cn(index % 2 !== 0 && "md:order-1")}>
                  <h4 className="font-semibold text-foreground mb-4">Incluye:</h4>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
