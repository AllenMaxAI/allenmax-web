'use client';

import { Check } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const strategicSessionItems = [
  "Analizaremos tu situación actual",
  "Detectaremos oportunidades de mejora",
  "Evaluaremos cómo estructurar tu sistema de crecimiento",
  "Resolveremos tus dudas con total claridad",
];

export default function ContactoPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-20 items-start md:grid-cols-[1fr_1.2fr]">
            
            {/* Columna Izquierda */}
            <div className="space-y-12">
              <div className="space-y-1 mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Sesión Estratégica</span>
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1]">
                    Hablemos de tu <br />
                    <span className="text-primary">crecimiento.</span>
                  </h1>
                  <div className="h-1.5 w-20 bg-primary rounded-full" />
                </div>
              </div>

              <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
                Agenda una sesión estratégica para estructurar tu sistema de captación y escalado con un enfoque de alto rendimiento.
              </p>

              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  En esta sesión estratégica:
                </h2>
                <ul className="space-y-5">
                  {strategicSessionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg font-medium text-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 border-t border-border pt-12">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Construyamos algo que tenga sentido a largo plazo
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Las decisiones estratégicas marcan la diferencia entre crecer
                  de forma puntual y consolidar una posición competitiva real.
                </p>

                <div className="pt-8">
                  <div className="border-l-4 border-primary pl-6 py-1">
                    <p className="text-lg font-medium italic text-foreground/80">
                      Cuando estés listo para estructurar tu crecimiento con claridad,
                      el siguiente movimiento es simple.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Calendly */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-white border border-border shadow-2xl min-h-[700px]">
                <InlineWidget 
                  url="https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1"
                  styles={{
                    height: '1100px',
                    width: '100%',
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '2563eb',
                    textColor: '000000',
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
