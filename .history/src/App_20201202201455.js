import Header from './Components/Header'
import Liste from './Components/Liste'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container pt-4">
        <Liste />
        <Contact />
      </div>
    </div>
  );
}

export default App;
