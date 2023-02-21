import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginContext'

function NavBar() {
    const { user, logout } = useLoginContext()
    return (
        <Navbar className='navBar d-flex justify-content-center align-items-center' expand="lg">
            <Container fluid>
                <Link className="header__link links me-5 t-white" to="/">PokeShop</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="d-flex justify-content-end align-items-center">
                        <Nav
                            className="my-2 my-lg-0 mx-5 col-7 t-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="header__link links me-5 mt-2 t-white" to="/productos/Water">Agua</Link>
                            <Link className="header__link links me-5 mt-2 t-white" to="/productos/Fire">Fuego</Link>
                            <Link className="header__link links me-5 mt-2 t-white" to="/productos/Grass">Planta</Link>
                            <NavDropdown className='links me-5 t-white' title="Más tipos" id="navbarScrollingDropdown">
                                <Link className="header__link links desplegable" to="/productos/Bug">Bicho</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Dragon">Dragón</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Electric">Electrico</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Ghost">Fantasma</Link>
                                <NavDropdown.Divider />
                                {/* <Link className="header__link links" to="/productos/Fairy">Hada</Link>
                                <NavDropdown.Divider /> */}
                                <Link className="header__link links desplegable" to="/productos/Fighting">Lucha</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Normal">Normal</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Psychic">Psiquico</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Rock">Roca</Link>
                                <NavDropdown.Divider />
                                {/* <Link className="header__link links" to="/productos/Dark">Siniestro</Link>
                                <NavDropdown.Divider /> */}
                                <Link className="header__link links desplegable" to="/productos/Ground">Tierra</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Poison">Veneno</Link>
                                <NavDropdown.Divider />
                                <Link className="header__link links desplegable" to="/productos/Flying">Volador</Link>

                            </NavDropdown>
                        </Nav>
                        <div className='ms-5 col-1'>
                            <CartWidget className='ms-5'/>
                        </div>
                        <div className='header__container mx-5 col-1 t-white'>
                            <p>Bienvenido: {user.email}</p>
                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </div>
                    </div>
                    
                    
                    {/* Aqui puse mi carrito de compras */}
                    
                    
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;