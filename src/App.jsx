import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
  const actividades = [
    'Revisión teórica de Framer Motion en motion.dev',
    'Configuración del repositorio común en Git',
    'Refactorización y animación de componentes en VS Code',
    'Despliegue de la versión interactiva en Vercel'
  ];

  return (
    <main style={{ maxWidth: '650px', margin: '40px auto', fontFamily: 'system-ui, sans-serif', padding: '0 16px' }}>
      <HeaderClase />
      <ObjetivosCard />
      <h3 style={{ color: '#334155', marginBottom: '12px' }}>📋 Tareas de la Sesión</h3>
      {actividades.map((actividad, index) => (
        <ActividadItem key={index} tarea={actividad} />
      ))}
    </main>
  );
}