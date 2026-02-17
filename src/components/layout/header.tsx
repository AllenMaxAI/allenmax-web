'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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

const navLinks = [
  { href: '/nosotros', label: 'Nosotros' },
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
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                       <ListItem href="/servicios" title="Todos los Servicios">
                        Explora nuestra oferta completa de soluciones.
                      </ListItem>
                      <ListItem href="/servicios/ia" title="Inteligencia Artificial">
                        Soluciones de IA para la máxima eficiencia.
                      </ListItem>
                      <ListItem href="/servicios/marketing-digital" title="Marketing Digital">
                        Estrategias de crecimiento y conversión.
                      </ListItem>
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
                <SheetContent side="right" className="w-full sm:w-[320px] bg-background">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b pb-4">
                       <Logo />
                       <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                          <X className="h-6 w-6" />
                       </Button>
                    </div>
                    <nav className="flex flex-col gap-4 mt-8 text-lg">
                      <span className="font-semibold">Servicios</span>
                       <Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors pl-4" onClick={() => setIsMobileMenuOpen(false)}>Todos los Servicios</Link>
                       <Link href="/servicios/ia" className="text-muted-foreground hover:text-primary transition-colors pl-4" onClick={() => setIsMobileMenuOpen(false)}>Inteligencia Artificial</Link>
                       <Link href="/servicios/marketing-digital" className="text-muted-foreground hover:text-primary transition-colors pl-4" onClick={() => setIsMobileMenuOpen(false)}>Marketing Digital</Link>
                    
                       <div className="mt-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"
