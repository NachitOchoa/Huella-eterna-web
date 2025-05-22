import Layout from '../components/Layout';

export default function Contacto() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6 space-y-6">
        <h2 className="text-4xl font-serif text-teal-800">Contacto</h2>
        <form className="space-y-4 font-serif text-lg text-gray-700">
          <div>
            <label className="block mb-1">Nombre</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Correo electrónico</label>
            <input type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Mensaje</label>
            <textarea className="w-full border rounded px-3 py-2" rows="4" />
          </div>
          <button type="submit" className="bg-teal-800 text-white px-6 py-2 rounded font-medium">Enviar</button>
        </form>
        <div className="mt-8 font-serif text-lg text-gray-700">
          <p><strong>Tel:</strong> +52 55 1234 5678</p>
          <p><strong>WhatsApp:</strong> +52 55 8765 4321</p>
          <p><strong>Email:</strong> contacto@huellaeterna.com</p>
        </div>
      </section>
    </Layout>
  );
}
