

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

//import Navbar from './components/Navbar/Navbar';
//import Button from "./components/navbar/Button/Button"

function App() {
  

  return (
    <>
      <Header />
      
      <ItemListContainer greeting={'Bienvenidos'} />

      
      
     
    </>

  )
}

export default App
