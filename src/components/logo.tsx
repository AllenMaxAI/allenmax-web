import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-lg font-bold',
        className
      )}
    >
      <div className="bg-primary/20 p-2 rounded-lg">
        <Rocket className="h-5 w-5 text-primary" />
      </div>
      <span className="text-foreground">Synapse Growth</span>
    </Link>
  );
}
