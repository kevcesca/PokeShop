import { useState } from "react"
import {Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import {useCartContext} from "../../context/CartContext"
// import Select from "../ItemCount/Select"

// const talles = [
//     {value: 'S', text: 'talle S'},
//     {value: 'M', text: 'talle M'},
//     {value: 'L', text: 'talle L'},
//     {value: 'XL', text: 'talle XL'},
// ]

const ItemDetail = ( {id, name,  img, type, height, weight, price} ) => {
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
        price
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
            price
        }
        agregarAlCarrito(item)
    }


    return (
        <div className="d-flex flex-column justify-content-between align-items-center">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <br/>
            <small className="small-detail">Tipo(s):{type[1] ? type[0] + " " + type[1] : type[0] }</small>
            <small className="small-detail">Tamaño:{height} </small>
            <small className="small-detail">Peso:{weight} </small>
            <p className="detail-price">Precio: ${price}</p>

            {/* <ItemCount 
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    max={10}
                    onAdd={handleAgregar}
                /> */}

            {
            !isInCart(id)
                ? <ItemCount 
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    max={10}
                    onAdd={handleAgregar}
                />
                : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }
            <hr/>

            {/* <Select 
                options={talles}
                set={setTalle}
            /> */}
            
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail