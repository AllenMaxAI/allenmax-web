'use client';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 text-center">
      <div className="container mx-auto px-4">
        <Button asChild size="lg" className="btn-glow">
          <Link href="/contacto" className="flex items-center gap-2">
            Agendar llamada estratégica <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
