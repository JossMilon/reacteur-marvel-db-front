import './App.scss';
//Importing cookies is generating an error, TBI
// import cookies from 'cookies';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState} from "react";

//Importing pages
import Characters from './pages/characters';
import Comics from './pages/comics';
import Character from './pages/character';
import Favorites from './pages/favorites';

//Importing assets
import marvel_logo from "./assets/images/marvel_logo.svg"

function App() {
  const [fav, setFav] = useState([]);
  return (
      <div className="App">
        <Router>
          <nav>
            
            <Link to="/">
              <div>
                <img src={marvel_logo} alt="Marvel logo"/>
              </div>
            </Link>
            <ul>
              <Link to="/"><li>CHARACTERS</li></Link>
              <Link to="/comics"><li>COMICS</li></Link>
              <Link to="/favorites"><li>FAVORITES</li></Link>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Characters fav={fav} setFav={setFav}/>} />
            <Route path="/comics" element={<Comics fav={fav} setFav={setFav}/>} />
            <Route path="/character/:id" element={<Character fav={fav} setFav={setFav} />} />
            <Route path="/favorites" element={<Favorites fav={fav} setFav={setFav}/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
