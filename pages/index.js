export default function Home() {
  return (
    <div className="bg-beige text-center font-serif min-h-screen flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <nav className="space-x-4">
          <a href="#nosotros" className="text-pastelBlue hover:underline">Nosotros</a>
          <a href="#servicios" className="text-pastelBlue hover:underline">Servicios</a>
          <a href="#contacto" className="text-pastelBlue hover:underline">Contacto</a>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative">
          <img src="/hero.png" alt="Hero" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">Huella Eterna</h1>
            <p className="text-xl">Descanso y amor para tu mascota</p>
          </div>
        </section>

        <section id="nosotros" className="py-12 px-6">
          <h2 className="text-3xl text-pastelBlue mb-4">Sobre nosotros</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Acompañamos a las familias en el último adiós a sus mascotas con respeto, compasión y calidez.
          </p>
        </section>

        <section id="servicios" className="py-12 px-6 bg-white">
          <h2 className="text-3xl text-pastelBlue mb-4">Servicios</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="text-xl font-semibold text-pastelBlue">Cremación individual</h3>
              <p>Servicio personalizado, con entrega de cenizas y certificado.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pastelBlue">Cremación grupal</h3>
              <p>Servicio colectivo, respetuoso y económico.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-12 px-6">
          <h2 className="text-3xl text-pastelBlue mb-4">Contáctanos</h2>
          <p className="text-gray-700">WhatsApp: 55 1234 5678 · contacto@huellaeterna.mx</p>
        </section>
      </main>

      <footer className="bg-pastelBlue text-white py-4">
        <p>© 2025 Huella Eterna. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}