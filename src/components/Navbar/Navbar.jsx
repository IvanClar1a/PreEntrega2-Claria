
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

//* Imports para usar las imagenes
//import logo from '../../assets/logo_nike.jpg';
//import logo from '../../assets/header_logo_nuevo.png';

const Navbar1 = () => {
  return (

    
    <div >
       
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#categorias">Categorias</Nav.Link>
                <Link to='/category/Celular'>Celular </Link>
                <Link to='/category/Computadora'>Notebooks</Link>
                <Link to='/category/Pantallas'>Monitores</Link>
                
            </Nav>

            {/* COMPONENTE CART WIDGET*/}
            
            <CartWidget />

            </Navbar.Collapse>
        </Container>
        </Navbar>

        
    </div>
  )
}

export default Navbar1
