import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import './cart.scss'

const Cart = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="container my-5 d-flex justify-content-center align-items-center flex-column">
                <h2 className="my-2">Tu carrito está vacío</h2>
                <hr className="twhite"/>
                <p className="twhite">Aqui verás tus productos en el carrito... cuando agregues alguno</p>
                <Link to="/" className="btn btn-primary text-reset twhite">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5 cart">
            <h2>Tu compra</h2>
                <hr className="twhite border"/>

                {
                    cart.map(item => (
                        <div key={item.id}>
                            <div  className="d-flex justify-content-between align-items-center twhite">
                            <div>
                                <h4 className="twhite">{item.name}</h4>
                                <p className="twhite">Cantidad: {item.cantidad}</p>
                                <p className="twhite">Precio: ${item.price * item.cantidad}</p>
                                <button onClick={() => removerItem(item.id)} className="text-reset btn btn-outline-danger"><FaTrashAlt /></button>
                            </div>
                            <div>
                                <img src={item.img} alt={item.name}></img>
                            </div>
                            </div>
                            <hr className="twhite border"/>
                        
                        </div>
                    ))
                }

                <h4 className="twhite">Total: ${ totalCart() }</h4>
            
            <button className="btn btn-danger text-reset m-2" onClick={emptycart}>Vaciar carrito</button>
            <Link className="btn btn-success text-reset m-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart