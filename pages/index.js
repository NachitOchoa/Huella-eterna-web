import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section className="relative h-[60vh]">
        <Image src="/hero.png" layout="fill" objectFit="cover" alt="Perro y gato abrazados" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-center px-8">
          <h1 className="text-5xl text-white font-serif font-bold">Huella Eterna</h1>
          <p className="mt-4 text-xl text-beige-200 font-serif">Descanso y Amor para tu Mascota</p>
          <a href="/contacto" className="mt-6 inline-block bg-beige-200 text-teal-800 py-2 px-4 rounded font-medium">
            Solicitar Información
          </a>
        </div>
      </section>
    </Layout>
  );
}
