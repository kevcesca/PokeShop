import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {

    const { totalCantidad, cart } = useCartContext()

    return (
        <Link to="/cart" className={`deco cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaShoppingCart className='logo-cart' />
            <span className='ms-2 px-2 cantidad'>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget