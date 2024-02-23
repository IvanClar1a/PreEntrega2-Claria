
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from '../CartWidget/CartWidget';

//* Imports para usar las imagenes
//import logo from '../../assets/logo_nike.jpg';
//import logo from '../../assets/header_logo_nuevo.png';
const Header = () => {
  return (

    
    <div >
       
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#categorias">Categorias</Nav.Link>
                <Nav.Link href="#escritorio">Pcs de Escritorio</Nav.Link>
                <Nav.Link href="#notebooks">Notebooks</Nav.Link>
                <Nav.Link href="#placaVideo">Placa de video</Nav.Link>
                
            </Nav>

            {/* cOMPONENTE CART WIDGET*/}

            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>

        
    </div>
  )
}

export default Header
