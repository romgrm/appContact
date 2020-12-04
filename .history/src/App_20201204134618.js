import Header from './Components/Header'
import Liste from './Components/Liste'
import {Provider} from './Context'
import AddContact from './Components'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    // On importe notre Provider et on entoure notre app de notre Provider pour que nos components ai bien accès au state  
    <Provider>
      <div>
        <AddContact />
      </div>
      <div className="App">
        <Header />
        <div className="container pt-4">
          <Liste />
        </div>
      </div>
    </Provider>
  );
}

export default App;
