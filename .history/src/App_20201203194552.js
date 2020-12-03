import Header from './Components/Header'
import Liste from './Components/Liste'
import Provider from './Context'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Provider></Provider>
    <div className="App">
      <Header />
      <div className="container pt-4">
        <Liste />
      </div>
    </div>
  );
}

export default App;
