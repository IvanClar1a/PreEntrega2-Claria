import { useState,useEffect } from "react"
import { getProductById } from "../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDeteilConteiner = () => {

    const [product, setProduct] = useState(null)
    
    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(result => {
                setProduct(result)
            })
    },[itemId])

    return(
        <main>  

            <h1>Detalles de productos</h1>

            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDeteilConteiner