import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import TeatrosPage from './pages/TeatrosPage'; // Asegúrate de que los nombres de importación coincidan
import Museos from './pages/Museos';
// Importaciones de CSS requeridas para que los componentes de Ionic funcionen correctamente
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Ruta de redirección para manejar la ruta raíz "/" */}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        {/* Ruta para la página de inicio */}
        <Route exact path="/home" component={Home} />
        {/* Ruta para la página de teatros */}
        <Route exact path="/teatros" component={TeatrosPage} />
        {/* Aquí puedes agregar más rutas según sea necesario */}
        <Route exact path="/museos" component={Museos} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
