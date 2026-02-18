import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const serviceCategories = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Marketing Digital',
    description: 'Estrategias probadas para construir tu presencia online, atraer a tu audiencia y convertir visitantes en clientes.',
    href: '/servicios/marketing-digital',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Inteligencia Artificial',
    description: 'Soluciones de IA a medida para automatizar procesos, potenciar la toma de decisiones y desbloquear un rendimiento superior.',
    href: '/servicios/ia',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            La Sinergia Perfecta: Marketing Digital e Inteligencia Artificial
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-muted-foreground leading-relaxed">
            En AllenMax, no solo aplicamos técnicas de marketing digital; las reinventamos con el poder de la Inteligencia Artificial. Esta combinación única nos permite crear estrategias hiper-personalizadas, optimizar cada campaña en tiempo real y descubrir oportunidades que otros no pueden ver. El resultado es un crecimiento exponencial para tu negocio.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceCategories.map((category) => (
              <Card key={category.title} className="text-center flex flex-col justify-between p-8">
                  <div>
                    <div className="flex justify-center mb-6">{category.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>
                  <div className="mt-8">
                    <Button asChild className="w-full btn-glow">
                        <Link href={category.href}>Saber más</Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}