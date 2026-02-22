'use client';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-12 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <Button asChild size="lg" className="font-bold h-14 px-8">
          <Link href="/contacto" className="flex items-center gap-3">
            Agendar llamada estratégica <Phone className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
