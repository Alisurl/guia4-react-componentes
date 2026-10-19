import { useState } from 'react';

export default function ActividadItem({ titulo, descripcion, tiempo }) {
  const [completada, setCompletada] = useState(false);

  const toggleEstado = () => {
    setCompletada(!completada);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',
      marginBottom: '12px',
      borderRadius: '8px',
      backgroundColor: completada ? '#f0fdf4' : '#ffffff',
      border: completada ? '1px solid #86efac' : '1px solid #e2e8f0',
      transition: 'all 0.25s ease'
    }}>
      <div style={{ maxWidth: '75%' }}>
        <h4 style={{
          margin: '0 0 6px 0',
          fontSize: '1rem',
          color: completada ? '#166534' : '#1e293b',
          textDecoration: completada ? 'line-through' : 'none'
        }}>
          {titulo}
        </h4>
        <p style={{
          margin: 0,
          fontSize: '0.85rem',
          color: completada ? '#15803d' : '#64748b'
        }}>
          {descripcion} • <em>Duración estimada: {tiempo}</em>
        </p>
      </div>

      <button
        onClick={toggleEstado}
        style={{
          padding: '8px 14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '0.85rem',
          backgroundColor: completada ? '#22c55e' : '#e2e8f0',
          color: completada ? '#ffffff' : '#475569',
          transition: 'background-color 0.2s'
        }}
      >
        {completada ? '✓ Completada' : 'Marcar lista'}
      </button>
    </div>
  );
}