import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import axios from 'axios';
import ImageButton from '../components/ImageButton.jsx';

const Home: React.FC = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      // Realiza la solicitud HTTP al endpoint y actualiza el estado 'eventos'
      setLoading(true);
      axios.get('http://104.248.12.189:1337/api/meventos')
        .then(response => {
          setEventos(response.data.data);
        })
        .catch(error => {
          console.error('Error al cargar eventos', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        {/* Utiliza Link para redirigir a otra página cuando se hace clic en la primera imagen */}
        <Link to="/resultados">
          <ImageButton
            src="/assets/teatro_app.JPG"
            onClick={() => handleButtonClick(1)}
            className="image-button"
          />
        </Link>
        <ImageButton
          src="/assets/museo_app.JPG"
          onClick={() => handleButtonClick(2)}
          className="image-button"
        />
      </div>

      {/* Resto del contenido de la página */}
    </div>
  );
};

export default Home;
