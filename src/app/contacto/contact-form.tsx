'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full btn-glow" size="lg">
      {pending ? <Loader2 className="animate-spin" /> : 'Enviar Mensaje'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: '', errors: {}, success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Mensaje Enviado",
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: "Error de Validación",
        description: "Por favor, corrige los errores en el formulario.",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Nombre</label>
          <Input id="name" name="name" placeholder="Tu nombre" required />
          {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
          <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
          {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">Empresa (Opcional)</label>
        <Input id="company" name="company" placeholder="Nombre de tu empresa" />
         {state.errors?.company && <p className="text-sm text-destructive mt-1">{state.errors.company[0]}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Mensaje</label>
        <Textarea id="message" name="message" placeholder="¿Cómo podemos ayudarte?" rows={5} required />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
