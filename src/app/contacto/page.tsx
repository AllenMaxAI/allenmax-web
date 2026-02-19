'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const strategicSessionItems = [
  "Analizaremos tu situación actual",
  "Detectaremos oportunidades de mejora",
  "Evaluaremos cómo estructurar tu sistema de crecimiento",
  "Resolveremos tus dudas con total claridad",
];

export default function ContactoPage() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }

    // Limpieza agresiva de elementos de carga de Calendly
    const kill = () => {
      document.querySelectorAll('.calendly-spinner').forEach((n) => n.remove());
    };

    kill();
    const obs = new MutationObserver(kill);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-24 md:pb-32 min-h-screen bg-background">
      <style jsx global>{`
        /* Ocultar scrollbars de Calendly de forma absoluta */
        html, body {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }

        .calendly-inline-widget, 
        .calendly-inline-widget *,
        [data-url*="calendly.com"],
        iframe[src*="calendly.com"] {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow: hidden !important;
          border: none !important;
        }
        
        iframe[src*="calendly.com"]::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }

        /* Asegurar que el contenedor interno de Calendly no genere scroll */
        .calendly-inline-widget > div {
          height: 100% !important;
          overflow: hidden !important;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4">
        
        {/* TÍTULO HERO CENTRADO */}
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hablemos de tu crecimiento
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Agenda una sesión estratégica para estructurar tu sistema de captación y escalado.
          </p>
        </div>

        <div className="grid gap-60 items-start md:grid-cols-[1fr_1.2fr]">
          
          {/* IZQUIERDA: CONTENIDO ESTRATÉGICO */}
          <div className="space-y-12">
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
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
                Construyamos algo que tenga sentido a largo plazo
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  Las decisiones estratégicas marcan la diferencia entre crecer
                  de forma puntual y consolidar una posición competitiva real.
                </p>
                <p className="text-base md:text-lg">
                  Este espacio no está diseñado para vender promesas rápidas,
                  sino para iniciar conversaciones con enfoque y visión empresarial.
                </p>
              </div>

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

          {/* DERECHA: MÁS PEQUEÑO SIN SCROLL (NÍTIDO) */}
          <div className="relative">
            {/* escala visual */}
            <div className="origin-top md:scale-[0.sssssssssssssssssss]">
              {/* render size grande para evitar blur */}
              <div
                ref={hostRef}
                className="rounded-2xl overflow-hidden bg-white border border-border shadow-2xl"
                style={{
                  width: '100%',
                  height: 900, // = 1050 / 0.85
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              >
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1"
                  style={{
                    width: '100%',
                    height: '1235px',
                    background: '#ffffff',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
