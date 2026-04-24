'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Calendar, 
  TrendingUp, 
  Zap,
  Layers,
  Search,
  Check,
  Calculator,
  Settings,
  X,
  Instagram,
  Facebook,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AnimatedCounter = ({ value, prefix = "", suffix = "", duration = 2.5 }: { value: number, prefix?: string, suffix?: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const totalFrames = Math.round(duration * 60);
            let frame = 0;

            const animate = () => {
                frame++;
                const progress = frame / totalFrames;
                const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
                
                setCount(currentCount);

                if (frame < totalFrames) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [inView, value, duration]);

    return (
        <span ref={ref} className="text-4xl md:text-6xl font-black text-primary leading-none tracking-tighter">
            {prefix}{count}{suffix}
        </span>
    );
};

// --- Sub-components ---

const ChatMockup = () => {
    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-8">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative w-full bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[32px] shadow-2xl overflow-hidden"
            >
                <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-black italic">AM</div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-tight">Asistente IA</p>
                        <p className="text-[8px] text-emerald-500 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> En línea
                        </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6 min-h-[300px]">
                    <div className="flex justify-end">
                        <div className="max-w-[80%] bg-slate-50 p-4 rounded-2xl rounded-tr-none text-sm font-medium text-slate-600">
                            Hola! Quiero saber más información sobre vuestros servicios.
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="max-w-[80%] bg-primary p-4 rounded-2xl rounded-tl-none text-sm font-bold text-white shadow-lg shadow-primary/20">
                            ¡Claro! Creamos agentes de IA para automatizar tu negocio.
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="max-w-[80%] bg-primary p-4 rounded-2xl rounded-tl-none text-sm font-bold text-white shadow-lg shadow-primary/20">
                            ¿Te gustaría agendar una demo breve?
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-slate-50/50 flex gap-3 items-center">
                    <div className="flex-1 h-10 bg-white border border-slate-100 rounded-full flex items-center px-4 text-[10px] text-slate-300 font-medium">Escribe un mensaje...</div>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <ArrowRight size={16} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const VoiceMockup = () => {
    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-8">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full bg-white border border-slate-100 rounded-[32px] shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Phone size={18} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Llamada en curso</p>
                            <p className="text-sm font-black text-slate-900 italic">Agente de Citas Inteligente</p>
                        </div>
                    </div>
                    <div className="flex gap-1.5">
                        {[1, 2, 3].map((i) => (
                            <motion.div 
                                key={i}
                                animate={{ height: [8, 16, 8] }}
                                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                className="w-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* Transcript */}
                <div className="p-8 space-y-8 min-h-[280px]">
                    <div className="grid grid-cols-[80px_1fr_40px] items-start gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pt-1">Cliente</span>
                        <p className="text-sm font-medium text-slate-600 leading-snug">Hola, quiero agendar una cita para la próxima semana.</p>
                        <span className="text-[10px] font-bold text-slate-300">05:30</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr_40px] items-start gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary pt-1">IA Agente</span>
                        <p className="text-sm font-black text-slate-900 leading-snug">Entendido. ¿Le vendría bien el martes a las 12:00?</p>
                        <span className="text-[10px] font-bold text-slate-300">05:32</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr_40px] items-start gap-4 opacity-50">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pt-1">Cliente</span>
                        <p className="text-sm font-medium text-slate-600 leading-snug">Sí, perfecto. Agéndamelo para esa hora.</p>
                        <span className="text-[10px] font-bold text-slate-300">06:30</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="p-6 bg-slate-50/50 flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400">
                             <Phone size={20} className="rotate-[135deg]" />
                        </div>
                        <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400">
                             <Zap size={20} />
                        </div>
                    </div>
                    <Button variant="destructive" className="h-12 rounded-2xl px-8 font-black uppercase tracking-widest text-[10px] flex gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Finalizar Llamada
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};


const CRMMockup = () => {
    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-8">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative w-full bg-white/90 backdrop-blur-md border border-slate-100 rounded-[32px] shadow-2xl overflow-hidden"
            >
                {/* Window Header */}
                <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">CRM Engine</span>
                    <Layers size={14} className="text-slate-200" />
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-6">
                    {/* Integrated Command Bar */}
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Zap size={12} />
                        </div>
                        <p className="text-[10px] font-bold text-slate-500">
                             Agendar reunión con <span className="text-primary italic">Carlos</span>
                        </p>
                    </div>

                    {/* Table View */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-[10px] font-black uppercase tracking-tight text-slate-900">Actividad Reciente</h4>
                            <div className="h-4 w-12 bg-emerald-50 rounded-full flex items-center justify-center text-[8px] font-black text-emerald-600 uppercase">En Vivo</div>
                        </div>
                        <div className="space-y-2">
                            {[
                                { t: "Email Marketing", c: "TechCorp", s: "Enviado", p: false },
                                { t: "Reunión IA", c: "Carlos G.", s: "Confirmado", p: true },
                                { t: "Seguimiento", c: "Ana Lopez", s: "En Cola", p: false }
                            ].map((row, i) => (
                                <div key={i} className={`p-4 rounded-2xl flex items-center justify-between border ${row.p ? 'bg-primary/5 border-primary/10' : 'bg-white border-slate-50'}`}>
                                    <div>
                                        <p className={`text-[10px] font-black ${row.p ? 'text-primary' : 'text-slate-900'}`}>{row.t}</p>
                                        <p className="text-[9px] font-bold text-slate-400">{row.c}</p>
                                    </div>
                                    <div className={`text-[8px] font-black uppercase tracking-tighter ${row.p ? 'text-emerald-500' : 'text-slate-300'}`}>
                                        {row.s}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


// --- Main Page ---

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 selection:bg-primary/10 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      <div className="absolute top-0 left-[-10%] w-[70%] h-[1000px] bg-primary/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        
        {/* Header / Hero Section - Minimalist Spotlight */}
        <div className="relative mb-24 pt-32">
            {/* Ambient Base Layer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none -z-10" />
            
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        Agencia de Automatización IA
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 uppercase">
                        Automatiza tu negocio <br /> 
                        con <span className="text-primary italic">Inteligencia Artificial</span>
                    </h1>
                </motion.div>

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-slate-400 font-medium max-w-xl mx-auto leading-relaxed"
                >
                    Convertimos tu empresa en un sistema automatizado que vende y gestiona clientes 24/7 sin interrupción.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex gap-4 items-center text-[9px] font-black uppercase tracking-widest text-slate-300">
                      <span>Menos tareas</span>
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      <span>Más ingresos</span>
                    </div>

                    <Button size="lg" className="h-14 rounded-2xl px-10 text-base font-bold bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/30" asChild>
                        <Link href="/contacto">Agendar llamada</Link>
                    </Button>
                </motion.div>
            </div>
        </div>

        {/* Technologies Strip */}
        <div className="w-full py-16 mb-24 overflow-hidden flex opacity-30 grayscale saturate-0 pointer-events-none bg-white [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div 
                className="flex items-center whitespace-nowrap flex-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-16 items-center px-8">
                        <span className="text-2xl font-bold tracking-tighter">OpenAI</span>
                        <span className="text-2xl font-medium tracking-tight">Meta</span>
                        <span className="text-2xl font-[900] tracking-tighter">Make</span>
                        <span className="text-2xl font-bold tracking-tight">HubSpot</span>
                        <span className="text-2xl font-black tracking-tighter font-serif">Zapier</span>
                        <span className="text-2xl font-bold italic tracking-tight text-slate-900">Stripe</span>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* What we do exactly */}
        <motion.div 
            className="max-w-4xl mx-auto text-center mb-24 space-y-10"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h2 className="text-4xl font-black uppercase tracking-tight italic">¿Qué hacemos exactamente?</h2>
            <div className="space-y-6 text-xl text-slate-400 font-medium leading-relaxed">
                <p>Implementamos sistemas de inteligencia artificial que automatizan la comunicación, la gestión de clientes y los procesos clave de tu negocio.</p>
                <p>Desde el primer contacto hasta el seguimiento, todo funciona de forma automática.</p>
            </div>
        </motion.div>

        {/* Feature blocks - Symmetric Alternating */}
        <div className="space-y-24 pb-24">
          {/* Communication Automation */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight uppercase leading-none">Automatización total de la comunicación</h3>
                </div>
                <div className="space-y-6">
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">Tus clientes reciben respuesta inmediata en todos tus canales:</p>
                    <div className="flex flex-wrap gap-10 pt-4 text-slate-300">
                        <div className="group flex flex-col items-center gap-2">
                            <MessageSquare size={24} className="group-hover:text-primary transition-colors" />
                            <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
                        </div>
                        <div className="group flex flex-col items-center gap-2">
                            <Instagram size={24} className="group-hover:text-pink-500 transition-colors" />
                            <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
                        </div>
                        <div className="group flex flex-col items-center gap-2">
                            <Facebook size={24} className="group-hover:text-blue-600 transition-colors" />
                            <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
                        </div>
                        <div className="group flex flex-col items-center gap-2">
                            <Globe size={24} className="group-hover:text-primary transition-colors" />
                            <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Web</span>
                        </div>
                        <div className="group flex flex-col items-center gap-2">
                            <Phone size={24} className="group-hover:text-emerald-500 transition-colors" />
                            <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Teléfono</span>
                        </div>
                    </div>
                    <ul className="grid gap-4 pt-4">
                        {["Responden dudas al instante", "Captan nuevos clientes", "Filtran oportunidades", "Mantienen conversaciones completas sin intervención humana"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 font-bold text-slate-800 uppercase tracking-tighter text-sm">
                                <Check size={16} className="text-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm font-black uppercase tracking-[0.4em] text-primary">Disponible 24/7, sin pausas</p>
                </div>
            </div>
            <div className="relative lg:pl-10 flex justify-center">
                <ChatMockup />
            </div>
          </div>

          {/* Voice AI Agents */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <div className="order-2 lg:order-1 relative lg:pr-10 flex justify-center">
                <VoiceMockup />
            </div>
            <div className="order-1 lg:order-2 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight uppercase leading-none">Agentes de voz con IA</h3>
                </div>
                <div className="space-y-6">
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">Tu negocio atiende llamadas aunque no haya nadie disponible.</p>
                    <ul className="grid gap-4 pt-4">
                        {["Responden llamadas entrantes", "Realizan llamadas salientes", "Agendan citas automáticamente", "Resuelven consultas por voz"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 font-bold text-slate-800 uppercase tracking-tighter text-sm">
                                <Check size={16} className="text-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg font-bold text-slate-950 uppercase tracking-tight italic">Nunca más pierdes una oportunidad por no contestar.</p>
                </div>
            </div>
          </div>

          {/* Customer & Appointment Management */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight uppercase leading-none">Gestión automática de clientes y citas</h3>
                </div>
                <div className="space-y-6">
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">Olvídate de agendas manuales y procesos desorganizados.</p>
                    <ul className="grid gap-4 pt-4">
                        {["Creación automática de citas", "Modificaciones y cancelaciones", "Recordatorios automáticos", "Seguimiento de clientes"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 font-bold text-slate-800 uppercase tracking-tighter text-sm">
                                <Check size={16} className="text-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm font-black uppercase tracking-[0.4em] text-primary">Todo sincronizado y funcionando sin errores</p>
                </div>
            </div>
            <div className="relative lg:pl-10 flex justify-center">
                <CRMMockup />
            </div>
          </div>
        </div>



        {/* Real Results */}
        <div className="py-24">
            <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-24 italic">Resultados Medibles</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-5xl mx-auto">
                {[
                    { val: 40, suf: "h", d: "Horas semanales automatizadas" },
                    { prefix: "+", val: 35, suf: "%", d: "Incremento medio en citas" },
                    { val: 0, suf: "%", d: "Pérdida de prospectos (leads)" },
                    { prefix: "+", val: 120, suf: "k", d: "Euros de impacto económico" }
                ].map((r, i) => (
                    <div key={i} className="space-y-4">
                        <AnimatedCounter value={r.val} suffix={r.suf} prefix={r.prefix} duration={2 + i * 0.2} />
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 max-w-[150px] mx-auto leading-relaxed">{r.d}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Sectors / Solutions */}
        <div className="py-24">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4 space-y-4">
                <div className="w-12 h-px bg-primary" />
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Soluciones adaptadas a tu negocio</h2>
                <p className="text-slate-400 font-medium leading-relaxed">No usamos sistemas genéricos. Construimos ecosistemas de automatización diseñados a la medida de tu estructura empresarial o negocio.</p>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
                {[
                    { t: "Clínicas", d: "Gestión de pacientes y citas médicas 24/7." },
                    { t: "Servicios Profesionales", d: "Calificación de prospectos y agendamiento de consultoría." },
                    { t: "Negocios Locales", d: "Atención al cliente y reserva de servicios automatizada." },
                    { t: "Empresas de alto volumen", d: "Filtraje inteligente de comunicaciones y automatización de soporte." }
                ].map((s, i) => (
                    <div key={i} className="space-y-4">
                        <div className="w-12 h-px bg-primary" />
                        <h4 className="text-2xl font-black uppercase tracking-tight">{s.t}</h4>
                        <p className="text-slate-400 font-medium">{s.d}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>





        {/* Final CTA */}
        <div className="py-24 text-center space-y-16">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-slate-950">
                Deja de perder clientes <br /><span className="text-primary italic">por falta de tiempo</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-xl">
                Mientras tú trabajas, tu sistema sigue captando, respondiendo y cerrando oportunidades.
            </p>
            <Button size="lg" className="h-14 rounded-full px-10 text-lg font-bold bg-primary text-white shadow-xl shadow-primary/30 group transition-all duration-500 hover:scale-105" asChild>
                <Link href="/contacto">Agendar llamada</Link>
            </Button>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Impulsa tu negocio mediante ingeniería de automatización</p>
          </div>
        </div>

      </div>

      <style jsx global>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
      `}</style>
    </div>
  );
}
