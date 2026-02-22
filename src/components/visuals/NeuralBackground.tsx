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
      isGhost: boolean; // Partículas que ignoran el desvanecimiento rápido superior

      constructor(width: number, height: number, isGhost: boolean = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.12;
        this.vy = (Math.random() - 0.5) * 0.12;
        this.size = Math.random() * 1.5 + 0.5;
        this.isGhost = isGhost;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      getAlphaAtY(canvasHeight: number) {
        const yProgress = this.y / canvasHeight;
        
        // Si es una partícula "fantasma" (para los clústeres de abajo), mantenemos opacidad baja constante
        if (this.isGhost) return 0.12;

        // Para las partículas principales (arriba):
        // 0% - 10%: Opacidad 1
        // 10% - 30%: Desvanecimiento rápido
        if (yProgress < 0.1) return 1;
        if (yProgress < 0.3) {
          return 1 - ((yProgress - 0.1) / 0.2);
        }
        return 0.05; // Mínimo para las principales
      }

      draw(canvasHeight: number) {
        if (!ctx) return;
        const alpha = this.getAlphaAtY(canvasHeight) * 0.4;
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
      
      // Partículas densas en la parte superior (Hero)
      const topCount = Math.floor(width < 768 ? 60 : 120);
      for (let i = 0; i < topCount; i++) {
        const p = new Particle(width, height * 0.4, false);
        particles.push(p);
      }

      // Clústeres aleatorios "fantasma" por toda la página
      // Ponemos una densidad baja pero constante
      const ghostCount = Math.floor((height / 1000) * 20);
      for (let i = 0; i < ghostCount; i++) {
        const p = new Particle(width, height, true);
        particles.push(p);
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasHeight = canvas.height;

      particles.forEach((p, i) => {
        p.update(canvas.width, canvasHeight);
        p.draw(canvasHeight);

        const pAlpha = p.getAlphaAtY(canvasHeight);
        if (pAlpha < 0.01) return;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2Alpha = p2.getAlphaAtY(canvasHeight);
          if (p2Alpha < 0.01) continue;

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // La opacidad de la línea depende de la distancia y la opacidad de las partículas
            const combinedAlpha = Math.min(pAlpha, p2Alpha);
            const distFactor = (1 - dist / connectionDistance);
            const alpha = distFactor * combinedAlpha * 0.22;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
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
      style={{ opacity: 0.9 }}
    />
  );
}
