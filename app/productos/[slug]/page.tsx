import { notFound } from "next/navigation";
import { productos } from "../../../lib/data";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import GaleriaInteractiva from "../../../components/GaleriaInteractiva";
import BotonCotizar from "../../../components/BotonCotizar"; // <-- IMPORTANTE

export default async function SubpaginaProducto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const producto = productos.find((p) => p.slug === slug);

  if (!producto) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      <Link href="/productos" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft size={20} /> Volver al catálogo
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Lado Izquierdo: Info Principal */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            {producto.titulo}
          </h1>
          <p className="text-xl text-body-text leading-relaxed">
            {producto.descripcion}
          </p>
          
          {/* AQUÍ USAMOS EL COMPONENTE INTELIGENTE */}
          <div className="pt-4">
            <BotonCotizar 
              asunto={producto.titulo} 
              texto={`Cotizar ${producto.titulo}`} 
            />
            <p className="text-sm text-body-text opacity-60 mt-3">
              * Respuesta técnica en menos de 24 horas.
            </p>
          </div>
        </div>

        {/* Lado Derecho: Características Rápidas */}
        <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-primary mb-6">Especificaciones de Ingeniería</h3>
            <ul className="space-y-4">
                
                {/* CAMBIO AQUÍ: Ahora recorremos las specs de CADA producto */}
                {(producto.specs || ["Consultar especificaciones técnicas"]).map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary/80">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                </li>
                ))}

            </ul>
        </div>
      </div>

      {/* Galería de Modelos si existen */}
      {producto.galeria && (
        <section className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Modelos y Variantes</h2>
            
            <GaleriaInteractiva 
            items={producto.galeria} 
            categoriaPadre={producto.titulo} // <-- Le pasamos el nombre del producto
            />
        </section>
      )}
    </div>
  );
}