export default function Home() {
  return (
    <div className="min-h-screen bg-beige font-serif text-center">
      <header className="shadow-md">
        <nav className="flex justify-between items-center px-6 py-4 bg-white">
          <img src="/logo.png" alt="Huella Eterna" className="h-12" />
          <ul className="flex space-x-6 text-sm text-gray-700 font-medium">
            <li><a href="#nosotros" className="hover:text-blue-900">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-blue-900">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-blue-900">Contacto</a></li>
          </ul>
        </nav>
        <img src="/hero.jpg" alt="Huella Eterna" className="w-full h-[400px] object-cover" />
      </header>

      <main className="px-6 py-10">
        <section id="nosotros" className="mb-16">
          <h2 className="text-3xl text-pastelBlue font-bold mb-4">Sobre nosotros</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Acompañamos a las familias en el último adiós a sus mascotas con respeto, compasión y calidez.
          </p>
        </section>

        <section id="servicios" className="mb-16">
          <h2 className="text-3xl text-pastelBlue font-bold mb-4">Servicios</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Cremación individual</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Servicio personalizado, con entrega de cenizas y certificado.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Cremación grupal</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Servicio colectivo, respetuoso y económico.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="text-center">
          <h2 className="text-3xl text-pastelBlue font-bold mb-4">Contacto</h2>
          <p className="text-gray-700">WhatsApp: 55 1234 5678</p>
          <p className="text-gray-700">Email: contacto@huellaeterna.mx</p>
        </section>
      </main>

      <footer className="bg-pastelBlue text-white py-4">
        <p>© 2025 Huella Eterna. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}