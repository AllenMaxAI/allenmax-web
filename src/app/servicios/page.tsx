import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Target } from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'Servicios de Inteligencia Artificial',
    description: 'Automatiza, optimiza y revoluciona tu negocio con el poder de la IA.',
    href: '/servicios/ia',
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Servicios de Marketing Digital',
    description: 'Atrae, convierte y fideliza clientes con estrategias digitales de alto impacto.',
    href: '/servicios/marketing-digital',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="py-20 md:py-32 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Nuestras Soluciones para tu Crecimiento</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Combinamos tecnología de vanguardia y estrategias probadas para ofrecerte resultados excepcionales.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceCategories.map((category) => (
              <Link href={category.href} key={category.title} className="group block">
                <Card className="h-full bg-card/80 backdrop-blur-sm border-white/10 text-left hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                  <CardHeader className="p-8">
                    <div className="mb-4">{category.icon}</div>
                    <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                     <div className="mt-6 flex items-center text-primary font-semibold">
                      Ver servicios
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
