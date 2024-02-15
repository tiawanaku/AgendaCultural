import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

const Header = () => {
  return (
    <>
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonList>
  <IonItem button routerLink="/teatros">
    <IonLabel>Teatros</IonLabel>
  </IonItem>
  <IonItem button>
    <IonLabel>Museos</IonLabel>
  </IonItem>
  <IonItem button>
    <IonLabel>Bibliotecas</IonLabel>
  </IonItem>
  <IonItem button>
    <IonLabel>Espacios Culturales</IonLabel>
  </IonItem>
  <IonItem button>
    <IonLabel>Entradas Folkloricas</IonLabel>
  </IonItem>
  <IonItem button>
    <IonLabel>Ferias Culturales</IonLabel>
  </IonItem>
  <IonItem button>
    <IonLabel>Más Eventos</IonLabel>
  </IonItem>
</IonList>
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Agenda Cultural</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
