import Layout from '../components/Layout';

export default function Testimonios() {
  return (
    <Layout>
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-serif text-teal-800 mb-6">Testimonios</h2>
        <blockquote className="border-l-4 border-teal-800 pl-4 italic font-serif text-lg text-gray-700 mb-8">
          “Huella Eterna nos brindó un servicio lleno de calidez y respeto en un momento difícil.”
          <footer className="mt-2 font-medium">— Familia Pérez</footer>
        </blockquote>
      </section>
    </Layout>
  );
}
