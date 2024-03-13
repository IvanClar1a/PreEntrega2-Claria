import Item from "../Item/Item"

const ItemList = ({products}) => {

    return(
        <div style={{display : 'flex', justifyContent: "space-between"}}>
            { 
                products.map(product => { // Pasamos el array a un componente de react para mostrarlo en pantalla
                 //return <Item key = {product.id} id={product.id} name={product.name} img={product.img} price={product.price}/>  /* El id va siempre dentro del .map , *identificador unico para cada render*/
                    return <Item key={product.id} {...product}/> // las props son un objeto por eso se pueden expandir las props de producs
                 
      
                })
            }
        </div>
    )
}

export default ItemList