import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton"; // <-- Importado

export const metadata: Metadata = {
  title: {
    template: "%s | ASCMET",
    default: "ASCMET | Venta, Instalación y Mantenimiento", // Esto se usa en el Home si no le ponemos título específico
  },
  description: "Especialistas en soluciones de elevación: diseño, fabricación, instalación y mantenimiento de ascensores y montacargas.",
  keywords: ["ascensores", "elevadores", "montacargas", "mantenimiento de elevadores", "plataformas para discapacitados", "instalación de ascensores"],
  openGraph: {
    title: "ASCMET | Expertos en Elevación",
    description: "Venta, mantenimiento y modernización de equipos.",
    url: "https://www.ascmet.pe",
    siteName: "ASCMET",
    images: [
      {
        url: "/servicios/fabricacion1.webp", // Ajustar luego o usar un og-image genérico
        width: 1200,
        height: 630,
        alt: "ASCMET Especialistas",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
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