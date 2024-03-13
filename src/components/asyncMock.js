//import Item from "./Item/Item"


const products = [
    {
        id:'1' ,
        name:'Iphone 19',
        price: 100000 ,
        img:'https://cdn.pixabay.com/photo/2018/06/27/12/48/iphone-3501507_960_720.jpg',
        category:"Celular",
        stock: 10,
        description:'Iphone 19 pro Max'
    },
    {id:'2',name:'Notebook',price:30000,category:'Computadora',img:'https://www.bidcom.com.ar/publicacionesML/productos/NOT00177/1000x1000-NOT00177.jpg',stock:9,description:'Notebook Gamer'},
    {id:'3',name:'Monitor',price:4000,category:'Pantallas',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQpJ5sWTrs4cQcGauASTAS7Ti-_N0iO6SsA&usqp=CAU',stock:10,description:'Monitor 3040 hz'}
]

export const getProducts =  () => {

    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}

export const getProductsBycategory = (category) => {
    return new Promise((resolve) => {

        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === category))
        },500)

    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            resolve(products.find(prod => prod.id === itemId))
        }, 500);
    })
}