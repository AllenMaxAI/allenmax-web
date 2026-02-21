'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
};

type ServicesSectionProps = {
  services: Service[];
};

function FadeInSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <FadeInSection
              key={service.title}
              className="grid md:grid-cols-2 gap-16 items-start"
            >
              <div
                className={cn(
                  'space-y-6',
                  index % 2 !== 0 && 'md:order-2'
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl text-primary">
                    {React.cloneElement(service.icon as React.ReactElement, {
                      className: 'h-6 w-6',
                    })}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className={cn(index % 2 !== 0 && 'md:order-1')}>
                <h4 className="font-semibold text-foreground mb-6">
                  Incluye:
                </h4>
                <ul className="space-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
