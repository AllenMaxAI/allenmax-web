'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export default function ContactoPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: '¡Mensaje enviado!',
      description: 'Gracias por contactarnos. Te responderemos pronto.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Contacto
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ¿Tienes alguna pregunta o quieres iniciar un proyecto? Rellena el
          formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full btn-glow">
              <Send className="mr-2 h-5 w-5" />
              Enviar Mensaje
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
