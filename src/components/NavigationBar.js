import { Navbar, Container, Nav, Image } from "react-bootstrap";
import faud from "../assets/bg/logo.png";

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={faud} alt="Faud" className="logo" />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#bestseller">Best Seller</Nav.Link>
                        <Nav.Link href="#oursignature">Our Signature</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
