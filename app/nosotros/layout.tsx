import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce a ASCMET, empresa especializada en el diseño, fabricación e instalación de elevadores, montacargas y plataformas.',
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
