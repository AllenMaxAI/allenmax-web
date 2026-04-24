import React from 'react';

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-slate-900">Política de Privacidad</h1>
        <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">1. Responsable del tratamiento</h2>
          <div className="text-slate-600 mb-6 font-medium leading-relaxed">
            <p className="mb-1"><span className="font-bold text-slate-800">Titular:</span> Jake Allen Rosas</p>
            <p className="mb-1"><span className="font-bold text-slate-800">NIF:</span> 77233937Y</p>
            <p className="mb-1"><span className="font-bold text-slate-800">Domicilio:</span> Málaga, España</p>
            <p><span className="font-bold text-slate-800">Correo electrónico:</span> hola@allenmax.com</p>
          </div>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">2. Datos personales recogidos</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">En este sitio web únicamente se recogen datos personales cuando el usuario solicita una cita a través de la herramienta Calendly.</p>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">Los datos pueden incluir:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 font-medium space-y-1">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Teléfono (opcional)</li>
            <li>Información adicional proporcionada por el usuario</li>
          </ul>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">3. Finalidad del tratamiento</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">Los datos se utilizan exclusivamente para:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-4 font-medium space-y-1">
            <li>Gestionar solicitudes de cita</li>
            <li>Contactar con el usuario</li>
            <li>Prestar servicios de automatización e inteligencia artificial</li>
          </ul>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed italic">No se enviarán comunicaciones comerciales ni publicidad sin consentimiento previo.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">4. Base legal</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">La base legal es el consentimiento del usuario al completar el formulario de reserva.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">5. Uso de herramientas de terceros</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">Para la gestión de citas se utiliza Calendly, que puede tratar datos personales como encargado del tratamiento.</p>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Se recomienda revisar su política de privacidad en su sitio web.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">6. Conservación de datos</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron o mientras exista obligación legal.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">7. Cesión de datos</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">No se cederán datos a terceros, salvo obligación legal o proveedores necesarios para la prestación del servicio.</p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">8. Derechos del usuario</h2>
          <p className="text-slate-600 mb-4 font-medium leading-relaxed">El usuario puede ejercer sus derechos de:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-4 font-medium space-y-1">
            <li>Acceso</li>
            <li>Rectificación</li>
            <li>Supresión</li>
            <li>Oposición</li>
            <li>Limitación del tratamiento</li>
          </ul>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Enviando una solicitud a: <a href="mailto:hola@allenmax.com" className="text-primary hover:underline font-bold">hola@allenmax.com</a></p>
          
          <h2 className="text-2xl mt-12 mb-4 font-black uppercase tracking-tighter text-slate-900">9. Seguridad de los datos</h2>
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">Se aplican medidas de seguridad adecuadas para proteger los datos personales.</p>
        </div>
      </div>
    </div>
  );
}
