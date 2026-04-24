import React from 'react';

export default function LegalPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-slate-900">Aviso Legal</h1>
        <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">1. Datos identificativos</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">En cumplimiento de la normativa vigente, se informa de que:</p>
          <div className="text-slate-600 mb-6 font-medium leading-relaxed">
            <p className="mb-1"><span className="font-bold text-slate-800">Titular:</span> Jake Allen Rosas</p>
            <p className="mb-1"><span className="font-bold text-slate-800">NIF:</span> 77233937Y</p>
            <p className="mb-1"><span className="font-bold text-slate-800">Domicilio:</span> Málaga, España</p>
            <p><span className="font-bold text-slate-800">Correo electrónico:</span> hola@allenmax.com</p>
          </div>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">2. Objeto del sitio web</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">El presente sitio web tiene como finalidad ofrecer servicios de automatización, desarrollo de soluciones con inteligencia artificial y herramientas digitales para empresas.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">3. Condiciones de uso</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">El usuario se compromete a utilizar el sitio web de forma adecuada y a no realizar actividades ilícitas o contrarias a la buena fe.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">4. Propiedad intelectual e industrial</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Todos los contenidos del sitio web (textos, diseño, código, etc.) son propiedad del titular o cuentan con licencia, quedando prohibida su reproducción sin autorización.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">5. Responsabilidad</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">El titular no se responsabiliza de:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 font-medium space-y-1">
            <li>Errores u omisiones en los contenidos</li>
            <li>Problemas técnicos del sitio web</li>
            <li>Uso indebido por parte de los usuarios</li>
          </ul>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">6. Enlaces externos</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Este sitio web puede contener enlaces a terceros (como Calendly), sobre sobre los cuales no se tiene control ni responsabilidad.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">7. Legislación aplicable</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">La relación entre el usuario y el titular se regirá por la legislación española.</p>
        </div>
      </div>
    </div>
  );
}
