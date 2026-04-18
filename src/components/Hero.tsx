
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Globe, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-52 px-6 overflow-hidden bg-background">
      {/* Texture & Grain Overlay - Adds a "printed" high-end feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[140px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Intelligence as a Service</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl lg:text-[130px] font-black leading-[0.8] tracking-[-0.08em] text-foreground select-none">
                <span className="block animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">MENOS</span>
                <span className="block text-primary italic relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                  GESTIÓN,
                  <span className="absolute -right-8 top-0 text-xl font-mono text-foreground/20 hidden lg:block tracking-normal uppercase font-bold">01. Efficiency</span>
                </span>
                <span className="block animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                  MÁS <span className="text-foreground/10 transition-colors hover:text-primary/20 cursor-default">ROI</span>
                </span>
              </h1>
            </div>

            <div className="max-w-xl space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <p className="text-xl lg:text-2xl text-foreground/50 font-medium leading-tight">
                Diseñamos arquitecturas de automatización que eliminan la fricción operativa y multiplican tu capacidad de cierre.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Button 
                  size="lg" 
                  className="h-16 rounded-full px-10 text-lg font-bold bg-primary hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,110,255,0.2)] group"
                >
                  Agendar consulta estratégica
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <div className="flex items-center gap-4 px-6 border-l border-foreground/10">
                  <div className="text-left">
                    <p className="text-sm font-black text-foreground">+40%</p>
                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Conversión media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The "Core" Abstract Visual */}
          <div className="lg:col-span-4 relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[400px] animate-in zoom-in duration-1000 delay-500">
              {/* Abstract Core Rings */}
              <div className="absolute inset-0 border border-foreground/[0.03] rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-foreground/[0.05] rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 border border-primary/20 rounded-full blur-[2px] animate-[pulse_4s_ease-in-out_infinite]"></div>
              
              {/* Central Processor Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-white p-6 flex flex-col justify-between overflow-hidden group hover:scale-105 transition-transform duration-500">
                  <div className="flex justify-between items-start">
                    <Cpu size={24} className="text-primary" />
                    <Activity size={12} className="text-primary animate-pulse" />
                  </div>
                  <div>
                    <div className="w-full h-1 bg-slate-100 rounded-full mb-2 overflow-hidden">
                      <div className="w-2/3 h-full bg-primary animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <p className="text-[9px] font-mono font-bold text-foreground/30 uppercase tracking-tighter">System Pulse</p>
                  </div>
                </div>
              </div>

              {/* Data Floating Elements */}
              <div className="absolute -top-4 -right-4 p-4 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Globe size={14} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-foreground">Lead Sync</p>
                    <p className="text-[8px] text-foreground/40">Real-time update</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 p-5 bg-foreground text-background rounded-2xl shadow-2xl animate-float">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-50">Performance</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black">99.8</span>
                  <span className="text-[10px] font-mono">ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
