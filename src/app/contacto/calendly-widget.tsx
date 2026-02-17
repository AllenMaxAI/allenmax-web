'use client';

import { InlineWidget } from "react-calendly";

export function CalendlyWidget() {
  return (
    <div className="w-full h-[1000px] rounded-lg overflow-hidden">
       <InlineWidget 
        url="https://calendly.com/agency-allenmax/reunion-allenmax?hide_gdpr_banner=1"
        styles={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
}
