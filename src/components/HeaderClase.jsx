import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderClase() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        padding: '1.25rem',
        backgroundColor: '#1e293b',
        color: '#f8fafc',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <span style={{ fontSize: '0.8rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Plan de Clase Digital
      </span>
      <h1 style={{ margin: '0.35rem 0 0', fontSize: '1.6rem' }}>Tecnologías de la Información y Comunicación</h1>
    </motion.header>
  );
}