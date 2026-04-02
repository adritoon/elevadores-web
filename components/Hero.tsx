"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { texto: "Asesoría", imagen: "/hero/asesoria.webp" },
  { texto: "Diseño", imagen: "/hero/diseño.png" },
  { texto: "Fabricación", imagen: "/hero/fabricacion.jpeg" },
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
    /* NUEVO COLOR BASE: primary (Azul Corporativo Profundo) */
    <section className="relative h-[80vh] md:h-[90vh] min-h-[600px] w-full overflow-hidden bg-primary">
      
      {/* --- Capa 1: FONDO DINÁMICO --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Añadimos grayscale-[30%] para apagar los colores de la foto y darle un toque más metálico */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 grayscale-[30%]"
            style={{ backgroundImage: `url(${slides[index].imagen})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* --- Capa 2: OVERLAYS DE OSCURIDAD (Fijos) --- */}
      <div className="absolute inset-0 z-10">
        {/* Capa base oscura mate para contraste, y ocultar rojos de la foto */}
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Degradado para transición suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-primary" />
      </div>

      {/* --- Capa 3: CONTENIDO PRINCIPAL --- */}
      <div className="relative z-20 h-full flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge superior en tonos grises */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 mb-8 text-white font-semibold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-flex border border-white/20"
          >
            <ShieldCheck size={20} className="text-gray-300" />
            <span className="tracking-wide">Seguridad y eficiencia en cada nivel</span>
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
            {/* Subtítulo más limpio */}
            <span className="text-xl md:text-3xl font-light tracking-[0.3em] opacity-70 mt-2 uppercase text-gray-300">
              de elevadores
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones verticales de alta calidad adaptadas a las necesidades de tu edificio comercial, residencial o industrial.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* BOTÓN CROMADO/PLATEADO - El toque de diseño clave */}
            <Link 
              href="/contacto" 
              className="inline-flex justify-center items-center gap-2 bg-gradient-to-tr from-gray-200 via-white to-gray-300 text-primary px-10 py-5 rounded-md font-extrabold hover:scale-105 transition-all shadow-2xl group cursor-pointer border border-white"
            >
              Solicitar Cotización
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/servicios" 
              className="inline-flex justify-center items-center px-10 py-5 rounded-md font-extrabold text-white border-2 border-gray-400 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all cursor-pointer"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Decoración inferior degradada al nuevo color primario */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}