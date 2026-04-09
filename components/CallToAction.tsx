"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CallToAction() {
  return (
    <section className="py-28 relative overflow-hidden bg-secondary border-t border-border">
      {/* Fondo técnico sutil */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent skew-x-12"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase text-primary">
            ¿Listo para darle <span className="text-accent underline decoration-4 underline-offset-8">nivel</span> a tu proyecto?
          </h2>
          
          <p className="text-xl text-body-text/80 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            Déjanos tus datos y un especialista técnico analizará las necesidades de tu obra para presentarte la solución vertical ideal.
          </p>
          
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-md font-extrabold text-lg uppercase tracking-wider hover:bg-accent transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(0,163,224,0.3)] hover:-translate-y-1"
          >
            Solicitar Asesoría <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
