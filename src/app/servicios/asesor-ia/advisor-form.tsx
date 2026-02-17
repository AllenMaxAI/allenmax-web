'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getServiceRecommendation, AdvisorFormState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Loader2, Wand2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto btn-glow" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analizando...
        </>
      ) : (
        <>
          Obtener Recomendación <Wand2 className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function AdvisorForm() {
  const initialState: AdvisorFormState = {
    message: '',
    data: null,
    errors: null,
  };
  const [state, formAction] = useFormState(getServiceRecommendation, initialState);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.data && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.data]);

  return (
    <div>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Describe tu Negocio</CardTitle>
          <CardDescription>
            Proporciona detalles sobre tus necesidades y objetivos para que nuestra IA pueda darte la mejor recomendación.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div>
              <label htmlFor="businessNeeds" className="block text-sm font-medium text-muted-foreground mb-2">
                Necesidades del Negocio
              </label>
              <Textarea
                id="businessNeeds"
                name="businessNeeds"
                placeholder="Ej: 'Nuestro equipo de ventas pasa mucho tiempo calificando leads manualmente y el seguimiento es inconsistente. La atención al cliente se satura en horas pico.'"
                rows={5}
                required
              />
              {state.errors?.businessNeeds && <p className="text-sm text-destructive mt-1">{state.errors.businessNeeds[0]}</p>}
            </div>
            <div>
              <label htmlFor="businessGoals" className="block text-sm font-medium text-muted-foreground mb-2">
                Objetivos del Negocio
              </label>
              <Textarea
                id="businessGoals"
                name="businessGoals"
                placeholder="Ej: 'Queremos aumentar las ventas un 20% en 6 meses, reducir el coste de atención al cliente y mejorar la satisfacción del cliente.'"
                rows={5}
                required
              />
              {state.errors?.businessGoals && <p className="text-sm text-destructive mt-1">{state.errors.businessGoals[0]}</p>}
            </div>
            <div className="flex justify-end">
              <SubmitButton />
            </div>
             {state.errors?.server && <p className="text-sm text-destructive mt-4 text-center">{state.errors.server}</p>}
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <div ref={resultsRef} className="mt-12 max-w-3xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-3">
              <BrainCircuit className="h-8 w-8 text-primary"/>
              Recomendación Personalizada
            </h2>
            <p className="text-muted-foreground mt-2">Basado en tu información, estos son los servicios que más te beneficiarán.</p>
          </div>
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle>Servicios Recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside mb-6">
                {state.data.recommendedServices.map((service, index) => (
                  <li key={index} className="font-semibold text-lg">{service}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Explicación:</h4>
              <p className="text-muted-foreground whitespace-pre-wrap">{state.data.explanation}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
