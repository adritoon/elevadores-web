import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¡Mensaje Enviado! | ASCMET",
  description: "Tu solicitud fue recibida exitosamente. Nos pondremos en contacto contigo a la brevedad.",
  robots: {
    index: false, // No queremos que Google indexe esta página en búsquedas orgánicas
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <section className="pt-32 pb-20 bg-background min-h-[80vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Ícono animado */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100 animate-bounce-once">
            <CheckCircle size={56} className="text-green-500" />
          </div>
        </div>

        {/* Mensaje principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          ¡Gracias por contactarnos!
        </h1>
        <p className="text-lg text-body-text opacity-80 max-w-xl mx-auto mb-8">
          Hemos recibido tu solicitud exitosamente. Nuestro equipo de especialistas 
          se pondrá en contacto contigo <strong className="text-primary">dentro de las próximas 24 horas</strong>.
        </p>

        {/* Info de contacto directo */}
        <div className="bg-secondary rounded-2xl p-6 mb-10 border border-border">
          <p className="text-sm font-bold text-primary opacity-60 uppercase mb-4">
            ¿Necesitas atención inmediata?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+51923385118" 
              className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Phone size={20} /> +51 923 385 118
            </a>
            <a 
              href="mailto:ventas@ascmet.com" 
              className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Mail size={20} /> ventas@ascmet.com
            </a>
          </div>
        </div>

        {/* Botón de regreso */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
        >
          <ArrowLeft size={18} />
          Volver al Inicio
        </Link>

      </div>
    </section>
  );
}
