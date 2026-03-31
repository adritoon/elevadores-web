import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  asunto?: string;
  className?: string;
  texto?: string;
}

export default function BotonCotizar({ 
  asunto = "General", 
  className = "", 
  texto = "Solicitar Cotización" 
}: Props) {
  
  // Codificamos el texto para que sea seguro en una URL
  const href = `/contacto?asunto=${encodeURIComponent(asunto)}`;

  return (
    <Link 
      href={href}
      className={`inline-flex justify-center items-center gap-2 bg-[#0A192F] text-white px-8 py-4 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1 group ${className}`}
    >
      {texto}
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}