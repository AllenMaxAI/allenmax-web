
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Activity, Layers, Database, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-52 px-6 overflow-hidden bg-background">
      {/* Texture & Grain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      {/* Mesh Gradients - Enhanced for depth */}
      <div className="absolute top-0 left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Editorial Content (The text you like) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">High Fidelity Systems</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl lg:text-[130px] font-black leading-[0.8] tracking-[-0.08em] text-foreground select-none">
                <span className="block animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">MENOS</span>
                <span className="block text-primary italic relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                  GESTIÓN,
                  <span className="absolute -right-8 top-0 text-xl font-mono text-foreground/20 hidden lg:block tracking-normal uppercase font-bold">01. Efficiency</span>
                </span>
                <span className="block animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                  MÁS <span className="text-foreground/10 transition-colors hover:text-primary/20 cursor-default">RESULTADOS</span>
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

          {/* Right Side: Isometric Glass Architecture */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px] perspective-[2000px]">
            <div className="relative w-full h-full flex items-center justify-center transform-gpu rotate-x-[25deg] rotate-y-[-15deg] rotate-z-[5deg]">
              
              {/* Layer 1: Data Infrastructure (Bottom) */}
              <div className="absolute w-[300px] h-[200px] bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm transform-gpu translate-z-[-100px] animate-layer-1 flex flex-col p-6 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <Database className="text-white/20 w-6 h-6" />
                  <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary/40 animate-progress"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded-full"></div>
                  <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                </div>
                <div className="mt-auto text-[8px] font-mono text-white/20">INFRASTRUCTURE_BASE_v4.2</div>
              </div>

              {/* Layer 2: Intelligence Engine (Middle) */}
              <div className="absolute w-[340px] h-[240px] bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md transform-gpu translate-z-0 animate-layer-2 flex items-center justify-center p-8 shadow-2xl ring-1 ring-white/10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-1000"></div>
                  <div className="relative w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 shadow-[0_0_40px_rgba(0,110,255,0.3)]">
                    <Cpu className="text-primary w-10 h-10 animate-pulse" />
                  </div>
                </div>
                <div className="ml-6 space-y-3 flex-1">
                  <div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-shimmer-fast"></div>
                  </div>
                  <div className="h-1.5 w-3/4 bg-primary/10 rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-tighter">AI Engine Active</div>
                  </div>
                </div>
              </div>

              {/* Layer 3: Results & Metrics (Top) */}
              <div className="absolute w-[280px] h-[180px] bg-white/20 border border-white/30 rounded-3xl backdrop-blur-lg transform-gpu translate-z-[100px] animate-layer-3 flex flex-col p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Sparkles className="text-green-400 w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase text-foreground/60 tracking-widest">ROI Delivery</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-3xl font-black text-foreground">94%</span>
                    <Activity className="text-primary w-4 h-4" />
                  </div>
                  <div className="flex gap-1 h-8 items-end">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-primary/20 rounded-t-sm animate-chart-up" 
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Connections */}
              <div className="absolute inset-0 z-[-1] pointer-events-none opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 400 400" className="overflow-visible">
                  <line x1="100" y1="100" x2="300" y2="300" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" className="animate-dash" />
                  <circle cx="200" cy="200" r="100" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" className="animate-spin-slow" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes layer-1 {
          0%, 100% { transform: translateZ(-100px) translateY(0); }
          50% { transform: translateZ(-110px) translateY(-5px); }
        }
        @keyframes layer-2 {
          0%, 100% { transform: translateZ(0) translateY(0); }
          50% { transform: translateZ(10px) translateY(-10px); }
        }
        @keyframes layer-3 {
          0%, 100% { transform: translateZ(100px) translateY(0); }
          50% { transform: translateZ(120px) translateY(-15px); }
        }
        .animate-layer-1 { animation: layer-1 6s ease-in-out infinite; }
        .animate-layer-2 { animation: layer-2 6s ease-in-out infinite 0.5s; }
        .animate-layer-3 { animation: layer-3 6s ease-in-out infinite 1s; }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress { animation: progress 3s linear infinite; }
        
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-fast { animation: shimmer-fast 1.5s infinite linear; }
        
        @keyframes chart-up {
          from { height: 0; opacity: 0; }
          to { opacity: 1; }
        }
        .animate-chart-up { animation: chart-up 1s ease-out forwards; }
        
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-dash {
          stroke-dasharray: 10;
          animation: dash 10s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </section>
  );
}
