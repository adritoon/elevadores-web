import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton"; // <-- Importado

export const metadata: Metadata = {
  title: "ElevadoresPro | Venta, Instalación y Mantenimiento",
  description: "Especialistas en soluciones de elevación.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton /> {/* <-- Añadido aquí */}
      </body>
    </html>
  );
}