import Link from "next/link";
import { Phone, Mail, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4A525D] text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1: Logo y Descripción */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-3 mb-6 inline-flex group">
            <span className="text-4xl font-extrabold text-white tracking-tight group-hover:text-accent transition-colors">
              ASCMET
            </span>
            <div className="border-l-2 border-accent h-8 opacity-50"></div>
            <div className="flex flex-col text-[10px] sm:text-xs font-bold text-accent tracking-widest leading-tight">
              <span>DISEÑO/</span>
              <span>FABRICACIÓN</span>
            </div>
          </Link>
          <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
            Líderes en diseño, fabricación, instalación y modernización de elevadores. Brindamos soluciones verticales seguras y de alta ingeniería.
          </p>
        </div>
        
        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white border-b border-primary-foreground/20 pb-2 inline-block">
            Navegación
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/nosotros" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group">
                <ChevronRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" /> Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group">
                <ChevronRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" /> Servicios
              </Link>
            </li>
            <li>
              <Link href="/productos" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group">
                <ChevronRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" /> Productos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group">
                <ChevronRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" /> Contacto
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Columna 3: Contacto Directo y Redes Sociales */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white border-b border-primary-foreground/20 pb-2 inline-block">
            Contacto
          </h4>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-primary-foreground/80">
              <Phone className="text-accent shrink-0" size={18} />
              <span className="font-medium">+51 987 654 321</span>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/80">
              <Mail className="text-accent shrink-0" size={18} />
              <span className="font-medium">contacto@ascmet.com</span>
            </li>
          </ul>

          {/* Redes Sociales ahora integradas aquí */}
          <div className="flex gap-3 mt-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61588502851306" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10"
              title="Facebook ASCMET"
            >
              <FaFacebookF size={16} />
            </a>
            <a 
              href="https://www.instagram.com/ascmetsac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10"
              title="Instagram ASCMET"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@ascmetsac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10"
              title="TikTok ASCMET"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
        
      </div>
      
      {/* Barra inferior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} ASCMET Diseño y Fabricación. Todos los derechos reservados.</p>
        <p className="tracking-widest uppercase font-bold text-accent/80">Calidad y Seguridad</p>
      </div>
    </footer>
  );
}