import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className='navBar' expand="lg">
            <Container fluid>
                <Link className="header__link links" to="/">PokeShop</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown className='links' title="Tipos" id="navbarScrollingDropdown">
                            <Link className="header__link links" to="/productos/Fire">Fuego</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Water">Agua</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Grass">Planta</Link>

                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    
                    {/* Aqui puse mi carrito de compras */}
                    <CartWidget/>
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;