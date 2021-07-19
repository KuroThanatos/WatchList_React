import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import '../../css/NaviBar.css';

function NaviBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="logotipo">
            <img className="logo" src="/images/logo_white.png" alt="Logotipo"/>
             WatchList  - Filmes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/List">Lista</Nav.Link>
              <Nav.Link href="/Add">Adicionar</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Realizado Por:" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Claúdia Reis 20619</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Óscar Campos 21997</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NaviBar;
