'use client';

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';

// Use memo to prevent unnecessary re-renders of the banner content
const BannerContent = memo(({ openConfig, handleRejectAll, handleAcceptAll }: any) => (
  <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transform transition-transform animate-in slide-in-from-bottom-10 duration-500 will-change-transform">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1 text-sm text-slate-600 font-medium">
        <p>
          Utilizamos cookies propias y de terceros (como Calendly) para el correcto funcionamiento del sitio web y gestionar la reserva de citas. Puedes aceptar, rechazar o configurar su uso. Para más información, consulta nuestra{' '}
          <Link href="/cookies" className="text-primary hover:underline font-bold">Política de Cookies</Link>.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
        <button 
          onClick={openConfig}
          className="px-4 py-2.5 text-sm font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto"
        >
          Configurar
        </button>
        <button 
          onClick={handleRejectAll}
          className="px-4 py-2.5 text-sm font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto"
        >
          Rechazar
        </button>
        <button 
          onClick={handleAcceptAll}
          className="px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
));

BannerContent.displayName = 'BannerContent';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    technical: true, // always true
    thirdParty: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const prefs = JSON.parse(consent);
        setPreferences(prefs);
      } catch (e) {
        // If it was just 'accepted' or 'rejected' string in previous versions
        if (consent === 'accepted') {
          setPreferences({ technical: true, thirdParty: true });
        } else if (consent === 'rejected') {
          setPreferences({ technical: true, thirdParty: false });
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenConfig = () => {
      setShowConfig(true);
    };
    window.addEventListener('openCookieConfig', handleOpenConfig);
    return () => window.removeEventListener('openCookieConfig', handleOpenConfig);
  }, []);

  useEffect(() => {
    if (showConfig) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showConfig]);

  const handleAcceptAll = () => {
    const prefs = { technical: true, thirdParty: true };
    saveConsent(prefs);
  };

  const handleRejectAll = () => {
    const prefs = { technical: true, thirdParty: false };
    saveConsent(prefs);
  };

  const handleSaveConfig = () => {
    saveConsent(preferences);
    setShowConfig(false);
  };

  const saveConsent = (prefs: { technical: boolean, thirdParty: boolean }) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    // Dispatch event so other components (like Calendly) can react
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: prefs }));
  };

  const openConfig = () => {
    setShowConfig(true);
  };

  if (!showBanner && !showConfig) return null;

  return (
    <>
      {showBanner && !showConfig && (
        <BannerContent 
          openConfig={openConfig} 
          handleRejectAll={handleRejectAll} 
          handleAcceptAll={handleAcceptAll} 
        />
      )}

      {showConfig && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 animate-in fade-in duration-200 transform-gpu will-change-opacity">
          <div className="bg-white p-6 md:p-8 rounded-[2rem] max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200 transform-gpu will-change-transform">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-slate-900">Configuración de Cookies</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Técnicas (Necesarias)</h4>
                  <p className="text-xs text-slate-500 mt-1">Imprescindibles para el funcionamiento del sitio web.</p>
                </div>
                <div className="w-11 h-6 bg-slate-300 rounded-full relative opacity-50 cursor-not-allowed">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Terceros (Calendly)</h4>
                  <p className="text-xs text-slate-500 mt-1">Permite la carga de la reserva de citas online.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({...prev, thirdParty: !prev.thirdParty}))}
                  className={`w-11 h-6 rounded-full relative transition-colors ${preferences.thirdParty ? 'bg-primary' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${preferences.thirdParty ? 'translate-x-6' : 'translate-x-1'}`}></div>
                </button>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
              <button 
                onClick={() => {
                  setShowConfig(false);
                }}
                className="px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors text-center"
              >
                Volver
              </button>
              <button 
                onClick={handleSaveConfig}
                className="px-6 py-3 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-center"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

