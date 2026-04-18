
import React from 'react';
import { Section } from '@/components/Section';
import { TrendingUp, Clock, Wallet, BarChart, Heart } from 'lucide-react';

export default function BeneficiosPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Section id="beneficios" title="Resultados tangibles" subtitle="Cómo la automatización con AllenMax impacta directamente en tu cuenta de resultados">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Aumento de Conversiones", 
              icon: <TrendingUp className="text-primary" />, 
              desc: "Al responder en segundos y no en horas, capturamos el interés en su punto máximo, aumentando hasta un 40% la tasa de cierre." 
            },
            { 
              title: "Ahorro de Tiempo Crítico", 
              icon: <Clock className="text-primary" />, 
              desc: "Eliminamos tareas repetitivas y manuales, permitiendo que tu equipo se enfoque en lo que realmente importa: atender al cliente." 
            },
            { 
              title: "Reducción de Costes", 
              icon: <Wallet className="text-primary" />, 
              desc: "Una IA puede gestionar el trabajo de varios recepcionistas por una fracción del coste, operando 24/7 sin descanso." 
            },
            { 
              title: "Escalabilidad Ilimitada", 
              icon: <BarChart className="text-primary" />, 
              desc: "Aumenta tu volumen de leads sin necesidad de contratar más personal. Tu sistema inteligente crece a la par de tu negocio." 
            },
            { 
              title: "Experiencia del Cliente", 
              icon: <Heart className="text-primary" />, 
              desc: "Proporcionamos una atención instantánea y precisa, mejorando la percepción de profesionalidad y modernidad de tu marca." 
            }
          ].map((beneficio, i) => (
            <div key={i} className="p-8 bg-white border rounded-3xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                {beneficio.icon}
              </div>
              <h4 className="font-bold text-xl mb-4">{beneficio.title}</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">{beneficio.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary text-white p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4">No es magia, es Ingeniería de Automatización</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Nuestros clientes reportan una media de recuperación de la inversión inicial en menos de 90 días gracias a la eficiencia operativa ganada.
          </p>
        </div>
      </Section>
    </div>
  );
}
