export default function Nosotros() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'serif', backgroundColor: '#ffffff' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '1rem' }}>Sobre Nosotros</h1>
      <p style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '2rem' }}>
        En Huella Eterna creemos que las mascotas son parte de la familia. Por eso, brindamos un servicio digno y lleno de amor en su último adiós.
      </p>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '1rem' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '1.5rem' }}>Nuestra Misión</h2>
          <p>
            Acompañar a las familias en el último adiós a sus mascotas con respeto, compasión y calidez, ofreciendo servicios de cremación dignos, personalizados y con amor.
          </p>
        </div>
        <div style={{ backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '1rem' }}>
          <h2 style={{ color: '#1e3a8a', fontSize: '1.5rem' }}>Nuestra Visión</h2>
          <p>
            Ser la empresa líder en el cuidado del final de vida de las mascotas en México, promoviendo la empatía, el respeto y el recuerdo amoroso como parte fundamental del vínculo humano-animal.
          </p>
        </div>
      </section>
    </main>
  );
}
