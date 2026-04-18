
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

const PartnersSection = () => {
  const partners = [
    { name: 'OpenAI', logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9089 6.0462 6.0462 0 0 0-3.9015-3.123 5.98 5.98 0 0 0-5.0683.9689 6.0405 6.0405 0 0 0-4.445 0 5.9721 5.9721 0 0 0-5.0683-.9689 6.0522 6.0522 0 0 0-3.9015 3.123 5.9675 5.9675 0 0 0-.5153 4.9089 6.0462 6.0462 0 0 0 1.2592 5.3488 5.9847 5.9847 0 0 0 .5153 4.9089 6.0462 6.0462 0 0 0 3.9015 3.123 5.98 5.98 0 0 0 5.0683-.9689 6.0405 6.0405 0 0 0 4.445 0 5.9721 5.9721 0 0 0 5.0683.9689 6.0522 6.0522 0 0 0 3.9015-3.123 5.9675 5.9675 0 0 0 .5153-4.9089 6.0462 6.0462 0 0 0-1.2592-5.3488zm-5.759 8.1348l-4.7813-2.7602V10.134l4.7813-2.7602 4.7812 2.7602v5.0617l-4.7812 2.7602zm-1.516-12.915l4.7812 2.7602v1.516l-4.7812-2.7602-4.7813 2.7602v-1.516l4.7813-2.7602zm-6.0405 3.4938l4.7813 2.7602v5.5204l-4.7813-2.7602V8.5347zm0 10.134l4.7813-2.7602V14.393l-4.7813 2.7602v-1.516l4.7813-2.7602v-1.516l-4.7813 2.7602v1.516l4.7813 2.7602zm0-6.6343v-1.516l4.7813-2.7602 4.7813 2.7602v1.516l-4.7813-2.7602-4.7813 2.7602z"/>
      </svg>
    )},
    { name: 'n8n', logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-4-9h1.5v2H8v-2zm3 0h1.5v2H11v-2zm3 0h1.5v2H14v-2z"/>
      </svg>
    )},
    { name: 'Python', logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 2c-2.4 0-4.4.2-5.7.5-1.5.3-2.6.9-3.4 1.7-.8.8-1.2 1.8-1.4 3.1-.2 1.3-.2 2.9-.2 4.7 0 1.8 0 3.4.2 4.7.2 1.3.6 2.3 1.4 3.1.8.8 1.9 1.4 3.4 1.7 1.3.3 3.3.5 5.7.5s4.4-.2 5.7-.5c1.5-.3 2.6-.9 3.4-1.7.8-.8 1.2-1.8 1.4-3.1.2-1.3.2-2.9.2-4.7 0-1.8 0-3.4-.2-4.7-.2-1.3-.6-2.3-1.4-3.1-.8-.8-1.9-1.4-3.4-1.7-1.3-.3-3.3-.5-5.7-.5zm-4 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm8 10c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
      </svg>
    )},
    { name: 'Retell AI', logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2zm7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2z"/>
      </svg>
    )},
    { name: 'Airtable', logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 3.5L3.5 8.5v7l9 5 9-5v-7l-9-5zm-7.3 5.4l7.3-4 7.3 4-7.3 4-7.3-4zm7.3 10l-7.3-4V10.2l7.3 4v4.7zm1.7-4.7l7.3-4v4.7l-7.3 4V14.2z"/>
      </svg>
    )},
    { name: 'Microsoft', logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z"/>
      </svg>
    )}
  ];

  return (
    <div className="py-12 border-y bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-3 group cursor-default">
              <div className="text-foreground transition-transform group-hover:scale-110 duration-300">
                {p.logo}
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground/80">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      
      <PartnersSection />

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
