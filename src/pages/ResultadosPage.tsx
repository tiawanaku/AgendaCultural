import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultadosPage: React.FC = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true); // Inicia en true para reflejar el estado de carga inicial

  useEffect(() => {
    // Cambio: Incluye _populate=* para asegurar que se poblen todas las relaciones, incluidas las imágenes
    axios.get('http://104.248.12.189:1337/api/meventos?populate=*')
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        setEventos(response.data.data);
      })
      .catch(error => {
        console.error('Error al cargar eventos', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
              {/* Asumiendo que las imágenes están en un campo llamado 'image' y es un array */}
              {/* Cambio: ajusta el acceso a la URL de la imagen según tu estructura de respuesta específica */}
              {evento.attributes.image?.data && (
                <img src={`http://104.248.12.189:1337${evento.attributes.image.data.attributes.url}`} alt={evento.attributes.titulo_evento} style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
              )}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultadosPage;

