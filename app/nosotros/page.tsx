"use client";

import { ShieldCheck, Cpu, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const valores = [
  {
    titulo: "Innovación",
    desc: "Aplicamos las últimas tecnologías en diseño y fabricación de sistemas de elevación.",
    icon: Cpu,
  },
  {
    titulo: "Seguridad",
    desc: "Nuestra prioridad absoluta. Cumplimos con todas las normativas internacionales de seguridad.",
    icon: ShieldCheck,
  },
  {
    titulo: "Compromiso",
    desc: "Acompañamos a nuestros clientes desde la asesoría inicial hasta el mantenimiento post-venta.",
    icon: Award,
  },
  {
    titulo: "Equipo Experto",
    desc: "Contamos con ingenieros y técnicos altamente capacitados en soluciones verticales.",
    icon: Users,
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-background">
      {/* Hero de Nosotros con Textura de Ingeniería */}
      <section className="relative pt-48 pb-28 bg-[#171717] text-white overflow-hidden">
        {/* Patrón de líneas técnico sutil */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-7xl font-extrabold mb-8 uppercase tracking-tighter"
          >
            <span className="text-white/40">Sobre</span>{" "}
            <span className="text-accent">ASCMET</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Ingeniería peruana transformando la movilidad vertical a través de precisión, seguridad y fabricación a medida.
          </p>
        </div>
      </section>

      {/* Sección Trayectoria con Grid mejorado */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Decoración: Marco metálico */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-accent opacity-30"></div>
            
            <div className="bg-white p-8 md:p-14 rounded-2xl shadow-2xl border border-border relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 uppercase tracking-tight">
                Nuestra Trayectoria
              </h2>
              <p className="text-body-text text-lg leading-relaxed mb-6 italic border-l-4 border-primary pl-6 py-2">
                "No solo fabricamos elevadores, elevamos estándares de vida y seguridad."
              </p>
              <p className="text-body-text text-lg leading-relaxed mb-6">
                En **ASCMET**, nacimos con el propósito de ofrecer soluciones de elevación que combinen la robustez industrial con la elegancia arquitectónica. 
              </p>
              <p className="text-body-text text-lg leading-relaxed">
                Cada proyecto es un desafío de ingeniería que abordamos con pasión, asegurando que cada equipo sea una pieza fundamental de la infraestructura de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
               <h3 className="text-2xl font-bold text-primary uppercase tracking-widest text-sm opacity-60">
                Por qué elegirnos
              </h3>
              <p className="text-3xl font-extrabold text-primary leading-tight">
                Infraestructura propia para resultados superiores.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Diseño Estructural 3D",
                "Fabricación Local",
                "Certificación EN 81-20",
                "Soporte Técnico 24/7",
                "Acabados Premium",
                "Ahorro Energético"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-primary font-bold">
                  <CheckCircle2 className="text-accent shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sección Valores (Cards Modernas) */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
            Valores que nos impulsan
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((v, i) => (
            <div 
              key={i} 
              className="group bg-white p-10 rounded-2xl border border-border hover:border-primary/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-accent group-hover:text-primary transition-colors">
                <v.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{v.titulo}</h4>
              <p className="text-body-text opacity-80 leading-relaxed text-lg">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final de Alto Impacto */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter">
            ¿LISTO PARA ELEVAR TU PROYECTO?
          </h2>
          <p className="text-xl text-body-text mb-12 max-w-2xl mx-auto font-medium opacity-80">
            Nuestro equipo de ingenieros está listo para brindarte la asesoría técnica y comercial que tu obra requiere.
          </p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-md font-black uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-2xl hover:scale-105"
          >
            Hablar con un experto <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}