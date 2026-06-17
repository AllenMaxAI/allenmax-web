import React from 'react';
import { Section } from '@/components/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const siteUrl = 'https://allenmax.com';
const faqItems = [
  {
    question: '¿Qué hace AllenMax?',
    answer:
      'Diseñamos sistemas de automatización con IA para captar, responder y gestionar clientes, incluyendo agentes de voz, chatbots, CRM e integraciones con herramientas como n8n.',
  },
  {
    question: '¿Qué negocios pueden automatizarse con IA?',
    answer:
      'Trabajamos con negocios de servicios, clínicas, despachos, inmobiliarias, educación y empresas locales que quieran ahorrar tiempo y convertir mejor.',
  },
  {
    question: '¿Trabajáis solo en Málaga?',
    answer:
      'No. Estamos orientados a negocios de Málaga, pero servimos a empresas de toda España de forma remota y con despliegues a medida.',
  },
  {
    question: '¿Qué incluye un agente de voz con IA?',
    answer:
      'Puede atender llamadas, responder preguntas frecuentes, cualificar oportunidades, agendar citas y derivar incidencias según reglas de negocio.',
  },
  {
    question: '¿Qué incluye un chatbot con IA?',
    answer:
      'Responde dudas al instante, califica leads, propone siguientes pasos y conecta con tu CRM o calendarios para no perder oportunidades.',
  },
  {
    question: '¿Podéis integrar n8n, CRM y calendarios?',
    answer:
      'Sí. Creamos integraciones con n8n, CRM, Google Calendar y otras herramientas para que todo fluya sin trabajo manual repetitivo.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Section id="faq" title="Preguntas Frecuentes" subtitle="Resolvemos tus dudas sobre cómo integrar la IA en tu negocio en Málaga y toda España">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left font-bold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
    </div>
  );
}
