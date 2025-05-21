export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/fondo-inicio.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'serif',
      }}
    >
      {/* Logo arriba */}
      <img
        src="/logo.png"
        alt="Logo Huella Eterna"
        style={{
          maxWidth: '160px',
          backgroundColor: 'rgba(255,255,255,0.8)',
          padding: '0.6rem',
          borderRadius: '0.8rem',
        }}
      />

      {/* Texto al fondo */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '0.5rem' }}>
          Huella Eterna
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#000000', maxWidth: '600px' }}>
          Descanso y amor para tu mascota. Servicios de cremación con respeto, cariño y dedicación.
        </p>
        <a
          href="https://wa.me/5215512345678"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            backgroundColor: '#1e3a8a',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          Solicitar información
        </a>
      </div>
    </main>
  );
}
