import Layout from '../components/Layout';

export default function Servicios() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-serif text-teal-800 mb-6">Servicios</h2>
        <ul className="list-disc list-inside space-y-4 font-serif text-lg text-gray-700">
          <li>Cremación individual externa</li>
          <li>Entrega de cenizas en urna premium</li>
          <li>Memorial digital personalizado</li>
          <li>Asesoría y gestión de trámites</li>
          <li>Atención continua y seguimiento</li>
        </ul>
      </section>
    </Layout>
  );
}
