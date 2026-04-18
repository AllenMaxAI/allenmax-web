
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
  Users
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function CRMDentalPage() {
  const images = PlaceHolderImages;
  const crmImg = images.find(img => img.id === 'crm-dental');

  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Fondo con textura y gradientes para match con Home */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 blur-[180px] rounded-full"></div>

      {/* Hero Section */}
      <Section id="crm-hero" title="" className="relative z-10 !pt-12 !pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-2">
            Sector Dental Premium
          </div>
          <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-foreground italic">
            AUTOMATIZA TU <span className="text-primary not-italic">CLÍNICA AL 100%</span> CON IA
          </h1>
          <p className="text-xl lg:text-2xl text-foreground/50 font-medium max-w-2xl mx-auto">
            Convierte tu clínica en un sistema inteligente que gestiona pacientes, citas y comunicación de forma automática, 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-xl shadow-primary/20 group" asChild>
              <Link href="/contacto">
                Agendar llamada <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="flex flex-col text-left border-l border-foreground/10 pl-6">
              <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Resultados</span>
              <span className="text-sm font-bold text-foreground">Menos carga. Más citas. Más ingresos.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CRM Inteligente */}
      <Section id="crm-dashboard" title="🧠 Un CRM diseñado para clínicas" subtitle="Centraliza toda tu operación en un solo lugar con nuestra herramienta personalizada.">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">Gestiona tu clínica con precisión quirúrgica</h3>
            <p className="text-foreground/60 leading-relaxed">
              Nuestro CRM no es una herramienta genérica. Está adaptado exactamente a cómo funciona tu clínica, permitiéndote:
            </p>
            <ul className="space-y-4">
              {[
                { t: "Gestionar todos tus pacientes", i: <Users className="text-primary" size={18} /> },
                { t: "Ver el estado de cada cita", i: <Calendar className="text-primary" size={18} /> },
                { t: "Controlar pagos y seguimientos", i: <TrendingUp className="text-primary" size={18} /> },
                { t: "Información organizada y accesible", i: <LayoutDashboard className="text-primary" size={18} /> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    {item.i}
                  </div>
                  <span className="font-bold text-foreground/80">{item.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative z-10 p-2 bg-white/50 backdrop-blur-sm border rounded-[40px] shadow-2xl overflow-hidden">
              {crmImg && (
                <Image 
                  src={crmImg.imageUrl} 
                  alt="CRM Dental Dashboard" 
                  width={800} 
                  height={600} 
                  className="rounded-[32px] shadow-lg border"
                />
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Chatbots & Omnicanalidad */}
      <Section id="chatbots" title="🤖 Automatización completa con IA" subtitle="Atiende a tus pacientes automáticamente desde WhatsApp, Instagram, Facebook y tu Web.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "WhatsApp", d: "El canal preferido para citas rápidas.", i: <MessageSquare size={24} /> },
            { t: "Instagram", d: "Captación directa desde tus redes sociales.", i: <Target size={24} /> },
            { t: "Facebook", d: "Gestión de mensajes sin intervención humana.", i: <Users size={24} /> },
            { t: "Página Web", d: "Asistente inteligente 24/7 en tu site.", i: <LayoutDashboard size={24} /> }
          ].map((item, i) => (
            <Card key={i} className="border-none bg-white shadow-sm hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                  <div className="text-primary">{item.i}</div>
                </div>
                <CardTitle className="text-xl">{item.t}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60">{item.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 bg-slate-900 text-white p-8 rounded-[32px] grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-bold mb-4">¿Qué hacen nuestros Chatbots?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Respuestas inmediatas", "Calificación de leads", "Captación de pacientes", "Gestión sin humanos"].map((check, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-primary" />
                  {check}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <span className="text-4xl font-black text-primary block mb-2">24/7</span>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Disponibilidad Absoluta</span>
          </div>
        </div>
      </Section>

      {/* Agente de Voz */}
      <Section id="voice-agent" title="📞 Agente de voz con IA" subtitle="Tu clínica responde llamadas como una recepcionista, pero de forma automática.">
        <div className="max-w-5xl mx-auto bg-white border rounded-[48px] p-8 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary animate-ring" size={32} />
              </div>
              <h3 className="text-3xl font-bold leading-tight">Sin esperas. Sin llamadas perdidas.</h3>
              <p className="text-foreground/60 italic text-lg">"Hola, ¿en qué puedo ayudarte hoy? ¿Te gustaría agendar una cita para una limpieza?"</p>
              <ul className="space-y-3">
                {[
                  "Atiende llamadas entrantes (inbound)",
                  "Realiza llamadas salientes (outbound)",
                  "Agenda citas automáticamente",
                  "Resuelve preguntas por teléfono"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                    <CheckCircle2 size={18} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-[32px] border flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-1 h-12">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-primary rounded-full animate-pulse" 
                    style={{ height: `${20 + Math.random() * 80}%`, animationDuration: `${0.6 + Math.random()}s` }}
                  ></div>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30">Análisis de voz en tiempo real</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Gestión de Citas y Seguimiento */}
      <div className="bg-slate-900 py-24 text-white">
        <Section id="appointments" title="📅 Gestión automática de citas" subtitle="Olvídate de gestionar agendas manualmente y reduce el ausentismo." className="!py-0">
          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="text-primary" /> Optimización de Agenda
                </h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  El sistema crea citas automáticamente, permite cambiarlas o cancelarlas y envía recordatorios automáticos por WhatsApp.
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-2xl font-black text-primary">-80%</p>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Ausencias (No-shows)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">🔁 Seguimiento e Ingresos</h3>
              <p className="text-white/60">No pierdas oportunidades. El sistema se encarga de que tus pacientes vuelvan y tus presupuestos se cierren.</p>
              <div className="grid gap-4">
                {[
                  "Seguimiento automático de pacientes",
                  "Recordatorios de pagos",
                  "Reactivación de clientes inactivos",
                  "Automatización de nuevas oportunidades"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <TrendingUp size={16} className="text-primary" />
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Beneficios e Implementación */}
      <Section id="benefits" title="📈 ¿Qué ganas con esto?" subtitle="Resultados tangibles desde el primer mes de implementación.">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Menos carga operativa", d: "Tu equipo se enfoca en el paciente, no en el teléfono.", i: <Users /> },
            { t: "Más citas confirmadas", d: "La IA no se olvida de ningún lead ni de ningún recordatorio.", i: <CheckCircle2 /> },
            { t: "Mejor experiencia", d: "Atención instantánea y profesional en todos los canales.", i: <ShieldCheck /> },
            { t: "Incremento de ingresos", d: "Más conversión de leads y menos ausencias de pacientes.", i: <TrendingUp /> },
            { t: "Reducción de llamadas", d: "La IA gestiona el 90% de las dudas y agendaciones.", i: <Phone /> },
            { t: "Escalabilidad real", d: "Crece sin necesidad de contratar más personal de recepción.", i: <Zap /> }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border rounded-3xl shadow-sm hover:border-primary/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                {item.i}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.t}</h4>
              <p className="text-sm text-foreground/50">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Implementación Simple */}
      <Section id="implementation" title="⚙️ Implementación simple" subtitle="Sin complicaciones técnicas para tu equipo.">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden md:block"></div>
          {[
            { n: "01", t: "Configuración", d: "Diseñamos el sistema a medida para tu clínica." },
            { n: "02", t: "Conexión", d: "Lo integramos con tus canales actuales." },
            { n: "03", t: "Activación", d: "Empieza a funcionar automáticamente." }
          ].map((step, i) => (
            <div key={i} className="space-y-4 bg-background px-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black mx-auto shadow-lg shadow-primary/20">
                {step.n}
              </div>
              <h4 className="font-bold text-lg">{step.t}</h4>
              <p className="text-sm text-foreground/50">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="dental-cta" title="" className="!pb-32">
        <div className="max-w-5xl mx-auto bg-primary rounded-[60px] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl lg:text-6xl font-black tracking-tight leading-[0.9]">
              CONVIERTE TU CLÍNICA EN UN <span className="text-white/60">SISTEMA QUE TRABAJA POR TI</span>
            </h3>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Automatiza procesos, mejora la atención y escala sin contratar más personal.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-20 rounded-full px-16 text-2xl font-black shadow-2xl group" asChild>
              <Link href="/contacto">
                Agendar llamada ahora
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <style jsx global>{`
        @keyframes ring {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-ring {
          animation: ring 0.5s infinite;
        }
      `}</style>
    </div>
  );
}
