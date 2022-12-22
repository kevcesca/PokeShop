import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.scss'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">TavoImpresiones3D</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Figuras" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Figuras de anime</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Figuras de videojuegos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Paquetes</NavDropdown.Item>
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
                    
                    <CartWidget/>
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;