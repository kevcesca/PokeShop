import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import MainContainer from './components/MainContainer/MainContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter className="bg-global">

    <NavBar />

    <Routes>
      <Route path="/" element={ <ItemListContainer>
        <div>
          <h1>Bienvenido a PokeShop</h1>
        </div>
      </ItemListContainer> }/>

      <Route path="/productos/:typeId" element={ <MainContainer /> }/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
      <Route path="*" element={ <Navigate to={"/"}/> }/>
      <Route path="/cart" element={ <Cart /> }/>
      
    </Routes>  

    {/* <Footer /> */}

  </BrowserRouter>
  );
}

export default App;
