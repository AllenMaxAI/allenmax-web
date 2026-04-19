
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
  Sparkles,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function CRMDentalPage() {
  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Sistema de Fondos y Texturas (Coherente con Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/5 blur-[180px] rounded-full"></div>

      {/* HERO MINIMALISTA */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/70">Arquitectura Dental Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-foreground uppercase mb-8">
              Automatiza tu clínica <br />
              <span className="text-primary italic">al 100% con IA</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/50 font-medium max-w-2xl leading-relaxed mb-12">
              Convierte tu clínica en un sistema inteligente que gestiona pacientes, citas y comunicación de forma automática, 24/7.
            </p>
            
            <div className="flex flex-wrap items-center gap-10">
              <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-xl shadow-primary/10 group" asChild>
                <Link href="/contacto">
                  Agendar llamada <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="flex flex-col border-l border-foreground/10 pl-8">
                <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mb-1">KPI Operativo</span>
                <span className="text-sm font-bold text-foreground/80">Menos carga. Más citas. Más ingresos.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: EL CEREBRO (CRM) */}
      <Section id="crm-core" title="" className="!py-24 border-t border-foreground/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="text-primary" />
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase">
              Un CRM diseñado <br /><span className="text-primary">para clínicas</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed font-medium">
              Centraliza toda tu operación en un solo lugar. Nuestro sistema no es solo una base de datos; es el motor que controla cada interacción.
            </p>
            <div className="grid gap-4">
              {[
                "Gestionar todos tus pacientes de forma centralizada",
                "Ver el estado de cada cita en tiempo real",
                "Controlar pagos y seguimientos automáticos",
                "Información organizada, accesible y segura"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <span className="font-bold text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full"></div>
            <Card className="relative p-10 rounded-[40px] border-none shadow-2xl bg-white/50 backdrop-blur-md overflow-hidden ring-1 ring-white">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="h-2 w-24 bg-primary/20 rounded-full"></div>
                  <Users className="text-primary/30" size={18} />
                </div>
                <div className="space-y-3">
                  <div className="h-8 w-full bg-slate-100/50 rounded-xl"></div>
                  <div className="h-8 w-3/4 bg-slate-100/50 rounded-xl"></div>
                  <div className="h-8 w-1/2 bg-slate-100/50 rounded-xl"></div>
                </div>
                <div className="pt-6 flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 animate-pulse"></div>
                  <div className="h-10 flex-1 bg-primary/5 rounded-xl"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 2: CHATBOTS */}
      <div className="bg-foreground/[0.02] border-y border-foreground/5 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "WhatsApp", icon: <MessageSquare size={16} /> },
                  { name: "Instagram", icon: <Users size={16} /> },
                  { name: "Facebook", icon: <LayoutDashboard size={16} /> },
                  { name: "Web Chat", icon: <Zap size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="font-bold text-xs uppercase tracking-widest text-foreground/80">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="text-primary" />
              </div>
              <h2 className="text-3xl font-black tracking-tight uppercase">
                Comunicación <br /><span className="text-primary">inteligente</span>
              </h2>
              <p className="text-lg text-foreground/50 leading-relaxed font-medium">
                Atiende a tus pacientes automáticamente desde todos tus canales. Disponible 24/7 para responder dudas, captar leads y calificar pacientes sin intervención humana.
              </p>
              <div className="pt-4 flex gap-8">
                <div>
                  <div className="text-2xl font-black text-foreground mb-1">24/7</div>
                  <div className="text-[10px] font-black uppercase text-foreground/30 tracking-widest">Disponibilidad</div>
                </div>
                <div className="border-l border-foreground/10 pl-8">
                  <div className="text-2xl font-black text-foreground mb-1">100%</div>
                  <div className="text-[10px] font-black uppercase text-foreground/30 tracking-widest">Autónomo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: AGENTE DE VOZ */}
      <Section id="voice" title="" className="!py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" />
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase">
              Agente de voz <br /><span className="text-primary">IA avanzada</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed font-medium italic border-l-4 border-primary/20 pl-8">
              "Como una recepcionista, pero automática. Tu clínica responde llamadas sin necesidad de personal."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Atención Inbound", d: "Resuelve dudas al instante" },
                { t: "Llamadas Outbound", d: "Agenda y confirma citas" },
                { t: "Sin Esperas", d: "Cero llamadas perdidas" },
                { t: "Resolución Real", d: "Capacidad de agendar por voz" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="font-bold text-sm text-foreground/80">{item.t}</span>
                  </div>
                  <p className="text-xs text-foreground/40 font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-primary/5 rounded-full flex items-center justify-center relative">
               <div className="absolute inset-0 border border-primary/10 rounded-full animate-ping opacity-20"></div>
               <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border border-slate-100 group cursor-pointer hover:scale-110 transition-transform">
                  <Phone className="text-primary group-hover:animate-pulse" size={32} />
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECCIÓN 4: AGENDA Y ROI */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t border-foreground/5">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-12 rounded-[48px] border-none shadow-xl bg-white space-y-8">
            <Calendar className="text-primary" size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Agenda siempre <br />optimizada</h3>
            <p className="text-foreground/50 text-sm leading-relaxed font-medium">
              El sistema crea citas, permite cambios y envía recordatorios automáticos para reducir drásticamente las ausencias.
            </p>
            <ul className="space-y-3 pt-4">
              {["Confirmaciones digitales", "Reprogramación autónoma", "Recordatorios multi-canal"].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                  <div className="w-1 h-1 bg-primary rounded-full"></div> {t}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-12 rounded-[48px] border-none shadow-2xl bg-slate-900 text-white space-y-8">
            <TrendingUp className="text-primary" size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Seguimiento y <br />aumento de ingresos</h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              No pierdas oportunidades. Seguimiento automático de presupuestos y reactivación de clientes inactivos.
            </p>
            <div className="grid gap-3 pt-4">
              {[
                "Reactivación de inactivos",
                "Recordatorios de pago",
                "Automatización de nuevas oportunidades"
              ].map((t, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group cursor-default">
                  <span className="font-bold text-xs text-white/80 uppercase tracking-widest">{t}</span>
                  <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* BENEFICIOS RESUMIDOS */}
      <Section id="benefits" title="Impacto directo" subtitle="Diseñado para transformar tu rentabilidad operativa" className="bg-foreground/[0.02]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { t: "Menos carga operativa", i: <Users size={16} /> },
            { t: "Reducción de llamadas manuales", i: <Phone size={16} /> },
            { t: "Más citas confirmadas", i: <Calendar size={16} /> },
            { t: "Mejor experiencia paciente", i: <Sparkles size={16} /> },
            { t: "Incremento en ingresos", i: <TrendingUp size={16} /> },
            { t: "Operación 24/7", i: <Zap size={16} /> }
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                {benefit.i}
              </div>
              <span className="font-bold text-xs uppercase tracking-widest text-foreground/70">{benefit.t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPLEMENTACIÓN */}
      <Section id="impl" title="Implementación simple" subtitle="Configuramos, conectamos y activamos. Sin complicaciones.">
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {[
            { t: "Configuración", d: "Adaptamos el sistema a tu medida" },
            { t: "Conexión", d: "Integramos con todos tus canales" },
            { t: "Activación", d: "Empieza a funcionar automáticamente" }
          ].map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="text-5xl font-black text-primary/10">{i + 1}</div>
              <h4 className="font-bold uppercase tracking-tight text-sm">{step.t}</h4>
              <p className="text-xs text-foreground/40 leading-relaxed font-medium">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[60px] p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl lg:text-6xl font-black leading-tight uppercase italic">
              Convierte tu clínica <br />
              <span className="not-italic text-white/40 font-black">en un sistema que trabaja por ti</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Escala tu facturación sin necesidad de contratar más personal.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-20 rounded-full px-12 text-2xl font-black group" asChild>
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
