"use client";

import { ShieldCheck, Cpu, Users, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Hero de Nosotros con el azul corporativo */}
      <section className="pt-32 pb-20 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >Sobre <span className="text-slate-300">ASCMET</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Líderes en el sector de elevación, transformando la movilidad vertical a través de ingeniería de precisión y fabricación a medida.
          </p>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
             {/* Decoración metálica */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200 to-slate-400 opacity-20 rounded-2xl -z-10 group-hover:opacity-30 transition-opacity"></div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border">
              <h2 className="text-3xl font-bold text-primary mb-6">Nuestra Trayectoria</h2>
              <p className="text-body-text text-lg leading-relaxed mb-6">
                En ASCMET, nacimos con el propósito de ofrecer soluciones de elevación que combinen la robustez industrial con la elegancia arquitectónica. 
              </p>
              <p className="text-body-text text-lg leading-relaxed">
                Cada proyecto es un desafío de ingeniería que abordamos con pasión, asegurando que cada ascensor o plataforma no sea solo un equipo, sino una pieza fundamental de la infraestructura de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary italic border-l-4 border-accent pl-4">
              "No solo fabricamos elevadores, elevamos estándares."
            </h3>
            <ul className="space-y-4">
              {[
                "Especialistas en Diseño Estructural",
                "Planta de Fabricación Propia",
                "Certificaciones de Seguridad Vigentes",
                "Soporte Técnico 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-primary font-medium">
                  <CheckCircle2 className="text-accent" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sección Valores (Cards Estilo Metálico) */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestros Valores Pilares</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((v, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-xl border border-border hover:border-accent transition-all hover:-translate-y-2 shadow-sm hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-[#0A192F] text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
                <v.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{v.titulo}</h4>
              <p className="text-body-text opacity-80 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">¿Listo para empezar tu proyecto?</h2>
        <p className="text-lg text-body-text mb-10">
          Nuestro equipo de ingenieros está listo para brindarte la asesoría técnica que necesitas.
        </p>
        <a 
          href="/contacto" 
          className="inline-block bg-[#0A192F] text-white px-10 py-4 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-xl"
        >
          Hablar con un experto
        </a>
      </section>
    </main>
  );
}