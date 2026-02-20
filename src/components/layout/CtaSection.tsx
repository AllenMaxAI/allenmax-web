import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Da el salto.
          </h2>
          <p className="text-base text-muted-foreground">
            Podemos ayudarte a construirlo. El siguiente paso es una conversación estratégica.
          </p>
          <div className="pt-4">
            <Button asChild className="btn-glow">
              <Link href="/contacto" className="flex items-center gap-2">
                Agendar llamada estratégica <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
