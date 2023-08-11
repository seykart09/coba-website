import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { FiShoppingBag } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import Badge from "react-bootstrap/Badge";
import Logo from '../../img/cobalogo.png';

export const HomeNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="shadow">
      <Container>
        <div>
          <Image src={Logo} className="object-fit-cover" width={50} height={50}/>
          
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
            <NavDropdown title="Collection" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Akwaba</NavDropdown.Item>
              <NavDropdown.Divider className="mx-2" />
              <NavDropdown.Item href="#action/3.2">Kaftan</NavDropdown.Item>
              <NavDropdown.Divider className="mx-2" />
              <NavDropdown.Item href="#action/3.3">Hoodies</NavDropdown.Item>
              <NavDropdown.Divider className="mx-2" />
              <NavDropdown.Item href="#action/3.4">Jackets</NavDropdown.Item>
              <NavDropdown.Divider className="mx-2" />
              <NavDropdown.Item href="#action/3.4">Official</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="me-1"><BiUser style={{width:40, height:40}}/></Nav.Link>
            <Nav.Link eventKey={2} className="position-relative" href="#memes">
              <FiShoppingBag style={{width:40, height:40}}/>
              <Badge className="position-absolute rounded-circle top-0" style={{padding:"4px 7px", right:0}} bg="danger">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
