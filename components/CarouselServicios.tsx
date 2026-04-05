"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- PLUGIN AUTOPLAY (Solo para el carrusel principal) ---
function AutoplayPlugin(delay: number = 5000): KeenSliderPlugin {
  return (s: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        s.next();
      }, delay);
    }
    s.on("created", () => {
      s.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      s.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    s.on("dragStarted", clearNextTimeout);
    s.on("animationEnded", nextTimeout);
    s.on("updated", nextTimeout);
  };
}

interface CarouselServiciosProps {
  imagenes: string[];
  autoPlayInterval?: number;
}

export default function CarouselServicios({
  imagenes,
  autoPlayInterval = 5000,
}: CarouselServiciosProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Estados para el Lightbox (Modal)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentSlide, setModalCurrentSlide] = useState(0);
  const [modalLoaded, setModalLoaded] = useState(false);

  // Hook para bloquear el scroll del cuerpo de la página cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setModalLoaded(false); // Fuerza a que las flechas aparezcan instantáneamente en la próxima apertura
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Manejador del Teclado para cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // --- SLIDER PRINCIPAL ---
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AutoplayPlugin(autoPlayInterval)]
  );

  // --- SLIDER DEL MODAL ---
  const [modalSliderRef, modalInstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: modalCurrentSlide,
    loop: true,
    slideChanged(slider) {
      setModalCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setModalLoaded(true);
      // Forzar que el modal inicie en la foto que el usuario clicó
      slider.moveToIdx(modalCurrentSlide, true);
    },
  });

  const openLightbox = (index: number) => {
    setModalCurrentSlide(index);
    if (modalInstanceRef.current) {
      modalInstanceRef.current.moveToIdx(index, true, { duration: 0 }); // saltar de inmediato
    }
    setIsModalOpen(true);
  };

  if (!imagenes || imagenes.length === 0) {
    return null;
  }

  // --- UNA SOLA IMAGEN FALLBACK ---
  if (imagenes.length === 1) {
    return (
      <>
        <div 
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border bg-secondary group cursor-zoom-in"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={imagenes[0]}
            alt="Slide 1"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        {/* Renderizado Condicional Lightbox Básico */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
              onClick={() => setIsModalOpen(false)}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 bg-black/20 rounded-full p-2"
                aria-label="Cerrar modal"
              >
                <X size={32} />
              </button>
              <div 
                className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center cursor-zoom-out"
                onClick={() => setIsModalOpen(false)}
              >
                <img
                  src={imagenes[0]}
                  alt="Imagen Ampliada"
                  className="max-w-full max-h-full w-auto h-auto rounded-lg cursor-default"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // --- CARRUSEL MULTIPLE ---
  return (
    <>
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border group bg-secondary">
        {/* Contenedor del Slider */}
        <div ref={sliderRef} className="keen-slider h-full w-full">
          {imagenes.map((imgSrc, idx) => (
            <div 
              className="keen-slider__slide relative w-full h-full cursor-zoom-in" 
              key={idx}
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={imgSrc}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Flechas y Puntos... (igual que antes) */}
        {loaded && instanceRef.current && (
          <button
            aria-label="Slide Anterior"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-primary hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {loaded && instanceRef.current && (
          <button
            aria-label="Siguiente Slide"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-primary hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>
        )}
        {loaded && instanceRef.current && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {[...Array(instanceRef.current.track.details.slides.length).keys()].map(
              (idx) => (
                <button
                  key={idx}
                  aria-label={`Ir al slide ${idx + 1}`}
                  onClick={(e) => { e.stopPropagation(); instanceRef.current?.moveToIdx(idx); }}
                  className={`transition-all rounded-full ${
                    currentSlide === idx
                      ? "w-8 h-2 bg-accent"
                      : "w-2 h-2 bg-white/50 hover:bg-white"
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm w-full h-full"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Botón Cerrar Global */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 bg-black/40 backdrop-blur-md rounded-full p-2"
              aria-label="Cerrar modal"
            >
              <X size={32} />
            </button>

            {/* Slider interno modo Lightbox (object-contain) */}
            <div 
              className="relative w-full h-[85vh] md:h-screen md:max-w-7xl mx-auto flex items-center"
            >
              <div ref={modalSliderRef} className="keen-slider h-full w-full cursor-zoom-out">
                {imagenes.map((imgSrc, idx) => (
                  <div className="keen-slider__slide relative w-full h-full flex items-center justify-center" key={idx} onClick={() => setIsModalOpen(false)}>
                    <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
                      <img
                        src={imgSrc}
                        alt={`Slide ampliado ${idx + 1}`}
                        className="max-w-full max-h-full w-auto h-auto rounded-lg cursor-default"
                        draggable={false}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Flechas del Modal */}
              {modalLoaded && modalInstanceRef.current && (
                <button
                  aria-label="Slide Anterior Modal"
                  onClick={(e: any) => e.stopPropagation() || modalInstanceRef.current?.prev()}
                  className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-white hover:text-black z-50"
                >
                  <ChevronLeft size={32} />
                </button>
              )}
              {modalLoaded && modalInstanceRef.current && (
                <button
                  aria-label="Siguiente Slide Modal"
                  onClick={(e: any) => e.stopPropagation() || modalInstanceRef.current?.next()}
                  className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-white hover:text-black z-50"
                >
                  <ChevronRight size={32} />
                </button>
              )}
              
              {/* Contador de Imágenes Modal */}
              {modalLoaded && modalInstanceRef.current && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 tracking-widest text-sm font-medium z-50">
                  {modalCurrentSlide + 1} / {imagenes.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
