
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

export default function CRMDentalPage() {
  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Sistema de Fondos Unificado con Home */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[1000px] bg-primary/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[60%] h-[800px] bg-blue-400/5 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Hero Minimalista */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/70">Arquitectura Dental Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground uppercase mb-8">
              El cerebro operativo <br />
              <span className="text-primary italic">de tu clínica dental</span>
            </h1>
            
            <p className="text-lg text-foreground/50 font-medium max-w-xl leading-relaxed mb-12">
              Convierte tu clínica en un sistema inteligente. Nuestro CRM gestiona pacientes, citas y comunicación de forma 100% automática y centralizada.
            </p>
            
            <div className="flex flex-wrap items-center gap-10">
              <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-xl shadow-primary/10 group" asChild>
                <Link href="/contacto">
                  Agendar llamada <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="hidden sm:flex flex-col border-l border-foreground/10 pl-8">
                <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mb-1">KPI Operativo</span>
                <span className="text-sm font-bold text-foreground/80">Gestión autónoma 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 1: El Cerebro (CRM) */}
      <Section id="crm-core" title="" className="!py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="text-primary" />
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase">
              Control Total <br /><span className="text-primary">en un solo lugar</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed font-medium">
              Centraliza toda tu operación. No es solo una base de datos, es el motor que controla cada interacción con el paciente.
            </p>
            <div className="grid gap-4">
              {[
                "Gestión de pacientes centralizada",
                "Estado de citas en tiempo real",
                "Control de pagos y seguimientos",
                "Información organizada y accesible"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <span className="font-bold text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Card className="relative p-10 rounded-[40px] border-none shadow-2xl bg-white/40 backdrop-blur-md overflow-hidden ring-1 ring-white/50">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-2 w-24 bg-primary/20 rounded-full"></div>
                  <Users className="text-primary/30" size={18} />
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-full bg-slate-200/50 rounded-xl"></div>
                  <div className="h-8 w-3/4 bg-slate-200/50 rounded-xl"></div>
                  <div className="h-8 w-1/2 bg-slate-200/50 rounded-xl"></div>
                </div>
                <div className="pt-8 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 animate-pulse"></div>
                  <div className="h-12 flex-1 bg-primary/5 rounded-xl"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Sección 2: Chatbots */}
      <div className="py-32 relative z-10">
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
                  <div key={i} className="p-8 bg-white/40 backdrop-blur-sm border border-white/50 rounded-3xl shadow-sm hover:shadow-md transition-all group">
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
                Atención <br /><span className="text-primary">Omnicanal</span>
              </h2>
              <p className="text-lg text-foreground/50 leading-relaxed font-medium">
                Responde dudas, capta leads y califica pacientes automáticamente desde todos tus canales 24/7 sin intervención humana.
              </p>
              <div className="pt-4 flex gap-8">
                <div>
                  <div className="text-2xl font-black text-foreground mb-1">24/7</div>
                  <div className="text-[10px] font-black uppercase text-foreground/30 tracking-widest">Activo</div>
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

      {/* Sección 3: Agente de Voz */}
      <Section id="voice" title="" className="!py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" />
            </div>
            <h2 className="text-3xl font-black tracking-tight uppercase">
              Recepcionista <br /><span className="text-primary">Automática</span>
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed font-medium italic border-l-4 border-primary/20 pl-8">
              Tu clínica responde llamadas, resuelve dudas y agenda citas automáticamente, eliminando las esperas telefónicas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Llamadas Inbound", d: "Atención inmediata" },
                { t: "Llamadas Outbound", d: "Confirmación de citas" },
                { t: "Cero Esperas", d: "Sin llamadas perdidas" },
                { t: "Agendación", d: "Sincronización con agenda" }
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
               <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center border border-white/50 group cursor-pointer hover:scale-110 transition-transform">
                  <Phone className="text-primary group-hover:animate-pulse" size={32} />
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección 4: Agenda y ROI */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t border-foreground/5 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-12 rounded-[48px] border-none shadow-xl bg-white/60 backdrop-blur-sm space-y-8">
            <Calendar className="text-primary" size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Agenda Siempre <br />Optimizada</h3>
            <p className="text-foreground/50 text-sm leading-relaxed font-medium">
              El sistema crea citas, permite cambios y envía recordatorios automáticos para reducir drásticamente las ausencias.
            </p>
            <ul className="space-y-3 pt-4">
              {["Recordatorios multi-canal", "Reprogramación autónoma", "Confirmaciones digitales"].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                  <div className="w-1 h-1 bg-primary rounded-full"></div> {t}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-12 rounded-[48px] border-none shadow-2xl bg-foreground text-background space-y-8">
            <TrendingUp className="text-primary" size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Impacto en la <br />Facturación</h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              No pierdas oportunidades. Seguimiento automático de presupuestos y reactivación de clientes inactivos.
            </p>
            <div className="grid gap-3 pt-4">
              {[
                "Reactivación de inactivos",
                "Recordatorios de pago",
                "Nuevas oportunidades"
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

      {/* Implementación */}
      <Section id="impl" title="Implementación Simple" subtitle="Configuramos, conectamos y activamos. Sin complicaciones." className="relative z-10">
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {[
            { t: "Configuración", d: "Adaptamos el sistema a tu medida" },
            { t: "Conexión", d: "Integramos tus canales actuales" },
            { t: "Activación", d: "Operativa automática inmediata" }
          ].map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="text-5xl font-black text-primary/10">{i + 1}</div>
              <h4 className="font-bold uppercase tracking-tight text-sm">{step.t}</h4>
              <p className="text-xs text-foreground/40 leading-relaxed font-medium">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-primary rounded-[60px] p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight uppercase italic">
              Un sistema que <br />
              <span className="not-italic text-white/40">trabaja por ti</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Escala tu facturación sin necesidad de contratar más personal operativo.
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
