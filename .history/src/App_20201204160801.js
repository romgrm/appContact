import Header from './Components/Header'
import Liste from './Components/Liste'
import AddContact from './Components/AddContact'
import APropos from './Components/APropos'
import Error from './Components/Error'
import { Provider } from './Context'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (

    // On importe notre Provider et on entoure notre app de notre Provider pour que nos components ai bien accès au state  
    <Provider>
      {/** Le router va permettre de simuler plusieurs pages dans l'application  */}
      <Router>
        <div className="App">
          <Header />
          <div className="container pt-4">
             
          </div>
          <div className="container pt-4">
          
            <Route exact path="/liste" component={Liste} /> {/** Ici on créer une page. 'exact path' c'est le chemin dans l'url et component c'est le component à inclure dans la page */}
            <Route exact path="/" component={Liste} /> {/** Permet d'afficher la liste à la racine de l'application */}
            <Route exact path="/ajouter" component={AddContact} />
            <Route exact path="/A_propos" component={APropos} />
          </div>
        </div>
      </Router>

    </Provider>
  );
}

export default App;
