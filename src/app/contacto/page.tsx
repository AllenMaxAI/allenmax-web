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

    const kill = () =>
      document.querySelectorAll('.calendly-spinner').forEach((n) => n.remove());

    kill();
    const obs = new MutationObserver(kill);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        
        {/* TÍTULO HERO */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            Hablemos de tu crecimiento
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Agenda una sesión estratégica para estructurar tu sistema de captación y escalado.
          </p>
        </div>

        <div className="grid gap-12 items-start md:grid-cols-[480px_1fr]">
          
          {/* IZQUIERDA ESCALADA */}
          <div className="py-12 md:py-0">
            <div className="md:origin-top md:scale-[0.9]">
              <div className="flex flex-col space-y-10">

                {/* SESIÓN ESTRATÉGICA */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground">
                    En esta sesión estratégica:
                  </h2>
                  <ul className="space-y-4">
                    {strategicSessionItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-base md:text-sm font-medium text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BLOQUE TEXTO */}
                <div className="space-y-4 border-t border-border pt-12">
                  <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight">
                    Construyamos algo que tenga sentido a largo plazo
                  </h1>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Las decisiones estratégicas marcan la diferencia entre crecer
                    de forma puntual y consolidar una posición competitiva real.
                  </p>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Este espacio no está diseñado para vender promesas rápidas,
                    sino para iniciar conversaciones con enfoque, criterio y visión empresarial.
                  </p>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Si has llegado hasta aquí, probablemente no buscas "probar algo nuevo".
                    Buscas hacerlo bien.
                  </p>

                  {/* ESPACIADO SEPARADO DEL BORDE */}
                  <div className="pt-14">
                    <div className="border-l-2 border-primary pl-6 py-1">
                      <p className="text-base md:text-md font-medium italic">
                        Cuando estés listo para estructurar tu crecimiento con claridad y
                        dirección, el siguiente movimiento es simple.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* DERECHA ESCALADA */}
          <div className="md:origin-top md:scale-[0.8]">
            <div
              ref={hostRef}
              className="rounded-lg overflow-hidden bg-transparent"
              style={{
                transform: 'none',
                filter: 'none',
                contain: 'none',
                width: 750,
                maxWidth: '100%',
                height: 1050,
                marginLeft: 'auto',
              }}
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/agency-allenmax/reunion-allenmax?locale=es&hide_gdpr_banner=1"
                style={{ width: '80%', height: '100%' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
