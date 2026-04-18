import React from 'react';
import { Section } from '@/components/Section';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export default function CRMDentalPage() {
  const images = PlaceHolderImages;
  const crmImg = images.find(img => img.id === 'crm-dental');

  return (
    <div className="pt-24 bg-background">
      <Section id="crm-dental-hero" title="CRM Inteligente para Clínicas" subtitle="La herramienta definitiva diseñada para maximizar la conversión de pacientes" dark className="overflow-hidden min-h-[60vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase mb-4">
              Exclusivo para el sector Dental
            </div>
            <h3 className="text-3xl lg:text-5xl font-bold leading-tight">Control total de tu clínica en tiempo real</h3>
            <p className="text-lg text-white/70">Centraliza WhatsApp, redes y llamadas. Mira qué pasa en cada interacción y deja que nuestra IA gestione tu agenda.</p>
            <div className="grid gap-4">
              {[
                { t: "Omnicanalidad Real", d: "WhatsApp, Instagram, Facebook y llamadas telefónicas en una sola bandeja de entrada." },
                { t: "Transcripciones IA", d: "Analiza el rendimiento de tu recepción con transcripciones automáticas de cada llamada." },
                { t: "Agenda Inteligente", d: "Calendario sincronizado que permite a los pacientes agendar citas 24/7 sin intervención humana." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">{item.t}</h4>
                    <p className="text-sm text-white/60">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-10">Solicitar Demo</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
            {crmImg && (
              <Image 
                src={crmImg.imageUrl} 
                alt="CRM Dental Dashboard" 
                width={800} 
                height={600} 
                className="rounded-2xl relative z-10 shadow-2xl border border-white/10"
                data-ai-hint="medical dashboard"
              />
            )}
          </div>
        </div>
      </Section>

      <Section id="ventajas-crm" title="¿Por qué elegir el CRM de AllenMax?" subtitle="Específicamente optimizado para los flujos de trabajo de una clínica dental">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Seguimiento automático de presupuestos no aceptados",
            "Recordatorios de citas vía WhatsApp con confirmación automática",
            "Métricas de conversión por doctor y por tratamiento",
            "Calificación de pacientes (leads) antes de la primera visita",
            "Integración nativa con agentes de voz para confirmación de citas",
            "Panel de control simplificado para el equipo de recepción"
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start p-6 bg-white border rounded-2xl shadow-sm">
              <CheckCircle2 className="text-primary mt-1 shrink-0" />
              <p className="font-medium text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
