import Header from './Components/Header'
import Liste from './Components/Liste'
import { Provider } from './Context'
import AddContact from './Components/AddContact'
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
            <Route exact path="/"<AddContact /> 
          </div>
          <div className="container pt-4">
          
            <Route exact path="/liste" component={Liste} /> {/** Ici on créer une page. 'exact path' c'est le chemin dans l'url et component c'est le component à inclure dans la page */}
            
          </div>
        </div>
      </Router>

    </Provider>
  );
}

export default App;
