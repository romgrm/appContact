import Header from './Components/Header'
import Liste from './Components/Liste'
import {Provider} from './Context'
import AddContact from './Components/AddContact'
import {BrowserRouter as }

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    // On importe notre Provider et on entoure notre app de notre Provider pour que nos components ai bien accès au state  
    <Provider>
      
      <div className="App">
        <Header />
        <div className="container pt-4">
        <AddContact />
      </div>
        <div className="container pt-4">
          <Liste />
        </div>
      </div>
    </Provider>
  );
}

export default App;
