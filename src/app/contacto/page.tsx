
"use client";

import React from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <div className="pt-24 bg-background min-h-screen">
      <Section 
        id="contacto-hero" 
        title="Hablemos de ingeniería" 
        subtitle="Diseñamos el sistema que escalará tu negocio. Cuéntanos tu reto y te daremos la arquitectura técnica para superarlo."
      >
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Información Directa</h3>
              <p className="text-foreground/50">Estamos en Alicante, pero nuestra tecnología no tiene fronteras.</p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: <Mail className="text-primary" />, title: "Email", value: "hola@allenmax.ai" },
                { icon: <Phone className="text-primary" />, title: "Teléfono", value: "+34 600 000 000" },
                { icon: <MapPin className="text-primary" />, title: "Ubicación", value: "Alicante, España" },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm bg-white hover:shadow-md transition-all">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30">{item.title}</p>
                      <p className="font-bold text-lg">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-8 bg-primary rounded-3xl text-white space-y-6 shadow-xl shadow-primary/20">
              <Calendar className="w-10 h-10" />
              <h4 className="text-xl font-bold">¿Prefieres una videollamada?</h4>
              <p className="text-white/70 text-sm">Agenda 15 minutos directamente en nuestro Calendly para analizar la viabilidad de tu proyecto.</p>
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold h-14 rounded-2xl" asChild>
                <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                  Agendar consulta estratégica
                </a>
              </Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 rounded-[40px] border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40 px-1">Nombre Completo</label>
                    <Input placeholder="Ej. Juan Pérez" className="h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/40 px-1">Email Corporativo</label>
                    <Input type="email" placeholder="juan@empresa.com" className="h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-primary/20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 px-1">Tu Negocio / Sector</label>
                  <Input placeholder="Ej. Clínica Dental, E-commerce, Agencia..." className="h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-primary/20" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 px-1">¿Qué proceso quieres automatizar?</label>
                  <Textarea placeholder="Cuéntanos brevemente tus cuellos de botella..." className="min-h-[150px] rounded-3xl bg-gray-50 border-none focus-visible:ring-primary/20 resize-none" />
                </div>

                <Button type="submit" className="w-full h-16 rounded-2xl text-lg font-bold group">
                  Enviar Mensaje
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-[10px] text-center text-foreground/30">
                  Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para fines comerciales.
                </p>
              </form>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
