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
  Settings,
  ShieldCheck
} from 'lucide-react';

export default function ServiciosPage() {
  const mainServices = [
    {
      title: "Chatbots Inteligentes",
      icon: <MessageSquare />,
      desc: "Automatizamos la atención y gestión de oportunidades, asegurando que ningún cliente quede sin respuesta. Nuestros chatbots se integran con tus sistemas existentes.",
      features: [
        "Respuestas inmediatas y personalizadas",
        "Calificación de leads automáticamente",
        "Agendación de citas y reuniones",
        "Integración con CRM y sistemas internos"
      ]
    },
    {
      title: "Agentes de IA",
      icon: <Bot />,
      desc: "Desarrollamos asistentes virtuales personalizados que ayudan a tu equipo en tareas específicas, mejorando la eficiencia y liberando tiempo estratégico.",
      features: [
        "Soporte interno y atención comercial",
        "Automatización de consultas frecuentes",
        "Gestión de información",
        "Integración con flujos de trabajo internos"
      ]
    },
    {
      title: "Ingeniería de Prompts",
      icon: <Sparkles />,
      desc: "Optimizamos los modelos de IA para que cumplan tareas concretas con máxima eficiencia. Esto asegura que cada interacción genere resultados útiles.",
      features: [
        "Diseño de prompts estratégicos",
        "Estandarización de procesos",
        "Automatización avanzada",
        "Optimización de rendimiento"
      ]
    },
    {
      title: "Páginas Web Inteligentes",
      icon: <Globe />,
      desc: "Desarrollamos webs que ya vienen con automatización integrada, conectando captación, seguimiento y conversión desde el primer día.",
      features: [
        "Integración con sistemas de captación",
        "Formularios inteligentes y dinámicos",
        "Automatización de seguimiento",
        "Enfoque en conversión y resultados"
      ]
    },
    {
      title: "Automatización de Procesos",
      icon: <Zap />,
      desc: "Eliminamos fricción operativa mediante sistemas que conenctan tus herramientas y flujos de trabajo, haciendo que cada tarea se ejecute sin errores.",
      features: [
        "Integración entre herramientas y sistemas internos",
        "Flujos de trabajo inteligentes",
        "Seguimiento automático de acciones y resultados",
        "Optimización comercial y operativa"
      ]
    },
    {
      title: "Gestión de Redes Sociales con IA",
      icon: <Share2 />,
      desc: "Combinamos creatividad y tecnología para que tu estrategia de redes sea más efectiva, analizando resultados y optimizando cada publicación.",
      features: [
        "Análisis de rendimiento y métricas",
        "Optimización de copies y creatividades",
        "Automatización de programación de publicaciones",
        "Mejora continua basada en datos"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-background">
      {/* Vision Section */}
      <Section id="vision" title="Inteligencia Artificial" subtitle="La IA no es una moda: es una herramienta estratégica cuando se aplica correctamente.">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-foreground/70 leading-relaxed">
            La integramos en tus procesos para optimizar resultados. No implementamos acciones aisladas. <strong>Construimos sistemas.</strong>
          </p>
          <p className="mt-4 text-foreground/60">
            Cada servicio es una pieza de un sistema mayor, diseñado para atraer, convertir y fidelizar de forma sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, i) => (
            <div key={i} className="flex flex-col p-8 bg-white border rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-auto space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-primary/60">Incluye:</p>
                <ul className="space-y-2">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy Callout */}
      <Section id="filosofia" title="Nuestra Metodología" subtitle="Por qué elegir AllenMax" className="bg-primary/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border">
              <ShieldCheck className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-lg mb-2">Estrategia sobre Tecnología</h4>
                <p className="text-sm text-foreground/70">No usamos IA porque sí. La usamos donde realmente mueve la aguja de tu rentabilidad.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border">
              <Settings className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-lg mb-2">Sistemas Escalables</h4>
                <p className="text-sm text-foreground/70">Diseñamos soluciones que crecen contigo, automatizando lo repetitivo para que tú escales el negocio.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary text-white p-12 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 italic">"El éxito no viene de una acción de IA aislada, sino de un sistema que trabaja por ti 24/7."</h3>
            <p className="text-white/80">
              En AllenMax nos enfocamos en el ROI. Si una automatización no te ahorra tiempo o no te genera más dinero, no la implementamos.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
