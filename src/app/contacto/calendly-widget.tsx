'use client';

export function CalendlyWidget() {
  return (
    <div className="w-full max-w-4xl h-[1050px] rounded-lg overflow-hidden shadow-2xl">
       <iframe
        src="https://calendly.com/agency-allenmax/reunion-allenmax?hide_event_type_details=1&hide_gdpr_banner=1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
      />
    </div>
  );
}
