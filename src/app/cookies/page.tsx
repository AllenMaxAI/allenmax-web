import React from 'react';

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-slate-900">Política de Cookies</h1>
        <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">1. ¿Qué son las cookies?</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Las cookies son archivos que se almacenan en el navegador del usuario al visitar una web y permiten mejorar la experiencia de navegación.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">2. Tipos de cookies utilizadas</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">Este sitio web utiliza únicamente:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 font-medium space-y-1">
            <li>Cookies técnicas necesarias para el funcionamiento</li>
            <li>Cookies de terceros asociadas a herramientas externas como Calendly</li>
          </ul>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">3. Cookies de terceros</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">Al utilizar el sistema de reserva de citas, Calendly puede instalar cookies propias en el navegador del usuario.</p>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Estas cookies son gestionadas directamente por dicho proveedor.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">4. Gestión de cookies</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">El usuario puede permitir, bloquear o eliminar las cookies desde la configuración de su navegador.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">5. Consentimiento</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Al continuar navegando o utilizar los servicios del sitio web, el usuario acepta el uso de cookies.</p>
        </div>
      </div>
    </div>
  );
}
