export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F9F5EC',
        fontFamily: 'serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <img
        src="/logo.png"
        alt="Logo Huella Eterna"
        style={{ maxWidth: '300px', marginBottom: '2rem' }}
      />
      <h1 style={{ color: '#A3C9D9', fontSize: '3rem' }}>Huella Eterna</h1>
      <p style={{ color: '#475569', fontSize: '1.25rem', maxWidth: '600px' }}>
        Descanso y amor para tu mascota. Servicios de cremación con respeto, cariño y dedicación.
      </p>
    </div>
  );
}
