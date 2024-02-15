// Home.tsx
// Home.tsx
import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "./Home.css";
// Importa las imágenes aquí
import teatroImage from "../components/assets/teatro.png";
import museoImage from "../components/assets/museo.png";
import feriasImage from "../components/assets/ferias.png";
import centrosculturales from "../components/assets/centrosculturales.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent id="main-content" className="ion-padding">
        <div className="image-container">
          {/* Botón de imagen para teatros */}
          <Link to="/teatros">
            <img src={teatroImage} alt="Teatros" className="image-button" />
          </Link>
          {/* Botón de imagen para museos */}
          <Link to="/museos">
            <img src={museoImage} alt="Museos" className="image-button" />
          </Link>
          {/* Botón de imagen para ferias */}
          <Link to="/ferias">
            <img src={feriasImage} alt="Ferias" className="image-button" />
          </Link>
          {/* Botón de imagen para centrosculturales */}
          <Link to="/centrosculturales">
            <img src={centrosculturales} alt="centrosculturales" className="image-button" />
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
