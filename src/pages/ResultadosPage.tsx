import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultadosPage: React.FC = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://104.248.12.189:1337/api/meventos')
      .then(response => {
        console.log('Respuesta del servidor:', response.data); // Agrega este console.log
        setEventos(response.data.data);
      })
      .catch(error => {
        console.error('Error al cargar eventos', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log('eventos:', eventos); // Agrega este console.log

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

