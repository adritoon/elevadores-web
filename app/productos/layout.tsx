import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Catálogo de soluciones de elevación, accesibilidad, ascensores y plataformas diseñadas con altos estándares.',
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
