
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, title, subtitle, children, className, dark }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", dark ? "bg-foreground text-background" : "bg-transparent", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className={cn("text-lg max-w-2xl mx-auto", dark ? "text-background/70" : "text-foreground/70")}>{subtitle}</p>}
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
}
