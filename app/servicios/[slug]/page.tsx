import { notFound } from "next/navigation";
import { servicios } from "../../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default async function SubpaginaServicio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      <Link href="/servicios" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors font-medium">
        <ArrowLeft size={20} />
        Volver a todos los servicios
      </Link>
      
      {/* Título y descripción corta */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
        {servicio.titulo}
      </h1>
      <p className="text-xl text-foreground opacity-80 mb-12 max-w-3xl">
        {servicio.descripcion}
      </p>

      {/* Contenedor de dos columnas (Imagen y Detalles) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Columna Izquierda: Imagen (Solo se muestra si hay una imagen) */}
        {servicio.imagen && (
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
            <Image
              src={servicio.imagen}
              alt={`Imagen del servicio ${servicio.titulo}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}

        {/* Columna Derecha: Texto largo y Lista de características */}
        <div className="space-y-8">
          {servicio.detalleLargo && (
            <div className="bg-secondary/50 p-6 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Sobre este servicio</h3>
              <p className="text-foreground leading-relaxed">
                {servicio.detalleLargo}
              </p>
            </div>
          )}

          {/* Lista de características (Solo se muestra si existen) */}
          {servicio.caracteristicas && servicio.caracteristicas.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">¿Qué incluye?</h3>
              <ul className="space-y-4">
                {servicio.caracteristicas.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}