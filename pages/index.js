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
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'serif',
        color: '#1e3a8a',
      }}
    >
      <img
        src="/logo.png"
        alt="Logo Huella Eterna"
        style={{
          maxWidth: '180px',
          marginBottom: '1rem',
          marginTop: '-3rem',
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: '0.8rem',
          borderRadius: '0.8rem',
        }}
      />
      <h1 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '0.5rem' }}>
        Huella Eterna
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#000000', marginBottom: '2rem', maxWidth: '600px' }}>
        Descanso y amor para tu mascota. Servicios de cremación con respeto, cariño y dedicación.
      </p>
      <a
        href="https://wa.me/5215512345678"
        style={{
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
    </main>
  );
}
