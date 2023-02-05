import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
                            <Link className="header__link links" to="/productos/Water">Agua</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Bug">Bicho</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Dragon">Dragón</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Electric">Electrico</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Ghost">Fantasma</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Fire">Fuego</Link>
                            <NavDropdown.Divider />
                            {/* <Link className="header__link links" to="/productos/Fairy">Hada</Link>
                            <NavDropdown.Divider /> */}
                            <Link className="header__link links" to="/productos/Fighting">Lucha</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Normal">Normal</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Grass">Planta</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Psychic">Psiquico</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Rock">Roca</Link>
                            <NavDropdown.Divider />
                            {/* <Link className="header__link links" to="/productos/Dark">Siniestro</Link>
                            <NavDropdown.Divider /> */}
                            <Link className="header__link links" to="/productos/Ground">Tierra</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Poison">Veneno</Link>
                            <NavDropdown.Divider />
                            <Link className="header__link links" to="/productos/Flying">Volador</Link>

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