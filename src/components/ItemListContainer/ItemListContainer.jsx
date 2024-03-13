//import React from 'react'
import {useState,useEffect } from "react"
import { getProducts,getProductsBycategory } from "../asyncMock"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer({greeting}) {
  
  const [products, setProducts] = useState([]) /* UseState para cambiar de estado, lo inicializamos con un array vacio */

  const {categoryId} = useParams()

  useEffect( () => {

    const asyncFunction = categoryId ? getProductsBycategory : getProducts

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result);
        
      })
  },[categoryId]) //array vacio

 

  
  return (

    <div>
      <h1 style={{textAlign:"center"}}>{greeting}</h1>

      <ItemList products = {products} />
    </div>
  )
}

export default ItemListContainer
