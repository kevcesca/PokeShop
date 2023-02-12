

const ItemCount = ({cantidad, setCantidad, max, onAdd}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
                <button 
                    onClick={handleRestar} 
                    className={`btn btn-outline-${cantidad > 1 ? 'primary' : 'danger'} ${cantidad === 2 ? 'boton-par' : ''}`}
                    disabled={cantidad === 1}
                >
                        -
                </button>

                <span className="mx-3">{cantidad}</span>

                <button 
                    onClick={handleSumar} 
                    className={cantidad < max ? 'btn btn-primary' : 'btn btn-danger mx-3' }
                    disabled={cantidad === max}
                >
                    +
                </button>
            </div>
            <br/>

            <button className="btn btn-success my-3" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount