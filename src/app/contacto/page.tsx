import { Check } from 'lucide-react';
import { CalendlyWidget } from './calendly-widget';

export default function ContactoPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] lg:grid lg:grid-cols-2">
      {/* Left Column: Information */}
      <div className="bg-card text-card-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h2 className="font-bold text-2xl mb-6">En esta sesión estratégica:</h2>
          <ul className="space-y-4 mb-10">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
              <span>Analizaremos tu situación actual</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
              <span>Detectaremos oportunidades de mejora</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
              <span>Evaluaremos cómo estructurar tu sistema de crecimiento</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-1" />
              <span>Resolveremos tus dudas con total claridad</span>
            </li>
          </ul>

          <div className="border-t border-border/50 my-10"></div>

          <h2 className="font-bold text-2xl mb-4">Construyamos algo que tenga sentido a largo plazo</h2>
          <p className="text-muted-foreground mb-4">
            Las decisiones estratégicas marcan la diferencia entre crecer de forma puntual y consolidar una posición competitiva real.
          </p>
          <p className="text-muted-foreground mb-6">
            Este espacio no está diseñado para vender promesas rápidas, sino para iniciar conversaciones con enfoque, criterio y visión empresarial.
          </p>
          <p className="text-muted-foreground mb-10">
            Si has llegado hasta aquí, probablemente no buscas "probar algo nuevo". Buscas hacerlo bien.
          </p>
          
          <div className="border-l-4 border-primary pl-6">
            <p className="text-lg font-medium text-foreground">
              Cuando estés listo para estructurar tu crecimiento con claridad y dirección, el siguiente movimiento es simple.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Calendly Widget */}
      <div className="bg-white flex items-center justify-center p-4 lg:p-8">
        <CalendlyWidget />
      </div>
    </div>
  );
}
