import {Navbar, Nav, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './mm-navbar.css'
import MMLogo from './assets/MM-Logo.svg'

export default function TopNav() {
    return (
        <Navbar className="home-navbar" bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href='#home' className='logo'>
                    <img src={MMLogo} className="logo" alt="Minds Matter"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ml-auto d-flex flex-nowrap' id="NavLinks">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#resources">RESOURCES</Nav.Link>
                        <Nav.Link className="text-nowrap" href="#about-us">ABOUT US</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}