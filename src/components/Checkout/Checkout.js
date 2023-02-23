import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc} from "firebase/firestore"



const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        console.log(values);
        e.preventDefault()

        // validando

        if (values.nombre.length < 2) {
            alert("Nombre inválido")
            return
        }
        if (values.direccion.length < 2) {
            alert("Dirección inválida")
            return
        }
        if (values.email.length < 5) {
            alert("Email inválido")
            return
        }
        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'pokemon_data')
        
        const outOfStock = []
        
        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ) )

        const productos = await getDocs(itemsRef)
        
        productos.docs.forEach(doc => {
                const item = cart.find(item => item.id === doc.id)
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.cantidad
                    })

        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptycart()
                        })
                        .catch((error) => console.log(error) )
                })
        } 
        
    }


    if (orderId) {
        return (
            <div className="container my-5 d-flex justify-content-center align-items-center flex-column">
                <h2 className="twhite">La compra ha sido exitosa</h2>
                <hr className="twhite"/>
                <p className="twhite">Tu orden de compra es: {orderId}</p>

                <Link className="btn btn-primary text-reset" to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5 d-flex justify-content-center align-items-stretch flex-column checkout-form">
            <h2 className="mt-2">Completa tu compra</h2>
            <hr className="twhite"/>

            <form className="d-flex justify-content-center align-items-stretch flex-column" onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="nombre"
                    value={values.nombre}
                    placeholder="Ingresa el nombre de quien recibe"
                />

                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="direccion"
                    value={values.direccion}
                    placeholder="Ingresa tu dirección de envio"
                />

                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Ingresa tu e-mail"
                />

                <button className="btn btn-primary text-reset twhite">Enviar</button>
            </form>
            
        </div>
    )
}

export default Checkout

// cart.forEach(prod => {
        //     const docRef = doc(productosRef, prod.id)
        //     getDoc(docRef)
        //         .then((doc) => {
        //             if (doc.data().stock - prod.cantidad >= 0) {
        //                 updateDoc(docRef, { stock: doc.data().stock - prod.cantidad})
                    
        //             } else {
        //                 alert("No hay stock disponible")
        //             }
        //         })
        // })