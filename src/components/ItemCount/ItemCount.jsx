import { useState } from "react"

const ItemCount = ({initial = 1, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const decremenet = () => {
        if(count > 1){
            setCount(prev => prev -1)
        }
    }
    const increment = () => {
        if(count <  stock){
            setCount(prev => prev + 1)
        }
    }
    return(
        <article> 

            <h3>{count}</h3>

            <button onClick={decremenet}>-</button>
            <button onClick={ () => onAdd(count)} disabled = {!stock}>Agregar al carrito</button>
            <button onClick={increment}>+</button>

        </article>
    )
}

export default ItemCount