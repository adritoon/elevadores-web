"use client";

import { ShieldCheck, Cpu, Users, Award, CheckCircle2, ArrowRight, Target, Eye, Handshake, Scale } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

const valores = [
  {
    titulo: "Seguridad",
    desc: "Priorizamos la seguridad en cada uno de nuestros procesos, equipos y servicios, garantizando la protección de nuestros clientes y colaboradores.",
    icon: ShieldCheck,
  },
  {
    titulo: "Trabajo en equipo",
    desc: "Fomentamos la colaboración y el respeto entre nuestros colaboradores para lograr mejores resultados.",
    icon: Users,
  },
  {
    titulo: "Calidad",
    desc: "Trabajamos con altos estándares de ingeniería para ofrecer productos y servicios duraderos, eficientes y de alto rendimiento.",
    icon: Award,
  },
  {
    titulo: "Innovación",
    desc: "Impulsamos el uso de tecnología y mejoras continuas para desarrollar soluciones modernas y eficientes.",
    icon: Cpu,
  },
  {
    titulo: "Compromiso",
    desc: "Cumplimos con responsabilidad cada proyecto, brindando soluciones que satisfagan las necesidades de nuestros clientes.",
    icon: Handshake,
  },
  {
    titulo: "Integridad",
    desc: "Actuamos con honestidad, transparencia y ética en todas nuestras relaciones profesionales y comerciales.",
    icon: Scale,
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-background">
      {/* Hero de Nosotros con Textura de Ingeniería */}
      {/* Hero de Nosotros CORREGIDO: Fondo Azul Profundo */}
      <section className="relative pt-48 pb-28 bg-primary text-white overflow-hidden">
        {/* Patrón sutil para darle textura de ingeniería */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold mb-8 uppercase tracking-tighter text-white"
          >
            Sobre <span className="text-accent">ASCMET</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            "No solo fabricamos elevadores, elevamos estándares de vida y seguridad."
          </p>
        </div>
      </section>

      {/* Sección Trayectoria con Grid mejorado */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Decoración: Marco metálico */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-accent opacity-30"></div>
            
            <div className="bg-white p-8 md:p-14 rounded-2xl shadow-2xl border border-border relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 uppercase tracking-tight">
                Somos
              </h2>
              <p className="text-body-text text-lg leading-relaxed mb-6">
                Una empresa especializada en el diseño, fabricación, instalación y modernización de elevadores, montacargas y plataformas para personas con discapacidad. 
              </p>
              <p className="text-body-text text-lg leading-relaxed">
                Garantizamos soluciones de elevación seguras, eficientes y adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
               <h3 className="text-2xl font-bold text-primary uppercase tracking-widest text-sm opacity-60">
                Por qué elegirnos
              </h3>
              {/*<p className="text-3xl font-extrabold text-primary leading-tight">
                Infraestructura propia para resultados superiores.
              </p>*/}
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Asesoría y acompañamiento profesional",
                "Ingeniería y desarrollo especializado",
                "Adaptamos nuestros proyectos a las dimensiones existentes en la obra",
                "Soluciones integrales",
                "Tecnología y seguridad",
                "Cumplimiento normativo y estándares de calidad",
                "Compromiso y confianza"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-primary font-bold">
                  <CheckCircle2 className="text-accent shrink-0 mt-[2px]" size={20} />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* Sección Misión y Visión (En Color Corporativo Principal) */}
      <section className="py-24 bg-primary text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
            
            {/* Divisor vertical en pantallas grandes */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-white/10"></div>

            {/* Misión */}
            <div className="relative">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-accent shadow-[0_0_30px_rgba(0,163,224,0.15)]">
                <Target size={36} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tighter text-white">Misión</h3>
              <div className="w-12 h-1 bg-accent mb-8"></div>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light">
                Nuestra misión es desarrollar soluciones de transporte vertical seguras y eficientes, integrando ingeniería, tecnología e innovación para mejorar la accesibilidad y funcionalidad de los espacios, ofreciendo sistemas de elevación adaptados a las necesidades de cada cliente.
              </p>
            </div>

            {/* Visión */}
            <div className="relative">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-accent shadow-[0_0_30px_rgba(0,163,224,0.15)]">
                <Eye size={36} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tighter text-white">Visión</h3>
              <div className="w-12 h-1 bg-accent mb-8"></div>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light">
                En los próximos 5 años, ASCMET busca consolidarse como una empresa líder en soluciones de elevación, reconocida por su innovación, calidad y excelencia, contribuyendo al desarrollo de infraestructuras modernas y seguras.
              </p>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* Sección Valores (Cards Modernas) */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
            Valores que nos impulsan
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6"></div>
        </ScrollReveal>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((v, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 0.1}
              className="group bg-white p-10 rounded-2xl border border-border hover:border-primary/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-2xl overflow-hidden relative h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-accent group-hover:text-primary transition-colors">
                <v.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{v.titulo}</h4>
              <p className="text-body-text opacity-80 leading-relaxed text-lg">{v.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Final de Alto Impacto */}
      <section className="py-28 relative overflow-hidden">
        <ScrollReveal className="max-w-5xl mx-auto px-4 text-center relative z-10">
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
        </ScrollReveal>
      </section>
    </main>
  );
}