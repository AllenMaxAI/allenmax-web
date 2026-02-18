import { CheckCircle2, Award, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const valuePropositions = [
  'Asegurar que cada oportunidad sea gestionada correctamente',
  'Optimizar procesos comerciales y operativos',
  'Mejorar la conversión y el seguimiento',
  'Consolidar un crecimiento sólido y sostenible',
];

const experienceItems = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Años de Excelencia',
    description: 'Líderes en soluciones de IA y automatización',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Impulsados por la Innovación',
    description: 'Tecnología de alto impacto',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Equipo Profesional',
    description: 'Expertos en desarrollo y automatización',
  },
];

const targetAudience = [
  'Dueños de negocios que quieren romper su techo de crecimiento',
  'Empresas que buscan una máquina de crecimiento rentable funcionando 24/7',
  'Negocios que quieren escalar rápidamente con Inteligencia Artificial',
  'Empresas que buscan potenciar a su equipo con herramientas de IA',
];

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* HERO SECTION */}
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

        {/* EXPERIENCE CARDS SECTION */}
        <section className="mt-32 space-y-16">
          <h2 className="text-center text-xl md:text-2xl font-medium text-foreground/80">
            Más de 5 años de excelencia en IA y desarrollo de software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border/50 p-10 rounded-2xl flex flex-col items-center text-center transition-all hover:border-primary/30"
              >
                <div className="bg-primary/10 p-4 rounded-xl text-primary mb-8">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CITA SECTION */}
        <section className="mt-32 flex justify-center">
            <div className="flex items-center gap-6 border-l-4 border-primary pl-8">
                 <p className="text-xl md:text-2xl font-medium">
                    No implementamos herramientas por separado. <br />
                    <span className="font-normal text-muted-foreground">Creamos estructuras digitales pensadas para generar impacto real.</span>
                </p>
            </div>
        </section>

        {/* TARGET AUDIENCE SECTION */}
        <section className="mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            ¿Es esta solución para ti?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Ayudamos a empresas ambiciosas a alcanzar su máximo potencial. Esto es para ti si eres...
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto text-left">
            {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
                </div>
            ))}
            </div>
            <div className="mt-16">
            <Button asChild size="lg" className="btn-glow px-12 py-6 text-lg">
                <Link href="/contacto">Agenda una Demo Gratis</Link>
            </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
