import { ContactForm } from './contact-form';
import { Mail, Phone } from 'lucide-react';

export default function ContactoPage() {
  return (
    <>
      <section className="py-20 md:py-32 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Hablemos de tu Crecimiento</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Estamos listos para escuchar tus desafíos y diseñar una solución que impulse tu negocio.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-2">Envíanos un Mensaje</h2>
              <p className="text-muted-foreground mb-8">Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.</p>
              <ContactForm />
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
              <p className="text-muted-foreground mb-8">
                Prefieres otro método? Aquí tienes nuestras vías de contacto directo.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">Envíanos tu consulta</p>
                    <a href="mailto:hola@synapsegrowth.com" className="text-primary hover:underline">
                      hola@synapsegrowth.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Agendar Llamada</h3>
                    <p className="text-muted-foreground">Elige el mejor momento para ti</p>
                    <a href="/contacto" className="text-primary hover:underline">
                      Calendario de reuniones
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
