import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F5EC] text-[#1e3a8a] font-serif">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Huella Eterna" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold">Huella Eterna</h1>
        </div>
        <nav className="space-x-6 text-lg">
          <Link href="#servicios">Servicios</Link>
          <Link href="#nosotros">Nosotros</Link>
          <Link href="#testimonios">Testimonios</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg text-center max-w-xl">
          <h2 className="text-4xl text-[#A3C9D9] font-bold mb-2">Huella Eterna</h2>
          <p className="text-black text-lg mb-4">Descanso y amor para tu mascota</p>
          <Link href="#servicios" className="bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#3658b0]">Conoce nuestros servicios</Link>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Cremación Individual</h3>
            <p className="text-gray-700">Una despedida única, con dignidad y respeto. Incluye urna básica y certificado.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Eutanasia a Domicilio</h3>
            <p className="text-gray-700">Acompañamiento compasivo en casa para un adiós tranquilo.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Recuerdos y Urnas</h3>
            <p className="text-gray-700">Ánforas personalizadas y recuerdos conmemorativos únicos.</p>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="px-6 py-12 bg-[#f1ede6] text-center">
        <h2 className="text-3xl font-semibold mb-4">Nosotros</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          En Huella Eterna, acompañamos a las familias en el momento más delicado con empatía, amor y respeto. Nuestro objetivo es brindar un servicio cálido y humano, donde cada mascota sea despedida con dignidad.
        </p>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonios</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
          <blockquote>
            “Gracias por hacer esta despedida tan especial. Nunca olvidaremos el cariño con el que trataron a nuestra perrita.” — Ana R.
          </blockquote>
          <blockquote>
            “El proceso fue respetuoso y profesional. Recibimos todo con mucho amor. Gracias.” — Carlos M.
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-12 bg-[#f1ede6] text-center">
        <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
        <p className="mb-4">¿Tienes preguntas o deseas agendar un servicio? Estamos para ayudarte.</p>
        <p className="font-semibold">WhatsApp: 55 1234 5678</p>
        <p className="font-semibold">Email: contacto@huellaeterna.mx</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Huella Eterna. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

