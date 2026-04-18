import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ChatWidget } from '@/components/ChatWidget';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Shield, BarChart3, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const serviceImages = PlaceHolderImages.filter(img => img.id.startsWith('service-'));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />

        <Section id="proceso" title="Nuestro Proceso" subtitle="Cómo transformamos tu negocio paso a paso">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "1. Análisis", desc: "Auditamos tus procesos actuales para identificar cuellos de botella." },
              { title: "2. Diseño", desc: "Creamos una estrategia personalizada de IA adaptada a tus objetivos." },
              { title: "3. Implementación", desc: "Desplegamos las soluciones y formamos a tu equipo para el éxito." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 bg-white rounded-2xl border hover:shadow-xl transition-shadow group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="servicios" title="Servicios IA" subtitle="Soluciones inteligentes para desafíos reales" className="bg-white/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Chatbots Personalizados", icon: <Users />, desc: "Atención al cliente 24/7 con lenguaje natural." },
              { title: "Automatización de Workflows", icon: <Zap />, desc: "Elimina tareas repetitivas y gana horas de productividad." },
              { title: "Análisis Predictivo", icon: <BarChart3 />, desc: "Toma decisiones basadas en datos y predicciones precisas." },
              { title: "Procesamiento de Documentos", icon: <Brain />, desc: "Extracción inteligente de información de facturas y contratos." },
              { title: "Ciberseguridad IA", icon: <Shield />, desc: "Protección avanzada contra amenazas modernas." },
              { title: "Herramientas Custom", icon: <Wrench />, desc: "Desarrollo de software a medida con núcleo de IA." }
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all cursor-default">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/60">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="beneficios" title="Beneficios" subtitle="Por qué elegir la automatización inteligente" dark>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Reducción de costes operativos hasta un 40%",
                "Eliminación total del error humano en tareas críticas",
                "Escalabilidad inmediata sin aumentar plantilla",
                "Mejora drástica en la experiencia del cliente"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10">
                  <div className="w-6 h-6 bg-secondary text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              {serviceImages[0] && (
                <Image 
                  src={serviceImages[0].imageUrl} 
                  alt={serviceImages[0].description} 
                  width={600} 
                  height={400} 
                  className="rounded-2xl relative z-10 shadow-2xl"
                  data-ai-hint={serviceImages[0].imageHint}
                />
              )}
            </div>
          </div>
        </Section>

        <Section id="nosotros" title="Sobre Nosotros" subtitle="Expertos en IA con base en Alicante">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-foreground/70 mb-8">
              En AllenMax, creemos que la tecnología debe estar al servicio de las personas. Nuestro equipo combina décadas de experiencia en desarrollo de software con las últimas innovaciones en modelos de lenguaje y visión artificial para ofrecer soluciones que realmente impactan en la cuenta de resultados de nuestros clientes.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">150+</p>
                <p className="text-sm text-foreground/50">Proyectos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-foreground/50">Expertos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-foreground/50">Satisfacción</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="faq" title="Preguntas Frecuentes" subtitle="Resolvemos tus dudas sobre la implementación" className="bg-white/50">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "¿Es la IA adecuada para mi pequeño negocio?", a: "Absolutamente. La IA no es solo para grandes corporaciones. Tenemos soluciones escalables que se amortizan en pocos meses incluso en PYMES." },
                { q: "¿Cuánto tiempo tarda la implementación?", a: "Depende de la complejidad, pero una automatización estándar suele estar lista en 2 a 4 semanas." },
                { q: "¿Necesito conocimientos técnicos?", a: "Ninguno. Nosotros nos encargamos de todo el desarrollo y te entregamos una herramienta fácil de usar." },
                { q: "¿Qué pasa con la privacidad de mis datos?", a: "La seguridad es nuestra prioridad. Implementamos soluciones que cumplen con la RGPD y aseguran que tus datos nunca se usen para entrenar modelos públicos sin consentimiento." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-bold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        <Section id="blog" title="Nuestro Blog" subtitle="Últimas noticias y consejos sobre IA">
           <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "El futuro de las PYMES en Alicante", date: "12 Mar, 2024" },
              { title: "5 herramientas de IA gratuitas para tu equipo", date: "08 Mar, 2024" },
              { title: "Cómo ahorrar 10 horas a la semana con automatización", date: "01 Mar, 2024" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden">
                  <img src={`https://picsum.photos/seed/blog${i}/600/400`} alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-xs text-primary font-bold mb-2 uppercase tracking-widest">{post.date}</p>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </Section>

        <Section id="herramientas" title="Herramientas" subtitle="Recursos gratuitos para empezar hoy" className="bg-primary text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold leading-tight">Calculadora de ROI de Automatización</h3>
              <p className="text-white/80 text-lg">
                Descubre exactamente cuánto dinero y tiempo podrías estar ahorrando cada mes con nuestra herramienta de diagnóstico gratuita.
              </p>
              <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 px-8 py-6 font-bold">
                Probar herramienta gratuita
              </Button>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
               <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="h-4 bg-white/20 rounded-full w-full"></div>
                 ))}
                 <div className="h-4 bg-white/20 rounded-full w-2/3"></div>
                 <div className="pt-4 flex justify-between">
                    <div className="w-20 h-20 bg-secondary/20 rounded-2xl"></div>
                    <div className="w-20 h-20 bg-secondary/20 rounded-2xl"></div>
                    <div className="w-20 h-20 bg-secondary/20 rounded-2xl"></div>
                 </div>
               </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
