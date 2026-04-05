import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Comunícate con ASCMET para cotizaciones, asesoría técnica o consultas sobre nuestros servicios de elevación.',
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
