import { notFound } from "next/navigation";
import { productos } from "../../../lib/data";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import GaleriaInteractiva from "../../../components/GaleriaInteractiva";
import BotonCotizar from "../../../components/BotonCotizar";
import ScrollReveal from "../../../components/ScrollReveal";

export default async function SubpaginaProducto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) notFound();

  return (
    <main className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-32">
        {/* Enlace de retorno con hover animado */}
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-primary/60 hover:text-primary font-bold transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          VOLVER AL CATÁLOGO
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Lado Izquierdo: Info Principal */}
          <ScrollReveal delay={0.1} className="space-y-8">
            <div className="space-y-4">
              {/* CORRECCIÓN: Tamaño de fuente responsivo para evitar overflow horizontal en móviles */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
                {producto.titulo}
              </h1>
              <div className="w-20 h-2 bg-accent"></div>
            </div>

            <p className="text-xl text-body-text leading-relaxed font-medium opacity-80">
              {producto.descripcion}
            </p>

            <div className="pt-6 border-t border-gray-200">
              <BotonCotizar
                asunto={producto.titulo}
                className="w-full md:w-auto"
              />
              <div className="flex items-center gap-2 text-sm text-primary/60 mt-4 font-bold uppercase tracking-widest">
                <ShieldCheck size={16} className="text-accent" />
                Respuesta técnica en menos de 24 horas.
              </div>
            </div>
          </ScrollReveal>

          {/* CORRECCIÓN 2: Lado Derecho - Tarjeta en Azul Profundo (bg-primary) */}
          <ScrollReveal delay={0.3} className="bg-primary p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              Ficha de Ingeniería
            </h3>

            <ul className="space-y-5">
              {(producto.specs || ["Consultar especificaciones técnicas"]).map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white group">
                  <div className="bg-accent/20 p-1 rounded-md shrink-0 mt-0.5">
                    <CheckCircle2 size={18} className="text-accent" />
                  </div>
                  <span className="text-lg font-medium leading-relaxed opacity-90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10 text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
              ASCMET • Ingeniería de Elevación
            </div>
          </ScrollReveal>
        </div>

        {/* Galería de Modelos */}
        {producto.galeria && (
          <section className="border-t border-gray-100 pt-20">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                Modelos y Variantes
              </h2>
              <p className="text-body-text opacity-60 mt-2">Seleccione un modelo para ver detalles específicos</p>
            </ScrollReveal>

            <GaleriaInteractiva
              items={producto.galeria}
              categoriaPadre={producto.titulo}
            />
          </section>
        )}
      </div>
    </main>
  );
}