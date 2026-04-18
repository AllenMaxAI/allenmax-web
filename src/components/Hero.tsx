
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Zap, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-52 px-6 overflow-hidden bg-background">
      {/* Texture & Grain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      {/* Mesh Gradients */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Systems Engineering</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl lg:text-[130px] font-black leading-[0.8] tracking-[-0.08em] text-foreground select-none">
                <span className="block animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">MENOS</span>
                <span className="block text-primary italic relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                  GESTIÓN,
                  <span className="absolute -right-8 top-0 text-xl font-mono text-foreground/20 hidden lg:block tracking-normal uppercase font-bold">01. ROI Focus</span>
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

          {/* Right Side: The "Automation Matrix" - Unique Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[500px] animate-in zoom-in duration-1000 delay-500">
              
              {/* Background Grid Layer */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Animated Intelligence Paths */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 400 400" className="overflow-visible">
                  {/* Path 1 */}
                  <path d="M 50 100 Q 150 50 200 200 T 350 300" stroke="url(#gradient1)" strokeWidth="2" fill="none" className="animate-path" />
                  {/* Path 2 */}
                  <path d="M 350 100 Q 250 150 200 200 T 50 300" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" className="animate-path-slow" />
                  
                  {/* Gradients */}
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="hsl(var(--secondary))" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>

                  {/* Nodes */}
                  <circle cx="200" cy="200" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
                  <circle cx="50" cy="100" r="3" fill="hsl(var(--foreground))" fillOpacity="0.2" />
                  <circle cx="350" cy="300" r="3" fill="hsl(var(--foreground))" fillOpacity="0.2" />
                </svg>
              </div>

              {/* The "Intelligence Core" */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse"></div>
                  
                  {/* Central Geometric Core */}
                  <div className="relative w-40 h-40 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"></div>
                    
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Cpu className="text-primary w-8 h-8" />
                    </div>
                    
                    <div className="text-center space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Core Processor</p>
                      <div className="flex items-center gap-2 justify-center">
                        <Activity className="text-primary w-3 h-3 animate-pulse" />
                        <span className="text-xs font-mono font-bold">ACTIVE</span>
                      </div>
                    </div>

                    {/* Technical details overlay */}
                    <div className="absolute bottom-2 right-2 opacity-20">
                      <Zap size={12} />
                    </div>
                  </div>

                  {/* Floating Metric Tags (More editorial than generic cards) */}
                  <div className="absolute -top-12 -left-12 px-4 py-2 bg-foreground text-background rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl animate-float">
                    Automated Workflow
                  </div>
                  <div className="absolute -bottom-8 -right-8 px-4 py-2 bg-white border border-foreground/10 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg animate-float-slow">
                    Latency: 12ms
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(10px) rotate(-2deg); }
        }
        .animate-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 10s linear infinite;
        }
        .animate-path-slow {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 15s linear infinite reverse;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
