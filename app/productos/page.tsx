"use client";

import Link from "next/link";
import { productos } from "../../lib/data";
import { 
  ArrowRight, 
  Accessibility, 
  Box, 
  Building2, 
  Warehouse, 
  Cpu 
} from "lucide-react";

// Mapeo de iconos para que cada producto tenga su propia identidad visual
// Asegúrate de poner estos nombres en el campo 'icono' de tu lib/data.ts
const IconMap: Record<string, any> = {
  Accessibility, // Para discapacitados
  Box,           // Para carga
  Building2,     // Para edificios residenciales
  Warehouse,     // Para industriales
  Cpu            // Para tecnología/especiales
};

export default function ProductosPage() {
  return (
    /* Ajuste de pt-32 para el Header Fixed */
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 uppercase tracking-tight">
            Catálogo de Productos
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-body-text opacity-80 max-w-2xl mx-auto leading-relaxed">
            Soluciones de accesibilidad y elevación diseñadas con los más altos estándares de ingeniería y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => {
            // Si no hay icono definido, usamos Box por defecto
            const IconComponent = IconMap[producto.icono] || Box;
            
            return (
              <Link 
                key={producto.slug} 
                href={`/productos/${producto.slug}`}
                className="group bg-white border border-border p-8 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                {/* Línea decorativa lateral */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300"></div>

                <div className="w-14 h-14 bg-secondary text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {producto.titulo}
                </h3>
                
                <p className="text-body-text opacity-70 mb-8 flex-grow leading-relaxed line-clamp-4">
                  {producto.descripcion}
                </p>
                
                <div className="mt-auto flex items-center text-primary font-extrabold text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                  Explorar Modelos 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}