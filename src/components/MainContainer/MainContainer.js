import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './mainContainer.scss'

const MainContainer = () => {

    const [productos, setProductos] = useState([])
    const {typeId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (typeId) {
                    setProductos( res.filter(poke => poke.type[0] === typeId ||poke.type[1] === typeId) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [typeId])


    return (
        <div className="container">
            <ItemList productos={productos}/>
        </div>
    )
}

export default MainContainer