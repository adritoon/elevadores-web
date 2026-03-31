"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { texto: "Asesoría", imagen: "/hero/asesoria.webp" },
  { texto: "Diseño", imagen: "/hero/diseño.jpg" },
  { texto: "Fabricación", imagen: "/hero/fabricacion.jpg" },
  { texto: "Instalación", imagen: "/hero/instalacion.jpg" },
  { texto: "Modernización", imagen: "/hero/modernizacion.jpg" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#0A192F]">
      
      {/* --- Capa 1: FONDO DINÁMICO (Las imágenes puras) --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          /* z-0 asegura que las imágenes se queden atrás de todo */
          className="absolute inset-0 z-0"
        >
          {/* Imagen pura */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${slides[index].imagen})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* --- Capa 2: OVERLAYS DE OSCURIDAD (Fijos y Constantes) --- */}
      {/* z-10 sitúa estas capas SOBRE la imagen animada y DEBAJO del texto */}
      <div className="absolute inset-0 z-10">
        {/* Capa base de oscuridad uniforme (Azul marino del logo) */}
        <div className="absolute inset-0 bg-[#0A192F]/70" />
        
        {/* Capa de degradado extra para dar profundidad (de arriba a abajo) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/50 via-transparent to-[#0A192F]" />
      </div>

      {/* --- Capa 3: CONTENIDO PRINCIPAL (Texto y Botones) --- */}
      {/* z-20 y relative son CRÍTICOS para que esté al frente y reciba clics */}
      <div className="relative z-20 h-full flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 mb-8 text-slate-100 font-semibold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-flex border border-white/20"
          >
            <ShieldCheck size={20} className="text-slate-300" />
            <span>Seguridad y eficiencia en cada nivel</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-10 text-white flex flex-col items-center">
            <span className="relative min-h-[1.2em] flex justify-center items-center px-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="text-white uppercase tracking-tighter whitespace-nowrap"
                >
                  {slides[index].texto}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-xl md:text-3xl font-light tracking-[0.3em] opacity-80 mt-2 uppercase">
              de elevadores
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones verticales de alta calidad adaptadas a las necesidades de tu edificio comercial, residencial o industrial.
          </motion.p>
          
          {/* Botones de acción con z-index alto heredado del padre */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contacto" 
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-400 text-[#0A192F] px-10 py-5 rounded-md font-extrabold hover:scale-105 transition-all shadow-2xl group cursor-pointer"
            >
              Solicitar Cotización
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/servicios" 
              className="inline-flex justify-center items-center px-10 py-5 rounded-md font-extrabold text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all cursor-pointer"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Decoración inferior degradada con pointer-events-none para no bloquear clics */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}