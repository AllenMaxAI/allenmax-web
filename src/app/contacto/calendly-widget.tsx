'use client';

import { InlineWidget } from "react-calendly";

export function CalendlyWidget() {
  return (
    <div className="w-full h-[700px] lg:h-full rounded-lg overflow-hidden">
       <InlineWidget 
        url="https://calendly.com/agency-allenmax/reunion-allenmax"
        styles={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
}
