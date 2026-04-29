"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { servicios, productos } from "../lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar qué submenú está abierto en móvil
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para abrir/cerrar submenús en móvil
  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const headerBg = isHome && !isScrolled
    ? "bg-transparent border-transparent"
    : "bg-white border-b border-gray-200 shadow-sm";

  const textColor = isHome && !isScrolled
    ? "text-white hover:text-gray-300"
    : "text-primary hover:text-accent";

  const logoColor = isHome && !isScrolled ? "text-white" : "text-primary";
  const logoFilter = isHome && !isScrolled ? "brightness-0 invert" : "brightness-0";
  const dividerColor = isHome && !isScrolled ? "border-white/50" : "border-primary/30";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo SCMET */}
          <Link href="/" className="flex items-center justify-center group">
            <Image
              src="/logoascmet.png"
              alt="ASCMET Logo"
              width={48}
              height={48}
              className={`h-10 w-10 sm:h-12 sm:w-12 object-contain transition-all duration-300 ${logoFilter}`}
            />
            <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors leading-none ${logoColor}`}>
              SCMET
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`${textColor} transition-colors font-medium`}>Inicio</Link>
            <Link href="/nosotros" className={`${textColor} transition-colors font-medium`}>Nosotros</Link>

            {/* Desktop Dropdown Servicios */}
            <div className="relative group py-6">
              <Link href="/servicios" className={`flex items-center gap-1 ${textColor} transition-colors font-medium`}>
                Servicios <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                {servicios.map((s) => (
                  <Link key={s.slug} href={`/servicios/${s.slug}`} className="block px-4 py-3 text-sm text-primary hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    {s.titulo}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Dropdown Productos */}
            <div className="relative group py-6">
              <Link href="/productos" className={`flex items-center gap-1 ${textColor} transition-colors font-medium`}>
                Productos <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                {productos.map((p) => (
                  <Link key={p.slug} href={`/productos/${p.slug}`} className="block px-4 py-3 text-sm text-primary hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    {p.titulo}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contacto" className={`${textColor} transition-colors font-medium`}>Contacto</Link>
          </nav>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} focus:outline-none`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Expandible */}
      {isOpen && (
        <div className="md:hidden bg-white h-[calc(100vh-80px)] overflow-y-auto absolute w-full left-0 top-20 shadow-2xl border-t border-gray-100">
          <div className="px-4 py-6 space-y-2 text-primary">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-semibold border-b border-gray-50">Inicio</Link>
            <Link href="/nosotros" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-semibold border-b border-gray-50">Nosotros</Link>

            {/* Acordeón Móvil: Servicios */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('servicios')}
                className="flex w-full justify-between items-center px-4 py-3 text-lg font-semibold border-b border-gray-50"
              >
                Servicios <ChevronDown size={20} className={`transition-transform duration-200 ${mobileSubmenu === 'servicios' ? 'rotate-180 text-accent' : ''}`} />
              </button>
              {mobileSubmenu === 'servicios' && (
                <div className="bg-gray-50 py-2 border-b border-gray-100">
                  <Link href="/servicios" onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm font-bold text-accent">Ver Todos los Servicios</Link>
                  {servicios.map((s) => (
                    <Link key={s.slug} href={`/servicios/${s.slug}`} onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm text-gray-700 hover:text-accent">
                      {s.titulo}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Acordeón Móvil: Productos */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('productos')}
                className="flex w-full justify-between items-center px-4 py-3 text-lg font-semibold border-b border-gray-50"
              >
                Productos <ChevronDown size={20} className={`transition-transform duration-200 ${mobileSubmenu === 'productos' ? 'rotate-180 text-accent' : ''}`} />
              </button>
              {mobileSubmenu === 'productos' && (
                <div className="bg-gray-50 py-2 border-b border-gray-100">
                  <Link href="/productos" onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm font-bold text-accent">Ver Todos los Productos</Link>
                  {productos.map((p) => (
                    <Link key={p.slug} href={`/productos/${p.slug}`} onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm text-gray-700 hover:text-accent">
                      {p.titulo}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contacto" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-semibold">Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
}