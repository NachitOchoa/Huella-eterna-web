
export default function Home() {
  return (
    <div className="min-h-screen bg-beige text-center font-serif">
      <header className="py-8">
        <img src="/hero.jpg" alt="Huella Eterna" className="mx-auto max-w-4xl rounded-xl shadow-lg" />
      </header>
      <main className="px-6 py-10">
        <h1 className="text-4xl text-pastelBlue font-bold mb-4">Huella Eterna</h1>
        <p className="text-lg text-gray-700 mb-8">
          Descanso y amor para tu mascota. Servicios de cremación con respeto, cariño y dedicación.
        </p>
      </main>
      <footer className="bg-pastelBlue text-white py-4">
        <p>© 2025 Huella Eterna. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
