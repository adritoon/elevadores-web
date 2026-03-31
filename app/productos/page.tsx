import Link from "next/link";
import { productos } from "../../lib/data";
import { ArrowRight, Package } from "lucide-react";

export default function ProductosPage() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Catálogo de Productos</h1>
        <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
          Soluciones de accesibilidad y elevación diseñadas con los más altos estándares de calidad y seguridad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <Link 
            key={producto.slug} 
            href={`/productos/${producto.slug}`}
            className="group bg-background border border-border p-6 rounded-lg shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 flex flex-col h-full"
          >
            {/* Icono del producto */}
            <div className="w-12 h-12 bg-secondary text-primary rounded-md flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Package size={24} />
            </div>
            
            {/* Textos */}
            <h3 className="text-xl font-bold mb-3 text-foreground">{producto.titulo}</h3>
            <p className="text-foreground opacity-70 mb-6 flex-grow line-clamp-3">
              {producto.descripcion}
            </p>
            
            {/* Botón de acción */}
            <div className="mt-auto flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
              Ver modelos <ArrowRight size={18} className="ml-2" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}