'use client';

import React from 'react';
import { Section } from '@/components/Section';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Calendar, 
  TrendingUp, 
  LayoutDashboard, 
  Users,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function CRMDentalPage() {
  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Sistema de Fondos y Texturas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/5 blur-[180px] rounded-full"></div>

      {/* HERO */}
      <section className="relative z-10 pt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/70">Sector Dental Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-foreground uppercase italic">
              AUTOMATIZA TU <br />
              <span className="text-primary not-italic">CLÍNICA CON IA</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/50 font-medium max-w-2xl leading-relaxed">
              Convierte tu clínica en un sistema inteligente que gestiona pacientes, citas y comunicación de forma automática, 24/7.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <Button size="lg" className="h-16 rounded-3xl px-10 text-lg font-bold shadow-xl shadow-primary/10 group" asChild>
                <Link href="/contacto">
                  Agendar llamada <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="flex flex-col border-l border-foreground/10 pl-8">
                <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mb-1">KPI Principal</span>
                <span className="text-sm font-bold text-foreground/80">Menos carga. Más citas. Más ingresos.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: EL CEREBRO (CRM) */}
      <Section id="crm-core" title="" className="!py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full"></div>
             <div className="relative bg-white p-2 rounded-[40px] shadow-2xl border border-white">
                <div className="bg-slate-50 rounded-[32px] p-10 border border-slate-100 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400/20 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400/20 rounded-full"></div>
                    </div>
                    <Users className="text-primary/40" size={20} />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-primary/10 rounded-full"></div>
                    <div className="h-4 w-full bg-slate-100 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-none uppercase">
              El cerebro <br /><span className="text-primary">de tu gestión</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed font-medium">
              Nuestro CRM no es solo una base de datos; es el motor que controla cada interacción con el paciente desde el primer contacto hasta el alta.
            </p>
            <div className="grid gap-3">
              {[
                "Control total del ciclo de vida del paciente",
                "Seguimiento automático de presupuestos",
                "Historial unificado de comunicaciones",
                "Reportes de rendimiento en tiempo real"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="font-bold text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 2: AUTOMATIZACIÓN (CHATBOTS) */}
      <div className="bg-white/50 backdrop-blur-sm border-y border-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-none uppercase">
                Comunicación <br /><span className="text-primary">inteligente</span>
              </h2>
              <p className="text-lg text-foreground/50 leading-relaxed font-medium">
                La IA integrada en el CRM responde dudas, califica pacientes y agenda citas automáticamente a través de WhatsApp e Instagram.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "WhatsApp", icon: <MessageSquare size={16} /> },
                  { name: "Redes Sociales", icon: <Users size={16} /> },
                  { name: "Captación Web", icon: <LayoutDashboard size={16} /> },
                  { name: "Follow-up", icon: <TrendingUp size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="text-primary">{item.icon}</div>
                    <span className="font-bold text-sm text-foreground/80">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 rounded-[40px] border-none shadow-2xl bg-slate-900 text-white space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><Sparkles className="text-primary" /> Eficiencia 24/7</h3>
                <ul className="space-y-4">
                  {[
                    "Cero tiempos de espera para el paciente",
                    "Captación de leads en horario no comercial",
                    "Filtrado automático de urgencias reales",
                    "Sincronización instantánea con la agenda"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      {text}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: AGENTE DE VOZ */}
      <Section id="voice-agent" title="" className="!py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="w-64 h-64 bg-primary/5 rounded-full flex items-center justify-center relative">
               <div className="absolute inset-0 border border-primary/10 rounded-full animate-ping opacity-20"></div>
               <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border border-slate-100">
                  <Phone className="text-primary animate-pulse" size={32} />
               </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-none uppercase">
              Recepción <br /><span className="text-primary">100% autónoma</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed italic border-l-4 border-primary/20 pl-6">
              "Como una recepcionista, pero automática. Tu clínica responde llamadas sin necesidad de personal."
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Atención Inbound inmediata",
                "Llamadas Outbound de recordatorio",
                "Agendación directa por voz",
                "Resolución de dudas frecuentes"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-sm text-foreground/70">
                  <CheckCircle2 className="text-primary" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 4: BENEFICIOS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl space-y-6">
             <Calendar className="text-primary" size={32} />
             <h3 className="text-2xl font-black uppercase tracking-tight">Agenda siempre llena</h3>
             <p className="text-foreground/50 text-sm leading-relaxed">El CRM optimiza los huecos en tiempo real, moviendo citas y enviando recordatorios para eliminar el absentismo.</p>
             <ul className="space-y-2 pt-4">
                {["Recordatorios por SMS/WhatsApp", "Reprogramación autónoma", "Confirmaciones digitales", "Gestión de lista de espera"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                    <div className="w-1 h-1 bg-primary rounded-full"></div> {t}
                  </li>
                ))}
             </ul>
          </div>
          <div className="p-10 bg-slate-900 text-white rounded-[40px] shadow-2xl space-y-6">
             <TrendingUp className="text-primary" size={32} />
             <h3 className="text-2xl font-black uppercase tracking-tight">Retorno Directo</h3>
             <p className="text-white/40 text-sm leading-relaxed">No pierdas ni una oportunidad de facturación. El sistema reactiva pacientes antiguos automáticamente.</p>
             <div className="grid gap-2 pt-4">
               {[
                 "Recuperación de presupuestos",
                 "Campañas de reactivación",
                 "Fidelización automática",
                 "Control de cobros pendientes"
               ].map((t, i) => (
                 <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                   <span className="font-bold text-xs text-white/80">{t}</span>
                   <ArrowRight size={14} className="text-primary" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 5: IMPLEMENTACIÓN */}
      <Section id="impl" title="Instalación sin fricción" subtitle="Configuramos, conectamos y activamos el sistema por ti">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { t: "Configuración", d: "Adaptamos el CRM a tu protocolo clínico" },
            { t: "Integración", d: "Conectamos WhatsApp y tus calendarios" },
            { t: "Lanzamiento", d: "Activamos la IA y empezamos a agendar" }
          ].map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="text-4xl font-black text-primary/10">{i + 1}</div>
              <h4 className="font-bold uppercase tracking-tight">{step.t}</h4>
              <p className="text-xs text-foreground/50 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[60px] p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight uppercase italic">
              El CRM dental que <br />
              <span className="not-italic text-white/40">trabaja por ti</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Escala tu clínica dental con inteligencia operativa real.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-20 rounded-3xl px-12 text-2xl font-black group" asChild>
              <Link href="/contacto">
                Agendar llamada <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={28} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}