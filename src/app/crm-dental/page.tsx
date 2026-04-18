
import React from 'react';
import { Section } from '@/components/Section';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CRMDentalPage() {
  const images = PlaceHolderImages;
  const crmImg = images.find(img => img.id === 'crm-dental');

  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Fondo con textura y gradientes para match con Home */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 blur-[180px] rounded-full"></div>

      <Section 
        id="crm-dental-hero" 
        title="CRM Inteligente para Clínicas" 
        subtitle="La herramienta definitiva diseñada para maximizar la conversión de pacientes y optimizar la operativa diaria de tu clínica."
        className="relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-2">
              Sector Dental Premium
            </div>
            
            <h3 className="text-4xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-foreground">
              CONTROL TOTAL <span className="text-primary italic">EN TIEMPO REAL</span>
            </h3>
            
            <p className="text-xl text-foreground/50 font-medium leading-relaxed">
              Centraliza WhatsApp, redes y llamadas en una plataforma unificada. Analiza cada interacción y deja que nuestra IA gestione tu agenda automáticamente.
            </p>

            <div className="grid gap-6">
              {[
                { t: "Omnicanalidad Real", d: "WhatsApp, Instagram y llamadas en una sola bandeja de entrada inteligente." },
                { t: "Transcripciones IA", d: "Análisis automático de llamadas para auditar la calidad de tu recepción." },
                { t: "Agenda Autónoma", d: "Citas confirmadas y agendadas 24/7 sin intervención del equipo." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white border shadow-sm rounded-2xl hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <ShieldCheck className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{item.t}</h4>
                    <p className="text-sm text-foreground/50">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold bg-primary hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group">
                Solicitar demo personalizada
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="relative z-10 p-4 bg-white/50 backdrop-blur-sm border rounded-[40px] shadow-2xl overflow-hidden">
              {crmImg && (
                <Image 
                  src={crmImg.imageUrl} 
                  alt="CRM Dental Dashboard" 
                  width={800} 
                  height={600} 
                  className="rounded-[32px] shadow-lg border"
                  data-ai-hint="medical dashboard"
                />
              )}
            </div>
            
            {/* Decoración técnica */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </Section>

      <Section 
        id="ventajas-crm" 
        title="Diseñado por ingenieros, para doctores" 
        subtitle="No es un CRM genérico. Está optimizado para los flujos de trabajo reales de una clínica dental de alto rendimiento."
        className="relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Seguimiento automático de presupuestos no aceptados",
            "Recordatorios de citas vía WhatsApp con confirmación",
            "Métricas de conversión por doctor y por tratamiento",
            "Calificación de pacientes antes de la primera visita",
            "Integración nativa con agentes de voz inteligentes",
            "Panel de control simplificado para recepción"
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center p-6 bg-white border rounded-2xl shadow-sm hover:border-primary/20 transition-all">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} className="text-green-600" />
              </div>
              <p className="font-bold text-foreground/80 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
