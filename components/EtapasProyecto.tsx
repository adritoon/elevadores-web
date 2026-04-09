"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const etapas = [
  {
    id: "01",
    titulo: "Diseño",
    desc: "Estudios de tráfico vertical y diseño plano a plano. Nos integramos a tu obra desde el día uno para optimizar el espacio asegurando viabilidad.",
    imagen: "/servicios/diseño1.webp",
    link: "/servicios/diseno-e-ingenieria"
  },
  {
    id: "02",
    titulo: "Fabricación",
    desc: "Infraestructura propia para producir cabinas, chasis y estructuras metálicas con altos estándares de precisión industrial y resistencia.",
    imagen: "/servicios/fabricacion1.webp",
    link: "/servicios/fabricacion"
  },
  {
    id: "03",
    titulo: "Instalación",
    desc: "Nuestros técnicos certificados se encargan del montaje siguiendo normas estrictas de seguridad técnica, estructural y mecánica.",
    imagen: "/servicios/instalacion1.png",
    link: "/servicios/instalacion"
  },
  {
    id: "04",
    titulo: "Modernización",
    desc: "Actualizamos la tracción, los controles y la estética de elevadores antiguos, garantizando que el equipo recupere su valor y funcionamiento.",
    imagen: "/servicios/modernizacion1.jpg",
    link: "/servicios/modernizacion"
  }
];

export default function EtapasProyecto() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal Mejorado y Centrado */}
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tight">
            Ingeniería a la medida de <span className="text-accent lg:block lg:mt-2">tu proyecto</span>
          </h2>
          <p className="text-lg md:text-xl text-body-text/80 max-w-3xl mx-auto leading-relaxed">
            Nos integramos a tu obra en la fase exacta que lo requieras. Desde un proyecto integral llave en mano hasta un requerimiento específico.
          </p>
        </ScrollReveal>

        {/* Grid Alineado a la parte superior */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Menú de Fases (Ocupa 5/12) */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            {etapas.map((etapa, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={etapa.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative text-left py-6 border-b border-border transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                  }`}
                >
                  {/* Borde activo sutil por la izquierda */}
                  <div className={`absolute left-[-20px] top-1/2 -translate-y-1/2 w-1.5 rounded-r-md transition-all duration-300 ease-out bg-accent ${isActive ? "h-3/4" : "h-0"}`} />
                  
                  <div className="flex items-center gap-6">
                    <span className={`text-base font-extrabold tracking-widest transition-colors ${isActive ? "text-accent" : "text-primary"}`}>
                      {etapa.id}
                    </span>
                    <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight transition-all ${isActive ? "text-primary translate-x-3" : "text-primary"}`}>
                      {etapa.titulo}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Imagen Activa (Ocupa 7/12) */}
          <div className="lg:col-span-7 relative w-full h-[450px] md:h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full shadow-lg rounded-2xl overflow-hidden group bg-secondary"
              >
                {/* Imagen Limpia a pantalla completa en la caja */}
                <Image
                  src={etapas[activeTab].imagen}
                  alt={etapas[activeTab].titulo}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                {/* Capa imperceptible (5%) solo para asegurar que la tarjeta y bordes destaquen */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                
                {/* Botón Flotante en la Esquina */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                  <Link 
                    href={etapas[activeTab].link}
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all shadow-xl group/btn"
                  >
                    Ver Servicio <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
