import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias MX - El portal líder',
  description: 'Las últimas noticias de CDMX, Nacional y Gastronomía.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-6 mt-10">
          <p>&copy; {new Date().getFullYear()} Noticias MX. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}