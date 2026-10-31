import React from 'react';
import { motion } from 'framer-motion';

export default function ObjetivosCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '1.25rem',
        marginBottom: '1.5rem'
      }}
    >
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>🎯 Objetivos de la Lección</h3>
      <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#475569' }}>
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          Comprender el uso de librerías externas mediante NPM.
        </motion.li>
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}>
          Aplicar animaciones declarativas con Framer Motion en React.
        </motion.li>
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          Evaluar el impacto cognitivo de la interactividad en educación.
        </motion.li>
      </ul>
    </motion.div>
  );
}