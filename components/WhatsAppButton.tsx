"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsApp() {
  const numero = "51987654321"; // Tu número con código de país (51 para Perú)
  const mensaje = "Hola ASCMET, me gustaría solicitar información sobre sus elevadores.";
  
  const whatsappUrl = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Efecto de pulso animado detrás del botón */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>
      
      <FaWhatsapp size={35} className="relative z-10" />
      
      {/* Tooltip opcional que aparece al pasar el mouse */}
      <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        ¡Escríbenos ahora!
      </span>
    </a>
  );
}