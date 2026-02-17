'use client';

import { InlineWidget } from 'react-calendly';

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Construyamos algo que tenga sentido a largo plazo
          </h1>
          <p className="text-lg text-muted-foreground">
            Las decisiones estratégicas marcan la diferencia entre crecer de
            forma puntual y consolidar una posición competitiva real.
          </p>
          <p className="text-lg text-muted-foreground">
            Este espacio no está diseñado para vender promesas rápidas, sino
            para iniciar conversaciones con enfoque, criterio y visión
            empresarial.
          </p>
          <p className="text-lg text-muted-foreground">
            Si has llegado hasta aquí, probablemente no buscas "probar algo
            nuevo". Buscas hacerlo bien.
          </p>
          <div className="border-l-4 border-primary pl-6">
            <p className="text-xl font-medium">
              Cuando estés listo para estructurar tu crecimiento con claridad y
              dirección, el siguiente movimiento es simple.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <InlineWidget
            url="https://calendly.com/agency-allenmax/reunion-allenmax"
            styles={{ height: '700px' }}
          />
        </div>
      </div>
    </div>
  );
}
