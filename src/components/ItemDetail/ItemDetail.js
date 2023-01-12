import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


// const talles = [
//     {value: 'S', text: 'talle S'},
//     {value: 'M', text: 'talle M'},
//     {value: 'L', text: 'talle L'},
//     {value: 'XL', text: 'talle XL'},
// ]

const ItemDetail = ( {id, name,  img, type, height,weight} ) => {
    const [cantidad, setCantidad] = useState(1)
    // const [talle, setTalle] = useState(null)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        console.log({
            id,
            name,
            type,
            img,
            height,
            weight,
            cantidad
        })
    }


    return (
        <div className="d-flex flex-column justify-content-between align-items-center">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <br/>
            <small className="small-detail">Tipo(s):{type[1] ? type[0] + " " + type[1] : type[0] }</small>
            <small className="small-detail">Tamaño:{height} </small>
            <small className="small-detail">Peso:{weight} </small>
            <p className="detail-price">Precio: ${(id*1.5)+100}</p>


            <ItemCount 
                cantidad={cantidad}
                setCantidad={setCantidad}
                max={10}
                onAdd={handleAgregar}
            />
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