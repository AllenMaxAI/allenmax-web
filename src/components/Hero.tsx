
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, MessageSquare, Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const handleCalendly = () => {
    window.open('https://calendly.com/tu-usuario', '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-56 px-6 overflow-hidden bg-background">
      {/* Fondo de Malla Dinámica (Capa 0) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-400/5 blur-[120px] rounded-full animate-pulse [animation-duration:8s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Contenido Central (Capa 2) */}
        <div className="flex flex-col items-center text-center space-y-10 z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 shadow-sm text-primary text-[13px] font-bold tracking-tight animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
            <span>Ingeniería de Automatización en Alicante</span>
          </div>
          
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in duration-1000 delay-200">
            <h1 className="text-6xl lg:text-[100px] font-black leading-[0.9] tracking-[-0.05em] text-foreground">
              Sistemas que <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-b from-primary to-blue-600">Trabajan</span> por ti
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/50 max-w-2xl mx-auto leading-relaxed font-medium">
              No implementamos bots aislados. Construimos infraestructuras de IA que atraen, califican y cierran pacientes mientras tú te enfocas en operar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={handleCalendly}
              className="rounded-full px-12 py-8 text-xl font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-[1.05] shadow-[0_20px_40px_rgba(59,130,246,0.3)] group"
            >
              Iniciar Transformación
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="rounded-full px-12 py-8 text-xl font-bold border-2 border-foreground/5 bg-white/50 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
            >
              <a href="/crm-dental">Explorar CRM Dental</a>
            </Button>
          </div>

          {/* Social Proof Refinado */}
          <div className="flex flex-col items-center gap-4 pt-10 animate-in fade-in duration-1000 delay-700">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-foreground/30">Trusted by market leaders</p>
            <div className="flex items-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <span className="font-bold text-2xl tracking-tighter">DENTIX</span>
              <span className="font-bold text-2xl tracking-tighter">ORALIA</span>
              <span className="font-bold text-2xl tracking-tighter">VITALDENT</span>
              <span className="font-bold text-2xl tracking-tighter">SMILE</span>
            </div>
          </div>
        </div>

        {/* Elementos de UI Flotantes (Capa 1) - Animados y sin imágenes */}
        <div className="hidden lg:block">
          {/* Card: Live Leads */}
          <div className="absolute top-0 -left-12 w-64 bg-white/80 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-2xl animate-float-slow transition-transform hover:scale-110 duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600">
                <Target size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/40 uppercase">Leads Hoy</p>
                <p className="text-2xl font-black text-foreground">+24</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[70%] rounded-full animate-progress"></div>
              </div>
              <p className="text-[10px] font-bold text-green-600">Crecimiento del 42% vs ayer</p>
            </div>
          </div>

          {/* Card: IA Status */}
          <div className="absolute bottom-12 -right-12 w-72 bg-slate-900 text-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] animate-float-delayed">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase opacity-60">Agente Activo</span>
              </div>
              <Zap size={16} className="text-primary fill-primary" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <MessageSquare size={16} className="text-blue-400" />
                <p className="text-[11px] font-medium opacity-80">Agendando cita: Dr. García</p>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <ShieldCheck size={16} className="text-green-400" />
                <p className="text-[11px] font-medium opacity-80">Lead calificado: Alta Prioridad</p>
              </div>
            </div>
          </div>

          {/* Badge: ROI */}
          <div className="absolute top-1/4 -right-16 bg-white/90 backdrop-blur-xl border border-white p-5 rounded-3xl shadow-xl animate-float transition-all hover:-translate-y-2">
            <BarChart3 size={24} className="text-primary mb-2" />
            <p className="text-[10px] font-bold text-foreground/30 uppercase mb-1">Impacto ROI</p>
            <p className="text-xl font-black text-primary">3.4x</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-15px) rotate(4deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes progress {
          0% { width: 0; }
          100% { width: 70%; }
        }
        .animate-float-slow {
          animation: float-slow 6s infinite ease-in-out;
        }
        .animate-float-delayed {
          animation: float-delayed 7s infinite ease-in-out;
        }
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
        .animate-progress {
          animation: progress 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </section>
  );
}
