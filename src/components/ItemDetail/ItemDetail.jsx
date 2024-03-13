import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, price, description, stock}) => {

    return(
        <div > 

            <img src={img} style={{width:180,padding:20}} />
            <h2>{name}</h2>
            <h3> Precio: ${price}</h3>
            <h4>Descripcion: {description}</h4>
            <ItemCount stock={stock}/>

        </div>
    )
}

export default ItemDetail