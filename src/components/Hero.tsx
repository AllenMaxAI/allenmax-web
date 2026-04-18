
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, BarChart3, ChevronRight, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-40 px-6 overflow-hidden bg-background">
      {/* Texture & Grain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-black/[0.03] shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[11px] font-bold tracking-widest uppercase text-foreground/40 animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              Engineering the future of Alicante
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-[-0.06em] text-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                Menos <br />
                <span className="text-primary italic">Gestión,</span> <br />
                Más <br />
                <span className="relative">
                  Crecimiento
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                    <path d="M1 11C40 3 150 1 299 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/40 max-w-xl font-medium leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Transformamos tu infraestructura comercial con sistemas de IA que no solo hablan, sino que cierran pacientes y optimizan tu retorno.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Button 
                size="lg" 
                className="h-16 rounded-full px-10 text-lg font-bold bg-primary hover:bg-primary/90 transition-all shadow-[0_15px_30px_rgba(0,110,255,0.25)] group"
              >
                Agendar demo gratuita
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="h-16 rounded-full px-10 text-lg font-bold hover:bg-black/5 transition-all text-foreground/60"
              >
                Nuestra metodología
              </Button>
            </div>
          </div>

          {/* Right Side: Operational Visual (The "Not AI-Generated" look) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto animate-in zoom-in duration-1000 delay-500">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 border-[0.5px] border-black/5 rounded-[4rem] rotate-3 scale-105"></div>
              
              {/* Main Console Window */}
              <div className="w-full h-full bg-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white p-8 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/20"></div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 flex items-center gap-2">
                    <Activity size={12} className="text-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">System Live</span>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  {/* Lead Processing Visual */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-tighter">Neural Capture</span>
                      <span className="text-[11px] font-mono text-primary">89.4% Eff.</span>
                    </div>
                    <div className="h-24 w-full bg-slate-50 rounded-2xl p-4 flex items-end gap-1">
                      {[...Array(15)].map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary/20 rounded-full animate-bar-grow"
                          style={{ 
                            height: `${30 + Math.random() * 70}%`,
                            animationDelay: `${i * 0.05}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Logs */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-tighter">Live Operations</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-black/[0.02] group hover:border-primary/20 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <Target size={14} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold leading-none mb-1">Lead ID: #4492 Calificado</p>
                          <p className="text-[9px] text-foreground/40">Intención de compra detectada: 9.4/10</p>
                        </div>
                        <ChevronRight size={14} className="text-foreground/20" />
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-black/[0.02]">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <Zap size={14} className="text-secondary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold leading-none mb-1">Cita Confirmada: Dental Alicante</p>
                          <p className="text-[9px] text-foreground/40">Auto-agendado por Voice Agent v4</p>
                        </div>
                        <ChevronRight size={14} className="text-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.03] flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100"></div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">+12</div>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-black text-foreground">+24.5k</p>
                    <p className="text-[9px] font-bold text-foreground/30 uppercase tracking-tighter">Operations / mo</p>
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes bar-grow {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.4); }
        }
        .animate-bar-grow {
          animation: bar-grow 2s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>
    </section>
  );
}
