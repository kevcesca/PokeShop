import { useState } from "react"
import {Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import {useCartContext} from "../../context/CartContext"
import './itemdetail.scss'


const ItemDetail = ( {id, name,  img, type, height, weight, price, stock} ) => {
    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    console.log({
        id,
        name,
        type,
        img,
        height,
        weight,
        cantidad,
        price,
        stock
    })
    const handleAgregar = () => {
        const item = {
            id,
            name,
            type,
            img,
            height,
            weight,
            cantidad,
            price,
            stock
        }
        agregarAlCarrito(item)
    }


    return (
        <div className=" d-flex flex-column container-fluid">
            <div className="d-flex flex-row align-items-center justify-content-around mt-5 px-5">
                <div className="ms-5 d-flex flex-column justify-content-between align-items-center">
                    <h2>{name}</h2>
                    <img src={img} alt={name}/>
                </div>

                <div className="ms-5 d-flex flex-column justify-content-between align-items-center detail-bg">
                    <small className="small-detail">Tipo(s):{type[1] ? type[0] + " " + type[1] : type[0] }</small>
                    <small className="small-detail">Tamaño:{height} </small>
                    <small className="small-detail">Peso:{weight} </small>
                    <p className="detail-price">Precio: ${price}</p>
                    {
                    !isInCart(id)
                        ? <ItemCount 
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            max={stock}
                            onAdd={handleAgregar}
                        />
                        : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                    }
                </div>
            </div>
            <hr className="twhite"/>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail