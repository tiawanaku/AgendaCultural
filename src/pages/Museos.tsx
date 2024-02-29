import React, { useState, useEffect } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header.jsx";
import axios from "axios";

const Museos: React.FC = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://104.248.12.189:1337/api/meventos"
        );
        setEventos(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <IonPage>
      <Header />
      <IonContent id="main-content" className="ion-padding">
        {/* Contenido de la página de museos */}
        <h1>Museos</h1>
        <div>
          {eventos.map((evento: any) => (
            <div key={evento.id}>
              <h2>{evento.attributes.titulo_evento}</h2>
              <p>{evento.attributes.descripcion_evento}</p>
              <p>Fecha: {evento.attributes.fecha_evento}</p>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Museos;
