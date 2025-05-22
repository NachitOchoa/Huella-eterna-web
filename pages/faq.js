import Layout from '../components/Layout';

export default function FAQ() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6 space-y-4">
        <h2 className="text-4xl font-serif text-teal-800 mb-6">Preguntas Frecuentes</h2>
        <details className="font-serif text-lg text-gray-700">
          <summary className="cursor-pointer font-semibold">¿Cómo agendo un servicio?</summary>
          <p className="mt-2">Completa nuestro formulario en Contacto o llámanos al +52 55 1234 5678.</p>
        </details>
        <details className="font-serif text-lg text-gray-700">
          <summary className="cursor-pointer font-semibold">¿En cuánto tiempo recibo las cenizas?</summary>
          <p className="mt-2">Generalmente de 3 a 5 días hábiles tras la cremación.</p>
        </details>
      </section>
    </Layout>
  );
}
