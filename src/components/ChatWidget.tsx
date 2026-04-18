
"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function ChatWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Abrir chat"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
        </span>
      </button>
    </div>
  );
}
