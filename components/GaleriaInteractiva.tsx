"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Star } from "lucide-react";
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
  const [seleccionado, setSeleccionado] = useState<ItemGaleria | null>(null);

  // UX Fix: Permitir cerrar el modal presionando la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSeleccionado(null);
    };
    if (seleccionado) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [seleccionado]);

  return (
    <>
      {/* Grilla de Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSeleccionado(item)}
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
              onClick={() => setSeleccionado(null)}
              className="absolute inset-0 bg-[#041E42]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            >
              {/* Botón cerrar desktop */}
              <button
                onClick={() => setSeleccionado(null)}
                className="hidden md:flex absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full text-[#041E42] hover:bg-white hover:scale-110 hover:text-red-500 transition-all shadow-lg"
              >
                <X size={24} />
              </button>

              {/* Imagen: sin fondo en móvil (transparente = se ve el backdrop) | fondo oscuro en desktop */}
              <div className="relative shrink-0 h-56 md:h-auto md:w-1/2 md:min-h-[320px] bg-[#041E42] overflow-hidden">
                <Image
                  src={seleccionado.imagen}
                  alt={seleccionado.nombre}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Tarjeta de contenido blanca */}
              <div className="bg-white p-6 md:p-10 md:w-1/2 flex flex-col rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                {/* Botón cerrar móvil */}
                <button
                  onClick={() => setSeleccionado(null)}
                  className="md:hidden self-end mb-3 bg-gray-100 p-2 rounded-full text-[#041E42] hover:bg-gray-200 hover:text-red-500 transition-all"
                >
                  <X size={20} />
                </button>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">{seleccionado.nombre}</h2>

                {seleccionado.precio && (
                  <div className="text-xl font-bold text-blue-600 mb-6">{seleccionado.precio}</div>
                )}

                <div className="space-y-6 flex-grow">
                  {seleccionado.diferencia && (
                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                      <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1 flex items-center gap-2">
                        <Star size={14} className="text-accent" fill="currentColor" /> Ventaja Destacada
                      </h4>
                      <p className="text-primary font-medium italic">"{seleccionado.diferencia}"</p>
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
          </div>
        )}
      </AnimatePresence>
    </>
  );
}