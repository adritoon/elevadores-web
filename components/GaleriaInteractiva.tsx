"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import BotonCotizar from "./BotonCotizar";

type ItemGaleria = {
  id: string;
  imagen: string;
  nombre: string;
  precio?: string;
  diferencia?: string;
  caracteristicas?: string[];
};

// Agregamos categoriaPadre a la definición de las Props
export default function GaleriaInteractiva({
  items,
  categoriaPadre
}: {
  items: ItemGaleria[],
  categoriaPadre: string
}) {
  const [indiceActivo, setIndiceActivo] = useState<number | null>(null);
  const [direccion, setDireccion] = useState(0); // -1 = prev, 1 = next (para animación)

  const seleccionado = indiceActivo !== null ? items[indiceActivo] : null;

  const navegar = useCallback((dir: 1 | -1) => {
    if (indiceActivo === null) return;
    setDireccion(dir);
    setIndiceActivo((prev) => {
      if (prev === null) return null;
      const siguiente = prev + dir;
      if (siguiente < 0) return items.length - 1;
      if (siguiente >= items.length) return 0;
      return siguiente;
    });
  }, [indiceActivo, items.length]);

  const cerrar = useCallback(() => {
    setIndiceActivo(null);
    setDireccion(0);
  }, []);

  const abrir = useCallback((index: number) => {
    setDireccion(0);
    setIndiceActivo(index);
  }, []);

  // Teclado: Escape para cerrar, ← → para navegar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") navegar(-1);
      if (e.key === "ArrowRight") navegar(1);
    };
    if (indiceActivo !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [indiceActivo, cerrar, navegar]);

  // Variantes de animación para el contenido del modal al cambiar de producto
  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <>
      {/* Grilla de Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => abrir(index)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.imagen}
                alt={item.nombre}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg text-primary">{item.nombre}</h3>
              <p className="text-sm text-body-text opacity-60 mt-1">Ver detalles técnicos</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Emergente */}
      <AnimatePresence>
        {seleccionado && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={cerrar}
              className="absolute inset-0 bg-[#041E42]/80 backdrop-blur-sm"
            />

            {/* Flechas de navegación — Desktop (fuera del modal card) */}
            {items.length > 1 && (
              <>
                <button
                  onClick={() => navegar(-1)}
                  aria-label="Producto anterior"
                  className="hidden md:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full text-[#041E42] hover:scale-110 transition-all shadow-lg"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() => navegar(1)}
                  aria-label="Producto siguiente"
                  className="hidden md:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full text-[#041E42] hover:scale-110 transition-all shadow-lg"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto overflow-x-hidden"
            >

              {/* Contenido animado al cambiar de producto */}
              <AnimatePresence mode="wait" custom={direccion}>
                <motion.div
                  key={seleccionado.id}
                  custom={direccion}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_e, info) => {
                    if (info.offset.x > 60) navegar(-1);
                    else if (info.offset.x < -60) navegar(1);
                  }}
                  className="relative flex flex-col md:flex-row w-full"
                >
                  {/* Botón cerrar desktop */}
                  <button
                    onClick={cerrar}
                    className="hidden md:flex absolute top-4 right-4 z-30 bg-white/90 p-2 rounded-full text-[#041E42] hover:bg-white hover:scale-110 hover:text-red-500 transition-all shadow-lg"
                  >
                    <X size={24} />
                  </button>

                  {/* Imagen */}
                  <div className="relative shrink-0 h-56 md:h-auto md:w-1/2 md:min-h-[320px] bg-[#041E42] overflow-hidden rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                    <Image
                      src={seleccionado.imagen}
                      alt={seleccionado.nombre}
                      fill
                      className="object-contain"
                    />

                    {/* Flechas de navegación — Mobile (a los lados de la imagen) */}
                    {items.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); navegar(-1); }}
                          aria-label="Producto anterior"
                          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full text-[#041E42] shadow-md active:scale-95 transition-all"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); navegar(1); }}
                          aria-label="Producto siguiente"
                          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full text-[#041E42] shadow-md active:scale-95 transition-all"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Tarjeta de contenido blanca */}
                  <div className="bg-white p-6 md:p-10 md:w-1/2 flex flex-col rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                    {/* Header mobile: cerrar + indicador */}
                    <div className="md:hidden flex items-center justify-between mb-3">
                      {/* Indicador de posición mobile */}
                      {items.length > 1 && (
                        <span className="text-xs font-semibold text-primary/40 tracking-wide">
                          {(indiceActivo ?? 0) + 1} / {items.length}
                        </span>
                      )}
                      <button
                        onClick={cerrar}
                        className="bg-gray-100 p-2 rounded-full text-[#041E42] hover:bg-gray-200 hover:text-red-500 transition-all"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">{seleccionado.nombre}</h2>

                    {/* Indicador de posición desktop */}
                    {items.length > 1 && (
                      <p className="hidden md:block text-xs font-semibold text-primary/40 tracking-wide mb-4">
                        {(indiceActivo ?? 0) + 1} / {items.length} modelos
                      </p>
                    )}

                    {seleccionado.precio && (
                      <div className="text-xl font-bold text-blue-600 mb-6">{seleccionado.precio}</div>
                    )}

                    <div className="space-y-6 flex-grow">
                      {seleccionado.diferencia && (
                        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                          <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1 flex items-center gap-2">
                            <Star size={14} className="text-accent" fill="currentColor" /> Ventaja Destacada
                          </h4>
                          <p className="text-primary font-medium italic">&ldquo;{seleccionado.diferencia}&rdquo;</p>
                        </div>
                      )}

                      {seleccionado.caracteristicas && (
                        <div>
                          <h4 className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-3">Ficha Técnica</h4>
                          <ul className="space-y-3">
                            {seleccionado.caracteristicas.map((caract, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm text-body-text">
                                <CheckCircle2 className="text-accent shrink-0" size={18} />
                                {caract}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* BOTÓN DE COTIZACIÓN CON CONTEXTO COMPLETO */}
                    <div className="mt-10 pt-6 border-t border-gray-100">
                      <BotonCotizar
                        // Aquí unimos la categoría (ej. Ascensores Residenciales) con el modelo
                        asunto={`${categoriaPadre} - Modelo: ${seleccionado.nombre}`}
                        texto="Cotizar este modelo"
                        className="w-full py-5 !bg-[#4A525D]"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}