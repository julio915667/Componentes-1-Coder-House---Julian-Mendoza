import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar.js';
import ItemListContainer from './components/itemListContainer.js';

function App() {
  return (
    
    <div className="App">
       <NavBar/>
       <ItemListContainer welcome="Bienvenido!"/>
      
      
    </div>
  );
}

export default App;
