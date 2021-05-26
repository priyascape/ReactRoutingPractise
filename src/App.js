
import './App.css';
import { Router, Link } from '@reach/router';
import Welcome from './components/Welcome';
import Word from './components/Word';


function App() {
  return (
    <div className="App">
      <Router>
          <Welcome path="/home" />
          <Word path="/:param" />
          <Word path="/:param/:textColor/:bgColor" />
        </Router>
    </div>
  );
}

export default App;
