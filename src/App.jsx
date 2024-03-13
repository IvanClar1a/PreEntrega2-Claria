
//importamos nuestros componentes para usarlos en el app

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDeteilConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";

//importamos la libreria de bostrap 
import 'bootstrap/dist/css/bootstrap.min.css';

//Este componente tiene que envolver a todos los componentes que esten en la navegacion
import {BrowserRouter,Routes,Route} from 'react-router-dom'




function App() {
  

  return (
    <>

      <BrowserRouter> 
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
          
          <Route path="/category/:categoryId" element = {<ItemListContainer greeting={'Productos de la categoria'} /> } />

          <Route path="/item/:itemId" element={<ItemDeteilConteiner />} />
          

        </Routes>
      </BrowserRouter>
      

     
     
    
     
    </>

  )
}

export default App
