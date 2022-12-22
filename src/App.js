import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Parallax/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
        <b>Hola mundo!</b>
      </ItemListContainer>

    </div>
  );
}

export default App;
