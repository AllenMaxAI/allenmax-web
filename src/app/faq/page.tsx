import React from 'react';
import { Section } from '@/components/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQPage() {
  return (
    <div className="pt-24 bg-background">
      <Section id="faq" title="Preguntas Frecuentes" subtitle="Resolvemos tus dudas sobre cómo integrar la IA en tu negocio">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold">¿Es AllenMax solo para clínicas dentales?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                No exclusivamente. Aunque tenemos un CRM especializado para el sector dental, nuestras soluciones de automatización, chatbots y agentes de voz son totalmente aplicables a cualquier empresa de servicios (estética, legal, inmobiliaria, etc.) que busque optimizar su captación.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold">¿Cómo se integra con mis sistemas actuales?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Utilizamos integraciones nativas y herramientas como Zapier o Make para conectar nuestra IA con casi cualquier software que ya utilices (CRM, ERP, Calendarios, Google Sheets, etc.). No tienes que cambiar tus herramientas si no quieres.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold">¿Cuánto tiempo tarda la implementación?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Dependiendo de la complejidad, un sistema base de atención por IA puede estar operativo en menos de 2 semanas. El despliegue del CRM dental configurado para tu clínica suele tardar entre 5 y 7 días hábiles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold">¿La IA suena como un robot?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Nuestra Ingeniería de Prompts avanzada permite que los agentes de voz y chatbots suenen extremadamente humanos, utilicen el tono de voz de tu marca y manejen objeciones con total naturalidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold">¿Qué soporte ofrecéis tras la instalación?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Ofrecemos mantenimiento continuo y optimización de flujos. La IA aprende de cada interacción, y nosotros ajustamos su lógica periódicamente para asegurar que los resultados siempre vayan a más.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>
    </div>
  );
}
