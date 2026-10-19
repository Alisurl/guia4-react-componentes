export default function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <section style={{
      backgroundColor: '#f8fafc',
      borderLeft: '5px solid #0284c7',
      borderRadius: '8px',
      padding: '18px 22px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ fontSize: '1.2rem', color: '#0f172a', marginTop: 0 }}>
        🎯 Metas de Aprendizaje
      </h2>
      <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.5' }}>
        <p><strong>Competencia:</strong> {competencia}</p>
        <p><strong>Indicador de Logro:</strong> {indicadorLogro}</p>
      </div>
    </section>
  );
}