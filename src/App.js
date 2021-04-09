import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import NavBar from './components/NavBar'
import Header from './components/Header'
import SobreNi from './components/SobreNi'
import Habilidades from './components/Habilidades'
import Tecnologias from './components/Tecnologias'
import Portafolio from './components/Portafolio'
import Contacto from './components/Contacto'
import Particles from 'react-particles-js'

function App() {
  return (
      <div>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Particles 
                className="particles-canvas"
                params={{
                  particles:{
                    number: {
                      value: 30,
                      density:{
                        enable:true,
                        value_area: 900
                      }
                    },
                    shape: {
                      type:"circle",
                      stroke:{
                        width:6,
                        color: "#007bff"
                      }
                    }
                  }
                }}
              />
              <NavBar />
              <Header />
            </Route>
            <Route path='/SobreMi'>
              <NavBar />
              <SobreNi />
            </Route>
            <Route path='/Habilidades'>
              <NavBar />
              <Habilidades />
            </Route>
            <Route path='/Tecnologias'>
              <NavBar />
              <Tecnologias />
            </Route>
            <Route path='/Portafolio'>
              <NavBar />
              <Portafolio />
            </Route>
            <Route path='/Contacto'>
              <NavBar />
              <Contacto />
            </Route>
          </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
