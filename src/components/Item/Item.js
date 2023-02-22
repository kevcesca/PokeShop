import { Link } from "react-router-dom"
import './item.scss'
import { motion } from "framer-motion"

const Item = ( {name, img, type, id} ) => {

    return (
        <Link to={`/detail/${id}`} className="tnone col-3 m-3 d-flex flex-column justify-content-center align-items-center cards">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="col-3 m-3 d-flex flex-column justify-content-center align-items-center cards"
            >
                <div className="col-3 m-3 d-flex flex-column justify-content-center align-items-center cards">
                        <img className="pkm-img" src={img} alt={name}/>
                    <h4>{name}</h4>
                    <p>Precio: <b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format((id*1.5)+100)}</b></p>
                    <small>Tipo(s): {type[1] ? type[0] + " " + type[1] : type[0] }</small>
                    <Link to={`/detail/${id}`} className="btn btn-outline-primary">Info</Link>
                </div>
                
            </motion.button>
        </Link>
    )
}

export default Item