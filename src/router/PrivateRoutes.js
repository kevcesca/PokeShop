import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "../components/Contacto/Contacto";
import Cart from "../components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom"
import MainContainer from "../components/MainContainer/MainContainer";
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import Checkout from "../components/Checkout/Checkout";
import './routes.scss'

const PrivateRoutes = () => {

    return (
        <>
            <NavBar />

            <Routes className="routes">
                <Route path="/" element={ <ItemListContainer>
                    <div>
                        <h1>Bienvenido a PokeShop</h1>
                    </div>
                </ItemListContainer> }/>

                <Route path="/productos/:typeId" element={ <MainContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
                <Route path="/contacto" element={ <Contacto />} />
                <Route path="*" element={ <Navigate to={"/"}/> }/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
            </Routes>  
                
            <Footer/>
        </>
    )
}

export default PrivateRoutes