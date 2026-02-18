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
    // 1) Cargar script oficial una sola vez
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }

    // 2) Quitar spinner siempre que aparezca
    const kill = () =>
      document.querySelectorAll('.calendly-spinner').forEach((n) => n.remove());

    kill();
    const obs = new MutationObserver(kill);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* IZQUIERDA */}
          <div className="flex flex-col space-y-12 py-4">
            {/* NUEVA SECCION: SESION ESTRATEGICA */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                En esta sesión estratégica:
              </h2>
              <ul className="space-y-4">
                {strategicSessionItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TEXTO ANTERIOR AJUSTADO (MÁS PEQUEÑO) */}
            <div className="space-y-6 border-t border-border pt-12">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
                Construyamos algo que tenga sentido a largo plazo
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Las decisiones estratégicas marcan la diferencia entre crecer de
                forma puntual y consolidar una posición competitiva real.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Este espacio no está diseñado para vender promesas rápidas, sino
                para iniciar conversaciones con enfoque, criterio y visión
                empresarial.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Si has llegado hasta aquí, probablemente no buscas "probar algo
                nuevo". Buscas hacerlo bien.
              </p>
              <div className="border-l-2 border-primary pl-6 py-1">
                <p className="text-base md:text-lg font-medium italic">
                  Cuando estés listo para estructurar tu crecimiento con claridad y
                  dirección, el siguiente movimiento es simple.
                </p>
              </div>
            </div>
          </div>

          {/* DERECHA - host neutro */}
          <div className="self-start">
            <div
              ref={hostRef}
              className="rounded-lg overflow-hidden bg-transparent"
              style={{
                // IMPORTANTÍSIMO para evitar interferencias por CSS “moderno”
                transform: 'none',
                filter: 'none',
                contain: 'none',
                isolation: 'isolate',
                width: 900,        // ancho real fijo (desktop)
                maxWidth: '100%',  // responsive
                height: 1050,
                marginLeft: 'auto',
              }}
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
