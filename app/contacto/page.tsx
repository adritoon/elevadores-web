"use client";

import { useState, Suspense } from "react"; // 1. Agregamos Suspense aquí
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { sendEmail } from "../actions";
import { useSearchParams } from "next/navigation";

// --- ESTA ES LA FUNCIÓN QUE TIENE EL FORMULARIO ---
function FormularioContacto() {
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const searchParams = useSearchParams();
  const asuntoPredefinido = searchParams.get("asunto");

  const mensajeInicial = asuntoPredefinido 
    ? `Hola ASCMET, me gustaría solicitar una cotización sobre: ${asuntoPredefinido}.` 
    : "";

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);
    if (result.success) setIsSent(true);
  }

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Contáctanos</h1>
          <p className="text-lg text-body-text opacity-80 max-w-2xl mx-auto">
            Convierte tu proyecto en una realidad con tecnología avanzada en transporte vertical. Solicita ahora tu asesoría técnica o cotización y conoce la mejor alternativa para tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-primary mb-8">Información Directa</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary opacity-60 uppercase">Llámanos</p>
                    <p className="text-lg font-semibold text-primary">+51 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  {/* 1. min-w-0 permite que el contenedor se encoja si es necesario */}
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-primary opacity-60 uppercase">Escríbenos</p>
                    {/* 2. break-all permite cortar el texto, y bajamos un poco la fuente en móvil (text-base) */}
                    <p className="text-base sm:text-lg font-semibold text-primary break-all">
                      contacto@ascmet.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary opacity-60 uppercase">Ubicación</p>
                    <p className="text-lg font-semibold text-primary">Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* MAPA OCULTO TEMPORALMENTE (Sin oficina física por ahora)
            <div className="h-64 bg-secondary rounded-2xl overflow-hidden relative border border-border">
              <div className="absolute inset-0 flex items-center justify-center text-primary opacity-40 italic text-center px-4">
                [Aquí puedes insertar el Iframe de Google Maps]
              </div>
            </div>*/}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-border">
            {isSent ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">¡Mensaje Enviado!</h3>
                <p className="text-body-text">Nos pondremos en contacto contigo a la brevedad posible.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Nombre Completo</label>
                    <input name="nombre" required type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Teléfono</label>
                    <input name="telefono" required type="tel" placeholder="Ej. 987654321" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-gray-50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Correo Electrónico</label>
                  <input name="email" required type="email" placeholder="juan@ejemplo.com" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-gray-50" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Mensaje o Requerimiento</label>
                  <textarea 
                    name="mensaje" 
                    required 
                    rows={4} 
                    defaultValue={mensajeInicial}
                    placeholder="Cuéntanos sobre tu proyecto..." 
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-gray-50 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isPending ? "Enviando..." : (
                    <> Enviar Mensaje <Send size={18} /> </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- ESTA ES LA PÁGINA QUE NEXT.JS BUSCA (CON EL SUSPENSE) ---
export default function ContactoPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-primary font-bold">Cargando formulario...</div>}>
      <FormularioContacto />
    </Suspense>
  );
}