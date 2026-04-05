import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Servicios',
    template: '%s | ASCMET',
  },
  description: 'Conoce nuestros servicios especializados: diseño, ingeniería, fabricación, instalación y mantenimiento de elevadores.',
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
