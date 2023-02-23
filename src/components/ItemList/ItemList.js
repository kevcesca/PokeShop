import Item from "../Item/Item"


const ItemList = ( {productos} ) => {

    return (
        <div className="">
            <h2 className="my-5">Nuestros productos</h2>
            <hr/>

            <section className="row my-4 container d-flex justify-content-center align-items-center">
                { productos.map((prod) => <Item key={prod.id} {...prod}/>)}
            </section>
        </div>
    )
}

export default ItemList