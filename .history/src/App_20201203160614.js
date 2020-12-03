import Header from './Components/Header'
import Liste from './Components/Liste'
import Contact from './Components/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import AddContact from './Components/AddContact'


function App() {
  return (
    <div className="App">
       <Header />
      <AddContact />
      {/* // <div className="container pt-4">
      //   <Contact />
      // </div> */} 
    </div>
  );
}

export default App;
