'use client';

export function CalendlyWidget() {
  return (
    <div className="w-full h-[1000px] rounded-lg overflow-hidden">
       <iframe
        src="https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
      />
    </div>
  );
}
