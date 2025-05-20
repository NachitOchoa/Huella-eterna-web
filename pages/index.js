export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/fondo-inicio.jpg")',
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
          maxWidth: '280px',
          marginBottom: '1.5rem',
          backgroundColor: 'rgba(255,255,255,0.8)',
          padding: '1rem',
          borderRadius: '1rem',
        }}
      />
      <h1 style={{ fontSize: '2.8rem', color: '#1e3a8a', marginBottom: '0.5rem' }}>
        Huella Eterna
      </h1>
      <p style={{ fontSize: '1.4rem', color: '#9f7e41', marginBottom: '2rem' }}>
        Descanso y Amor para tu Mascota
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
