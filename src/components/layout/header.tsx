'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  LayoutDashboard,
  TrendingUp,
  BrainCircuit,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React from 'react';

const serviceLinks = [
  {
    href: '/servicios',
    label: 'Visión General',
    icon: <LayoutDashboard />,
    description: 'Nuestra arquitectura estratégica de crecimiento.'
  },
  {
    href: '/servicios/marketing-digital',
    label: 'Marketing Digital',
    icon: <TrendingUp />,
    description: 'Sistemas de captación y conversión de alto impacto.'
  },
  {
    href: '/servicios/ia',
    label: 'Inteligencia Artificial',
    icon: <BrainCircuit />,
    description: 'Automatización y eficiencia operativa avanzada.'
  },
];

const navLinks = [
  { href: '/servicios/agencia-ia', label: 'Agencia IA', icon: <Bot className="h-4 w-4" /> },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-white/5 transition-all duration-300',
        isScrolled ? 'bg-[#020817]/90 backdrop-blur-sm' : 'bg-[#020817]'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/5">Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#020817] border border-white/5 shadow-2xl">
                      {serviceLinks.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group"
                            >
                              <div className="flex items-center gap-2 text-sm font-bold leading-none text-white group-hover:text-primary transition-colors">
                                {React.cloneElement(service.icon as React.ReactElement, {
                                  className: 'h-4 w-4',
                                })}
                                {service.label}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  navigationMenuTriggerStyle(), 
                  "bg-transparent hover:bg-white/5 gap-2",
                  link.href === '/servicios/agencia-ia' && "text-primary font-bold"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex shrink-0 md:hidden ml-auto">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[320px] bg-[#020817] border-white/5 p-0"
              >
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-6">
                    <Logo />
                  </div>
                  <nav className="flex flex-col gap-2 mt-8">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2">Estructura</p>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-md text-lg font-medium transition-colors hover:bg-white/5",
                          link.href === '/servicios/agencia-ia' ? "text-primary bg-primary/5" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                    <div className="my-4 border-t border-white/5" />
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2">Servicios</p>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 p-3 rounded-md text-lg font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {React.cloneElement(link.icon as React.ReactElement, {
                          className: 'h-5 w-5',
                        })}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}