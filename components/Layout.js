import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/"><Image src="/logo.png" alt="Huella Eterna" width={120} height={40} /></Link>
          <nav className="space-x-6 text-teal-800 font-serif">
            {['/', '/servicios', '/testimonios', '/faq', '/blog', '/contacto']
              .map((path, i) => (
                <Link key={i} href={path}>
                  <a className="hover:text-teal-600">
                    {['Inicio','Servicios','Testimonios','FAQ','Blog','Contacto'][i]}
                  </a>
                </Link>
              ))}
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-beige-100 py-6 mt-12">
        <div className="container mx-auto text-center text-sm text-gray-600 font-serif">
          © 2025 Huella Eterna — Descanso y Amor para tu Mascota
        </div>
      </footer>
    </>
  );
}
