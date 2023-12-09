import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export function Navbar(){
    return(
        <NavbarBS className="bg-white shadow-sm mb-3">
        <Container>
                <Nav >
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                </Nav>
        </Container>
        </NavbarBS>
    )
}