
"use client";

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Script from 'next/script';
import { Card } from '@/components/ui/card';

export default function ContactoPage() {
  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
      {/* Texture & Grain Overlay (Home style) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      {/* Mesh Gradients (Home style) */}
      <div className="absolute top-0 left-[-10%] w-[70%] h-[1000px] bg-primary/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[60%] h-[800px] bg-blue-400/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Strategic Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Sesión Estratégica</p>
                <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-foreground uppercase">
                  Hablemos de tu <br />
                  <span className="text-primary italic">crecimiento.</span>
                </h1>
              </div>
              
              <div className="w-16 h-1.5 bg-primary rounded-full"></div>
              
              <p className="text-lg text-foreground/60 font-medium leading-relaxed max-w-md">
                Agenda una sesión estratégica para estructurar tu sistema de captación y escalado con un enfoque de alto rendimiento.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">En esta sesión estratégica:</h3>
              <ul className="space-y-5">
                {[
                  "Analizaremos tu situación actual",
                  "Detectaremos oportunidades de mejora",
                  "Evaluaremos cómo estructurar tu sistema de crecimiento",
                  "Resolveremos tus dudas con total claridad"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-foreground/5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 leading-relaxed max-w-xs">
                Construimos algo que tenga sentido a largo plazo para tu negocio mediante ingeniería de automatización.
              </p>
            </div>
          </div>

          {/* Right Column: Calendly Widget */}
          <div className="lg:col-span-7">
            <Card className="bg-white rounded-[48px] border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden p-2">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/agency-allenmax/reunion-allenmax" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              <Script 
                src="https://assets.calendly.com/assets/external/widget.js" 
                strategy="lazyOnload"
              />
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
