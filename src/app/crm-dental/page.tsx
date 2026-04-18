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
  Settings,
  Users,
  Activity,
  Sparkles,
  Cpu
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function CRMDentalPage() {
  const images = PlaceHolderImages;
  const crmImg = images.find(img => img.id === 'crm-dental');

  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Sistema de Fondos y Texturas (Match con Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 blur-[180px] rounded-full"></div>

      {/* HERO: Impacto Editorial */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Sector Dental Premium</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-tight text-foreground italic">
                AUTOMATIZA TU <br />
                <span className="text-primary not-italic">CLÍNICA AL 100%</span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/50 font-medium max-w-2xl leading-tight">
                Convierte tu clínica en un sistema inteligente que gestiona pacientes, citas y comunicación de forma automática, 24/7.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-2xl shadow-primary/20 group" asChild>
                  <Link href="/contacto">
                    Agendar llamada <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="flex flex-col border-l border-foreground/10 pl-6">
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">KPI Principal</span>
                  <span className="text-sm font-bold text-foreground">Menos carga. Más citas. Más ingresos.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: EL CEREBRO (CRM) - Intercalado derecha */}
      <Section id="crm-core" title="" className="!py-0">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/50 rounded-[40px] p-4 shadow-2xl">
              <div className="bg-slate-900 rounded-[32px] overflow-hidden border border-white/20 aspect-video flex items-center justify-center p-8 group">
                <div className="w-full h-full bg-white/5 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                    <Activity className="text-primary w-4 h-4" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[60, 40, 80].map((h, i) => (
                      <div key={i} className="h-20 bg-primary/10 rounded-xl relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-primary/40 transition-all duration-1000 group-hover:h-full" style={{ height: `${h}%` }}></div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="w-full h-1.5 bg-white/5 rounded-full"></div>
                    <div className="w-2/3 h-1.5 bg-white/5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex p-3 rounded-2xl bg-primary/5 text-primary">
              <Cpu size={32} />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">🧠 UN CRM DISEÑADO <br /><span className="text-foreground/30">PARA CLÍNICAS</span></h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Centraliza toda tu operación en un solo lugar. Nuestro CRM personalizado te permite una gestión con precisión quirúrgica.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Gestionar todos tus pacientes",
                "Ver el estado de cada cita",
                "Controlar pagos y seguimientos",
                "Información organizada"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/50 border rounded-2xl hover:bg-white transition-colors">
                  <CheckCircle2 className="text-primary" size={18} />
                  <span className="font-bold text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-primary/60">Todo adaptado exactamente a tu clínica</p>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 2: AUTOMATIZACIÓN (CHATBOTS) - Fondo oscuro intercalado */}
      <div className="bg-slate-900 mt-32 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter">🤖 AUTOMATIZACIÓN COMPLETA</h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium">Chatbots en todos tus canales. Atiende a tus pacientes automáticamente 24/7.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Zap className="text-primary" /> ¿Qué hacen?</h3>
                <ul className="space-y-4">
                  {[
                    "Responden dudas al instante",
                    "Captan nuevos pacientes",
                    "Filtran y califican leads",
                    "Gestión sin intervención humana"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-white/60">
                      <Sparkles className="text-primary shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {[
                { name: "WhatsApp", icon: <MessageSquare /> },
                { name: "Instagram", icon: <Target /> },
                { name: "Facebook", icon: <Users /> },
                { name: "Página Web", icon: <LayoutDashboard /> }
              ].map((chan, i) => (
                <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-between hover:border-primary/50 transition-all cursor-default">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {chan.icon}
                    </div>
                    <span className="text-2xl font-black tracking-tight">{chan.name}</span>
                  </div>
                  <ArrowRight className="text-white/20 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: AGENTE DE VOZ - Visual de ondas y llamadas */}
      <Section id="voice-agent" title="" className="!py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-500">
              <Phone size={32} />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">📞 AGENTE DE VOZ <br /><span className="text-primary">CON IA</span></h2>
            <p className="text-lg text-foreground/60 leading-relaxed italic border-l-4 border-primary/20 pl-6">
              "Como una recepcionista, pero automática. Tu clínica responde llamadas sin necesidad de personal."
            </p>
            <ul className="grid sm:grid-cols-2 gap-6">
              {[
                "Atiende llamadas entrantes",
                "Realiza llamadas salientes",
                "Agenda citas automáticamente",
                "Resuelve preguntas por teléfono"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-foreground text-background rounded-2xl text-center font-black uppercase tracking-widest text-[10px]">
              Sin esperas. Sin llamadas perdidas.
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-10 border-2 border-primary/20 rounded-full animate-ping opacity-20 [animation-delay:0.5s]"></div>
              <div className="relative z-10 w-40 h-40 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 border group hover:scale-105 transition-transform">
                <div className="flex gap-1 h-12 mb-4 items-center">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 bg-primary rounded-full animate-pulse" style={{ height: `${20 + Math.random() * 80}%`, animationDuration: `${0.4 + Math.random()}s` }}></div>
                  ))}
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-foreground/40">Voice Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 4: CITAS Y SEGUIMIENTO - Cards intercaladas */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-[48px] border-none bg-white shadow-xl shadow-slate-200/50 p-12 overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
             <Calendar className="text-primary w-12 h-12 mb-8" />
             <h3 className="text-3xl font-black mb-6">📅 GESTIÓN <br />AUTOMÁTICA DE CITAS</h3>
             <p className="text-foreground/50 mb-8 leading-relaxed">Olvídate de gestionar agendas manualmente. El sistema crea, cambia y recuerda citas automáticamente.</p>
             <div className="space-y-3">
               {["Crea citas automáticamente", "Cambios y cancelaciones", "Recordatorios WhatsApp", "Reduce ausencias"].map((t, i) => (
                 <div key={i} className="flex items-center gap-2 text-sm font-bold text-foreground/70">
                   <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> {t}
                 </div>
               ))}
             </div>
          </Card>

          <Card className="rounded-[48px] border-none bg-slate-50 p-12 overflow-hidden relative group">
             <TrendingUp className="text-green-500 w-12 h-12 mb-8" />
             <h3 className="text-3xl font-black mb-6">🔁 SEGUIMIENTO <br />Y INGRESOS</h3>
             <p className="text-foreground/50 mb-8 leading-relaxed">No pierdas oportunidades. El sistema reactiva pacientes y gestiona pagos sin intervención humana.</p>
             <div className="grid grid-cols-1 gap-4">
               {[
                 "Seguimiento automático",
                 "Recordatorios de pagos",
                 "Reactivación de inactivos",
                 "Nuevas oportunidades"
               ].map((t, i) => (
                 <div key={i} className="bg-white p-4 rounded-2xl border flex justify-between items-center group-hover:border-green-500/30 transition-all">
                   <span className="font-bold text-sm">{t}</span>
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>
               ))}
             </div>
          </Card>
        </div>
      </div>

      {/* SECCIÓN 5: ¿QUÉ GANAS? - Grid minimalista */}
      <Section id="benefits" title="📈 ¿QUÉ GANAS CON ESTO?" subtitle="Resultados tangibles desde el primer mes" className="bg-white/30 backdrop-blur-sm border-y">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Menos carga operativa", i: <Users /> },
            { t: "Reducción de llamadas", i: <Phone /> },
            { t: "Más citas confirmadas", i: <CheckCircle2 /> },
            { t: "Mejor experiencia", i: <ShieldCheck /> },
            { t: "Incremento de ingresos", i: <TrendingUp /> },
            { t: "Escalabilidad real", i: <Zap /> }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.i}
              </div>
              <h4 className="text-xl font-bold">{item.t}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* SECCIÓN 6: IMPLEMENTACIÓN - Pasos táctiles */}
      <Section id="implementation" title="⚙️ IMPLEMENTACIÓN SIMPLE" subtitle="Sin complicaciones técnicas para tu equipo">
        <div className="grid md:grid-cols-3 gap-12 text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-10 hidden md:block"></div>
          {[
            { n: "01", t: "Configuración", d: "Diseñamos el sistema a tu medida." },
            { n: "02", t: "Conexión", d: "Lo conectamos con tus canales." },
            { n: "03", t: "Activación", d: "Empieza a funcionar automáticamente." }
          ].map((step, i) => (
            <div key={i} className="space-y-6 bg-background px-4">
              <div className="w-20 h-20 rounded-full bg-white border shadow-lg flex items-center justify-center mx-auto text-2xl font-black text-primary">
                {step.n}
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2">{step.t}</h4>
                <p className="text-sm text-foreground/50">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA: Editorial y masivo */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[80px] p-20 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,110,255,0.3)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl lg:text-8xl font-black leading-[0.8] tracking-tighter italic">
              CONVIERTE TU CLÍNICA EN UN <br />
              <span className="text-white/40 not-italic uppercase">SISTEMA QUE TRABAJA POR TI</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
              Automatiza procesos, mejora la atención y escala sin contratar más personal.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-24 rounded-full px-16 text-3xl font-black shadow-2xl group" asChild>
              <Link href="/contacto">
                AGENDAR LLAMADA <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={32} />
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
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </div>
  );
}
