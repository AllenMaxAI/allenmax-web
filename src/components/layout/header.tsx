'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  LayoutDashboard,
  TrendingUp,
  BrainCircuit,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React from 'react';

const serviceLinks = [
  {
    href: '/servicios',
    label: 'Visión General de Servicios',
    icon: <LayoutDashboard />,
  },
  {
    href: '/servicios/marketing-digital',
    label: 'Marketing Digital',
    icon: <TrendingUp />,
  },
  {
    href: '/servicios/ia',
    label: 'Inteligencia Artificial',
    icon: <BrainCircuit />,
  },
];

const navLinks = [
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
        'sticky top-0 z-50 w-full border-b border-border transition-all duration-300',
        isScrolled ? 'bg-header/90 backdrop-blur-sm' : 'bg-header'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-2 md:w-[300px]">
                      {serviceLinks.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="flex items-center gap-3 select-none rounded-md p-3 text-sm no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {React.cloneElement(service.icon, {
                                className: 'h-4 w-4',
                              })}
                              <span>{service.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-[320px] bg-background"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b pb-4">
                      <Logo />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                    <nav className="flex flex-col gap-1 mt-8">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-3 p-3 rounded-md text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {React.cloneElement(link.icon, {
                            className: 'h-5 w-5',
                          })}
                          <span>{link.label}</span>
                        </Link>
                      ))}
                      <div className="my-2 border-t" />
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="p-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
