"use client";

import Link from "next/link";
import { servicios } from "../../lib/data";
import { ArrowRight, Ruler, Factory, Wrench, RefreshCw, Headset } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";

const IconMap: Record<string, any> = {
  Ruler, Factory, Wrench, RefreshCw, Headset
};

export default function ServiciosPage() {
  return (
    /* AJUSTE: pt-32 para dar espacio al Header fixed */
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 uppercase tracking-tight">
            Nuestros Servicios
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div> {/* Línea decorativa de acento */}
          <p className="text-lg text-body-text opacity-80 max-w-2xl mx-auto leading-relaxed">
            A través de ingeniería, creamos soluciones de elevación vertical seguras y eficientes para cada necesidad.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => {
            const IconComponent = IconMap[servicio.icono];
            return (
              <ScrollReveal delay={index * 0.1} key={servicio.slug}>
                <Link 
                  href={`/servicios/${servicio.slug}`}
                  className="group bg-white border border-border p-8 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden block w-full h-full"
                >
                  {/* Decoración sutil al hover */}
                  <div className="absolute top-0 right-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-300"></div>

                  <div className="w-14 h-14 bg-secondary text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-primary transition-colors">
                    {servicio.titulo}
                  </h3>
                  
                  <p className="text-body-text opacity-70 mb-8 flex-grow leading-relaxed line-clamp-4">
                    {servicio.descripcion}
                  </p>

                  <div className="mt-auto flex items-center text-primary font-extrabold text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                    Saber más 
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}