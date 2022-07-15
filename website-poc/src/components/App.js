import './App.css';
import './content/style.css'
import Navigation from './navigation/Navigation';
import Event from './content/Event';

function App() {

  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Event />
      </div>
    </div>
  );
  
}

export default App;
