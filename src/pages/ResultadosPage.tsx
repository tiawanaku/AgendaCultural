import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultadosPage: React.FC = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Actualiza la URL para usar el prefijo del proxy
    axios.get('/api/meventos')
      .then(response => {
        console.log('Respuesta del servidor:', response.data); // Confirma en consola
        // Asegúrate de ajustar el acceso a 'data' según la estructura de tu respuesta
        setEventos(response.data.data); 
      })
      .catch(error => {
        console.error('Error al cargar eventos', error); // Captura y registra errores
      })
      .finally(() => {
        setLoading(false); // Finaliza el indicador de carga
      });
  }, []); // Dependencias vacías para ejecutar solo una vez

  console.log('eventos:', eventos); // Registra los eventos para depuración

  return (
    <div>
      <h1>Resultados de Eventos</h1>
      {loading ? (
        <p>Cargando eventos...</p>
      ) : (
        <div>
          {eventos.map(evento => (
            <div key={evento.id}>
              <h2>{evento.attributes.titulo_evento}</h2>
              <p>Descripción: {evento.attributes.descripcion_evento}</p>
              <p>Fecha: {evento.attributes.fecha_evento}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultadosPage;


