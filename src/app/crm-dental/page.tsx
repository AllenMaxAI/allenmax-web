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
  ShieldCheck,
  Zap,
  Target,
  Users,
  Cpu,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function CRMDentalPage() {
  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Sistema de Fondos y Texturas (Coherente con Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/5 blur-[180px] rounded-full"></div>

      {/* HERO: Limpio y Profesional (Basado en captura) */}
      <section className="relative z-10 pt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/70">Sector Dental Premium</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-foreground uppercase italic">
              AUTOMATIZA TU <br />
              <span className="text-primary not-italic">CLÍNICA AL 100%</span>
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

      {/* SECCIÓN 1: EL CEREBRO (CRM) - Intercalado Izquierda */}
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
              🧠 Un CRM diseñado <br /><span className="text-primary">para tu clínica</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed font-medium">
              Centraliza toda tu operación en un solo lugar. Nuestro CRM personalizado te permite una gestión con precisión quirúrgica.
            </p>
            <div className="grid gap-3">
              {[
                "Gestionar todos tus pacientes",
                "Ver el estado de cada cita",
                "Controlar pagos y seguimientos",
                "Toda la información organizada y accesible"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="font-bold text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-primary/60 italic">Todo adaptado exactamente a cómo funciona tu clínica</p>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 2: AUTOMATIZACIÓN (CHATBOTS) - Intercalado Derecha */}
      <div className="bg-white/50 backdrop-blur-sm border-y border-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-none uppercase">
                🤖 Automatización <br /><span className="text-primary">completa con IA</span>
              </h2>
              <p className="text-lg text-foreground/50 leading-relaxed font-medium">
                Chatbots en todos tus canales. Atiende a tus pacientes automáticamente desde WhatsApp, Instagram, Facebook y tu propia web.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "WhatsApp", icon: <MessageSquare size={16} /> },
                  { name: "Instagram", icon: <Target size={16} /> },
                  { name: "Facebook", icon: <Users size={16} /> },
                  { name: "Página web", icon: <LayoutDashboard size={16} /> }
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
                <h3 className="text-xl font-bold flex items-center gap-2"><Sparkles className="text-primary" /> ¿Qué hacen?</h3>
                <ul className="space-y-4">
                  {[
                    "Responden dudas al instante",
                    "Captan nuevos pacientes",
                    "Filtran y califican leads",
                    "Gestionan conversaciones sin intervención"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Estado: Online</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-primary rounded-full animate-ping"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: AGENTE DE VOZ - Intercalado Izquierda */}
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
              📞 Agente de voz <br /><span className="text-primary">con IA</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed italic border-l-4 border-primary/20 pl-6">
              "Como una recepcionista, pero automática. Tu clínica responde llamadas sin necesidad de personal."
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Atiende llamadas entrantes",
                "Realiza llamadas salientes",
                "Agenda citas automáticamente",
                "Resuelve preguntas por teléfono"
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

      {/* SECCIÓN 4: CITAS Y SEGUIMIENTO - Cards Limpias */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl space-y-6">
             <Calendar className="text-primary" size={32} />
             <h3 className="text-2xl font-black uppercase tracking-tight">📅 Gestión automática de citas</h3>
             <p className="text-foreground/50 text-sm leading-relaxed">Olvídate de gestionar agendas manualmente. El sistema crea, cambia y recuerda citas automáticamente.</p>
             <ul className="space-y-2 pt-4">
                {["Crea citas automáticamente", "Permite cambiarlas o cancelarlas", "Envía recordatorios automáticos", "Reduce ausencias"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                    <div className="w-1 h-1 bg-primary rounded-full"></div> {t}
                  </li>
                ))}
             </ul>
          </div>
          <div className="p-10 bg-slate-900 text-white rounded-[40px] shadow-2xl space-y-6">
             <TrendingUp className="text-primary" size={32} />
             <h3 className="text-2xl font-black uppercase tracking-tight">🔁 Seguimiento e ingresos</h3>
             <p className="text-white/40 text-sm leading-relaxed">No pierdas oportunidades. El sistema reactiva pacientes y gestiona pagos sin intervención humana.</p>
             <div className="grid gap-2 pt-4">
               {[
                 "Seguimiento automático de pacientes",
                 "Recordatorios de pagos",
                 "Reactivación de clientes inactivos",
                 "Automatización de nuevas oportunidades"
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

      {/* SECCIÓN 5: BENEFICIOS - Minimalista */}
      <Section id="benefits" title="📈 ¿Qué ganas con esto?" className="bg-white/30 backdrop-blur-sm border-y border-white">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { t: "Menos carga", i: <Users /> },
            { t: "Menos llamadas", i: <Phone /> },
            { t: "Más citas", i: <Calendar /> },
            { t: "Mejor experiencia", i: <ShieldCheck /> },
            { t: "Más ingresos", i: <TrendingUp /> }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl text-center space-y-4 hover:shadow-lg transition-all group">
              <div className="w-10 h-10 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {item.i}
              </div>
              <p className="font-bold text-sm text-foreground/80">{item.t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECCIÓN 6: IMPLEMENTACIÓN */}
      <Section id="impl" title="⚙️ Implementación simple" subtitle="Sin complicaciones técnicas para ti">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { t: "Análisis", d: "Configuramos el sistema a tu medida" },
            { t: "Conexión", d: "Lo conectamos con tus canales" },
            { t: "Activación", d: "Empieza a funcionar automáticamente" }
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
              Convierte tu clínica en un <br />
              <span className="not-italic text-white/40">sistema que trabaja por ti</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Automatiza procesos, mejora la atención y escala sin contratar más personal.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-20 rounded-3xl px-12 text-2xl font-black group" asChild>
              <Link href="/contacto">
                Agendar llamada <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={28} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
