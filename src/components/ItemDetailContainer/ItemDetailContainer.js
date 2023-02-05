import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './itemDetailContainer.scss'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        // ref
        const docRef = doc(db, "pokemon_data", itemId)
        // peticion async
        getDoc(docRef)
            .then(doc => {
                setItem({ ...doc.data(), id: doc.id, price: (doc.id*1.5)+100 })
            })
    }, [itemId])

    return (
        <div className="detail-bg d-flex align-items-center justify-content-between flex-column">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer