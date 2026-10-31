import React from 'react';
import { motion } from 'framer-motion';

export default function ActividadItem({ tarea }) {
  // Asegura soporte tanto si 'tarea' es un texto directo o un objeto con título
  const texto = typeof tarea === 'string' ? tarea : (tarea?.titulo || tarea?.nombre || 'Actividad');
  const detalle = tarea?.descripcion || 'Completar la práctica asignada en el entorno de desarrollo.';

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, borderColor: '#0284c7' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: '#ffffff',
        border: '1.5px solid #e2e8f0',
        borderRadius: '10px',
        padding: '1rem',
        marginBottom: '0.85rem',
        cursor: 'pointer'
      }}
    >
      <strong style={{ color: '#0369a1', fontSize: '1rem' }}>📌 {texto}</strong>
      {typeof tarea !== 'string' && (
        <p style={{ margin: '0.35rem 0 0', color: '#64748b', fontSize: '0.875rem' }}>
          {detalle}
        </p>
      )}
    </motion.article>
  );
}