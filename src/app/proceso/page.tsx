import React from 'react';
import { Section } from '@/components/Section';

export default function ProcesoPage() {
  return (
    <div className="pt-24 bg-background">
      <Section id="proceso" title="Tu camino a la automatización" subtitle="Un método probado en 4 pasos para transformar los resultados de tu negocio">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "01", t: "Análisis", d: "Auditamos tu negocio a fondo para detectar cuellos de botella y fugas de ingresos." },
            { n: "02", t: "Diseño", d: "Creamos el mapa estratégico de tu nuevo sistema inteligente y flujos de trabajo." },
            { n: "03", t: "Implementación", d: "Integramos las herramientas de IA, configuramos agentes y formamos a tu equipo." },
            { n: "04", t: "Optimización", d: "Monitorizamos y mejoramos el rendimiento basándonos en datos reales para maximizar el ROI." }
          ].map((step, i) => (
            <div key={i} className="relative p-8 bg-white rounded-2xl border shadow-sm group hover:border-primary/50 transition-all">
              <span className="text-7xl font-black text-primary/10 absolute top-4 right-4 z-0 group-hover:text-primary/20 transition-colors">{step.n}</span>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-4">{step.t}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-accent/30 rounded-3xl border border-accent">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Por qué nuestro proceso funciona?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary font-bold text-lg mb-2">Personalizado</div>
              <p className="text-sm text-foreground/70">No aplicamos soluciones genéricas, cada flujo se adapta a tu operativa real.</p>
            </div>
            <div className="text-center">
              <div className="text-primary font-bold text-lg mb-2">Escalable</div>
              <p className="text-sm text-foreground/70">Sistemas diseñados para crecer contigo sin aumentar tus costes operativos.</p>
            </div>
            <div className="text-center">
              <div className="text-primary font-bold text-lg mb-2">Orientado a Datos</div>
              <p className="text-sm text-foreground/70">Cada decisión se basa en métricas de conversión y eficiencia detectadas por la IA.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
