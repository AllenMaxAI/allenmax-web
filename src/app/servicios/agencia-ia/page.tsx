'use client';

import React, { useState, useEffect } from 'react';
import { BrainCircuit, Cpu, Zap, Layers, BarChart3, ShieldCheck, ChevronRight, MessageSquare, Bot, Workflow, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CtaSection } from '@/components/layout/CtaSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AgenciaIAPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col bg-[#020817]">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-40 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_90%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className={cn(
            "max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ease-out",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Cpu className="h-3 w-3" /> Ingeniería de Sistemas Inteligentes
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white">
              Agencia de <span className="text-primary">Inteligencia Artificial</span> <br /> 
              y Estrategia de Sistemas.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              No instalamos herramientas. Diseñamos arquitecturas de IA integradas en el ADN de tu negocio para maximizar la rentabilidad y el escalado.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN ESTRATÉGICA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">Evolución, no solo Automatización.</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                En AllenMax entendemos la Inteligencia Artificial como el motor de una transformación estructural. Mientras la mayoría de agencias se centran en implementar prompts básicos o chatbots aislados, nosotros abordamos la IA desde una perspectiva de ingeniería de sistemas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro enfoque combina la potencia del procesamiento de lenguaje natural con la lógica de negocio profunda. Creamos ecosistemas donde los datos no solo se almacenan, sino que se procesan autónomamente para generar valor, reduciendo la fricción operativa y eliminando los cuellos de botella humanos en tareas repetitivas de alto volumen.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <BrainCircuit className="text-primary h-6 w-6" /> 
                ¿Qué es AllenMax IA?
              </h3>
              <p className="text-muted-foreground italic">
                "Es la intersección entre la visión estratégica de negocio y la capacidad técnica de despliegue de modelos avanzados. Ayudamos a empresas a dejar de ser reactivas para convertirse en organizaciones impulsadas por sistemas inteligentes."
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl font-bold text-primary">10x</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Eficiencia Operativa</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl font-bold text-primary">24/7</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Sistemas Activos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-4 max-w-5xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">El fin del crecimiento lineal.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Muchas empresas se encuentran atrapadas en una estructura donde para crecer necesitan contratar proporcionalmente más personal. La IA rompe esta limitación.
          </p>
        </div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fricción Operativa",
                desc: "Equipos saturados por tareas administrativas, gestión de leads y entrada de datos que no aportan valor estratégico real.",
                icon: <Zap className="h-5 w-5" />
              },
              {
                title: "Pérdida de Oportunidades",
                desc: "Respuestas tardías a clientes potenciales o seguimientos inexistentes debido a la incapacidad humana de gestionar el volumen.",
                icon: <MessageSquare className="h-5 w-5" />
              },
              {
                title: "Decisiones Ciegas",
                desc: "Incapacidad para procesar grandes volúmenes de datos de clientes y mercado, perdiendo tendencias clave para el negocio.",
                icon: <Search className="h-5 w-5" />
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#020817] hover:border-primary/30 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO LO IMPLEMENTAMOS */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Arquitectura de Alta Fidelidad.</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-8" />
          </div>
          
          <div className="space-y-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Fase 01</span>
                <h3 className="text-3xl font-bold text-white">RAG y Bases de Conocimiento Propias</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Implementamos sistemas de **Retrieval Augmented Generation (RAG)**. Esto permite que la IA no responda basándose en conocimientos genéricos de internet, sino en los manuales, catálogos, políticas y datos específicos de tu empresa.
                </p>
                <ul className="space-y-4 pt-4">
                  {['Seguridad de datos de grado empresarial', 'Respuestas con contexto real y preciso', 'Actualización constante de información'].map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary-foreground/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-video bg-[#020817] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                   <div className="p-8 text-center">
                      <Bot className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
                      <p className="text-sm font-mono text-muted-foreground">AGENTS_ORCHESTRATION_LAYER_ACTIVE</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary-foreground/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-video bg-[#020817] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                   <div className="p-8 text-center">
                      <Workflow className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
                      <p className="text-sm font-mono text-muted-foreground">NEURAL_FLUX_INTEGRATION_SYNC</p>
                   </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Fase 02</span>
                <h3 className="text-3xl font-bold text-white">Workflows de Agentes Autónomos</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Diseñamos redes de agentes que "colaboran" entre sí. Un agente puede calificar un lead, otro buscar disponibilidad en el CRM y un tercero redactar una propuesta personalizada. Todo ocurre en segundos, sin intervención humana.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-4">
                   <div className="p-4 border border-white/5 bg-white/[0.02] rounded-xl">
                      <h4 className="font-bold text-white mb-1">Escale Infinito</h4>
                      <p className="text-xs text-muted-foreground">Gestione 10 o 10.000 leads con el mismo coste operativo.</p>
                   </div>
                   <div className="p-4 border border-white/5 bg-white/[0.02] rounded-xl">
                      <h4 className="font-bold text-white mb-1">Cero Errores</h4>
                      <p className="text-xs text-muted-foreground">Elimine el factor de fatiga y distracción humana.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS REALES */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Rentabilidad Superior",
                desc: "Reduce el coste por adquisición (CPA) y los gastos operativos fijos.",
                icon: <BarChart3 />
              },
              {
                title: "Velocidad de Respuesta",
                desc: "Atiende a tus prospectos en milisegundos, el momento de mayor intención.",
                icon: <Zap />
              },
              {
                title: "Soberanía de Datos",
                desc: "Toda la IA corre bajo tus parámetros y control de seguridad.",
                icon: <ShieldCheck />
              },
              {
                title: "Escalabilidad Real",
                desc: "Tu capacidad operativa deja de depender de las horas hombre disponibles.",
                icon: <Layers />
              }
            ].map((benefit, i) => (
              <div key={i} className="space-y-4">
                <div className="text-primary h-8 w-8">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-white">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Preguntas sobre IA Estratégica</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary text-left">¿La IA sustituirá a mi equipo actual?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Nuestra visión no es la sustitución, sino la **amplificación**. La IA se encarga de las tareas de bajo valor, repetitivas y de gran escala, permitiendo que tu equipo se centre en el cierre de ventas, la creatividad y la estrategia de alto nivel. Una empresa con IA es un equipo con superpoderes, no uno más pequeño.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary text-left">¿Qué tan seguros están mis datos comerciales?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Totalmente. Utilizamos arquitecturas cerradas y modelos que no entrenan con tus datos privados. Implementamos capas de seguridad empresarial para asegurar que tu propiedad intelectual y la información de tus clientes permanezcan bajo tu control absoluto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary text-left">¿Cuánto tiempo tarda el despliegue de un sistema de IA?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Depende de la complejidad de la arquitectura. Un sistema de atención y calificación con RAG puede estar operativo en 3-4 semanas. Proyectos de automatización integral de flujos de trabajo suelen requerir entre 8 y 12 semanas para asegurar un refinamiento óptimo basado en datos reales.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary text-left">¿Es necesario tener conocimientos técnicos previos?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Para nada. En AllenMax entregamos soluciones "llave en mano". Nosotros nos encargamos de la ingeniería, la infraestructura y el mantenimiento. Tu equipo solo interactúa con el sistema final, diseñado para ser intuitivo y eficiente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}