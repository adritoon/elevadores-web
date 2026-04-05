import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Conoce nuestros servicios especializados: diseño, ingeniería, fabricación, instalación y mantenimiento de elevadores.',
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
