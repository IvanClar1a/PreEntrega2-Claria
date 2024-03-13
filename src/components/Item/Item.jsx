import { Link } from "react-router-dom"

const Item =  ({id, name, img, price} ) => {  {/* Pasamos los datos por props y despues usamos las props en el retorno*/}

    return(
        <div > 
      
            <h2>{name}</h2>
            <img src={img} style={{width:180,padding:20}} />
            <h3> Precio: ${price}</h3>
            <Link to={'/item/${id}'}> Ver detalles</Link>
        </div>
    )
}

export default Item