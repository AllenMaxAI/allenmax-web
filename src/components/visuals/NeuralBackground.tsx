'use client';

import React, { useEffect, useRef } from 'react';

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const connectionDistance = 180;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alphaFactor: number; // Factor individual para clústeres aleatorios

      constructor(width: number, height: number, isLowerCluster: boolean = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.size = Math.random() * 1.5 + 0.5;
        // Los clústeres de abajo son mucho más tenues por defecto
        this.alphaFactor = isLowerCluster ? Math.random() * 0.3 : 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      getAlphaAtY(canvasHeight: number) {
        const yProgress = this.y / canvasHeight;
        
        // Zona superior: 0% a 15% -> Opacidad alta
        // Transición rápida: 15% a 35% -> Baja a casi 0
        // Resto: 35% a 100% -> Pequeños clústeres "fantasma"
        
        if (yProgress < 0.15) return 1;
        if (yProgress < 0.4) {
          const t = (yProgress - 0.15) / 0.25;
          return 1 - t * 0.92; // Cae al 8% de opacidad
        }
        return 0.08 * this.alphaFactor; // Mantener un mínimo muy bajo para los clústeres random
      }

      draw(canvasHeight: number) {
        if (!ctx) return;
        const alpha = this.getAlphaAtY(canvasHeight) * 0.45;
        if (alpha < 0.01) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fill();
      }
    }

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      init();
    };

    const init = () => {
      if (!canvas) return;
      particles = [];
      
      const height = canvas.height;
      const width = canvas.width;
      
      // Partículas densas arriba (primeros 40% de la altura visual)
      const topCount = Math.floor(width < 768 ? 60 : 100);
      for (let i = 0; i < topCount; i++) {
        const p = new Particle(width, height * 0.3);
        particles.push(p);
      }

      // Partículas aleatorias por todo el resto de la página (clústeres "fantasma")
      const scatteredCount = Math.floor((height / 1000) * 30);
      for (let i = 0; i < scatteredCount; i++) {
        const p = new Particle(width, height, true);
        particles.push(p);
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height);
        p.draw(canvas.height);

        const pAlpha = p.getAlphaAtY(canvas.height);
        if (pAlpha < 0.01) return;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2Alpha = p2.getAlphaAtY(canvas.height);
          if (p2Alpha < 0.01) continue;

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            // La opacidad de la línea depende del promedio de las dos partículas y la distancia
            const combinedAlpha = Math.min(pAlpha, p2Alpha);
            const distFactor = (1 - dist / connectionDistance);
            const alpha = distFactor * combinedAlpha * 0.25;
            
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
