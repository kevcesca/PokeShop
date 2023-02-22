import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './mainContainer.scss'
import { collection, getDocs,  query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { motion } from "framer-motion"

const MainContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { typeId } = useParams()
    console.log(productos)

    useEffect(() => {
        // pedirDatos()
        
        setLoading(true)

        
        const productosRef = collection(db, "pokemon_data")
        const q = typeId
                    ? query(productosRef, where("type", 'array-contains', typeId) )
                    : productosRef
        

        getDocs(q)
            .then((resp) => {
                console.log(resp.docs.map((doc) => doc.data));
                setProductos( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                        stock: 10,
                        price: (doc.id*1.5)+100
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [typeId])


    return (
            <div className="container">
                {
                    loading
                        ? <h2>Cargando...</h2>
                        : <ItemList productos={productos}/>
                }
            </div>
        
    )
}

export default MainContainer