import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
  return (
    <main style={{ maxWidth: '760px', margin: '40px auto', padding: '0 16px', fontFamily: 'system-ui, sans-serif' }}>
      <HeaderClase
        tituloTema="Desarrollo Web Modular con Componentes en React"
        nombreDocente="Prof. Practicante"
        horario="Sábados de 07:00 a 09:20 AM"
      />

      <ObjetivosCard
        competencia="Aplica principios de desarrollo web modular mediante componentes en React para construir interfaces dinámicas y escalables."
        indicadorLogro="Descompone una interfaz en componentes independientes comunicándolos mediante props y controlando su estado con useState."
      />

      <section>
        <h3 style={{ color: '#1e293b', marginBottom: '14px' }}>📋 Secuencia Didáctica / Actividades</h3>
        <ActividadItem
          titulo="1. Exploración guiada y conceptos clave"
          descripcion="Discusión en plenaria sobre el paso de props y renderizado condicional."
          tiempo="20 min"
        />
        <ActividadItem
          titulo="2. Práctica de codificación en VS Code"
          descripcion="Construcción de componentes y manejo de eventos con useState."
          tiempo="60 min"
        />
        <ActividadItem
          titulo="3. Sincronización en Git y Cierre"
          descripcion="Creación de commits semánticos y push al repositorio de GitHub."
          tiempo="25 min"
        />
      </section>
    </main>
  );
}