export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header style={{
      backgroundColor: '#1e293b',
      color: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: '0 0 10px 0', fontSize: '1.8rem', color: '#38bdf8' }}>
        {tituloTema}
      </h1>
      <div style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>
        <p style={{ margin: '4px 0' }}><strong>Docente:</strong> {nombreDocente}</p>
        <p style={{ margin: '4px 0' }}><strong>Horario:</strong> {horario}</p>
      </div>
    </header>
  );
}