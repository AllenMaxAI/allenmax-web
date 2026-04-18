import React from 'react';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Clock,
  AlertCircle,
  LayoutDashboard,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />

      {/* Sección: El Problema (En la Home como gancho) */}
      <Section id="problema" title="¿Por qué tu negocio no crece más?" subtitle="Identificamos las fugas de ingresos más comunes que frenan tu escalabilidad">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Clock className="text-red-500" />, title: "No responder a tiempo", desc: "El 80% de los leads se pierden si no se contactan en los primeros 5 minutos." },
            { icon: <AlertCircle className="text-red-500" />, title: "Mala gestión de leads", desc: "Contactos que se olvidan en Excel o bandejas de entrada saturadas." },
            { icon: <LayoutDashboard className="text-red-500" />, title: "Procesos manuales", desc: "Tu equipo pierde horas en tareas que una IA podría hacer en segundos." },
            { icon: <Calendar className="text-red-500" />, title: "Pérdida de citas", desc: "Falta de seguimiento que se traduce en huecos vacíos en tu agenda." }
          ].map((item, i) => (
            <Card key={i} className="border-none bg-white shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="/servicios">Ver cómo lo solucionamos <ArrowRight size={18} className="ml-2" /></Link>
          </Button>
        </div>
      </Section>

      {/* CTA Final */}
      <Section id="contacto" title="¿Listo para el siguiente nivel?" subtitle="Empieza a automatizar tu negocio y aumenta tus resultados desde hoy">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">Transforma tu empresa con AllenMax</h3>
          <p className="text-white/80 mb-8 text-lg relative z-10">
            Agenda una llamada de 15 minutos para ver cómo podemos ayudarte a escalar mediante IA.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-8 text-xl font-bold relative z-10" asChild>
            <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer">
              Agendar llamada ahora
            </a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
