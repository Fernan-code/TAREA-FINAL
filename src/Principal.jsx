import { Routes, Route, Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';
import Inicio from './inicio.jsx';
import OfertaCursos from './OfertaCursos.jsx';
import HistoriaDanza from './HistoriaDanza.jsx';

function Principal() {
  return (
    <div id="app-wrapper">
      {/* Encabezado */}
      <header className="bg-primary text-white text-center p-3">
        <h1>ACADEMIA DE BAILE "SERGIO EL BAILON"</h1>
      </header>

      {/* Navegación */}
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Academia</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/oferta">Oferta de Cursos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/historia">Historia de las Danzas</NavLink>
          </NavItem>

        </Nav>
      </Navbar>

      {/* Contenido principal */}
      <div className="main-content">
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/oferta" element={<OfertaCursos />} />
            <Route path="/historia" element={<HistoriaDanza />} />

          </Routes>
        </Container>
      </div>

      {/* Pie de página */}
      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2025 Academia de Baile - JOSE FERNANDO LIMACHI LAURA</p>
      </footer>
    </div>
  );
}

export default Principal;

