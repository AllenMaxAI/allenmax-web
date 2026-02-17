import { CheckCircle2 } from 'lucide-react';

const valuePropositions = [
  'Asegurar que cada oportunidad sea gestionada correctamente',
  'Optimizar procesos comerciales y operativos',
  'Mejorar la conversión y el seguimiento',
  'Consolidar un crecimiento sólido y sostenible',
];

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nuestra Propuesta de Valor
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              La mejor manera de destacar en tu sector no es hacer más
              acciones aisladas, sino construir una presencia estratégica y
              estructurada.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestras soluciones integran marketing y automatización inteligente
              para:
            </p>
          </div>
          <div className="space-y-4">
            {valuePropositions.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 flex justify-center">
            <div className="flex items-center gap-6 border-l-4 border-primary pl-8">
                 <p className="text-xl md:text-2xl font-medium">
                    No implementamos herramientas por separado. <br />
                    <span className="font-normal text-muted-foreground">Creamos estructuras digitales pensadas para generar impacto real.</span>
                </p>
            </div>
        </section>
      </div>
    </div>
  );
}