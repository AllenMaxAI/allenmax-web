import { AdvisorForm } from './advisor-form';

export default function AsesorIAPage() {
  return (
    <>
      <section className="py-20 md:py-32 text-center bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Asesor de Servicios con IA</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            ¿No estás seguro por dónde empezar? Deja que nuestra inteligencia artificial analice tus necesidades y te recomiende la solución perfecta.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AdvisorForm />
        </div>
      </section>
    </>
  );
}
