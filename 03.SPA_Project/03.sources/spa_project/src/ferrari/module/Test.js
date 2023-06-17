import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import '../css/test.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Test() {
    return (
        <>
                <Navbar key='md' bg="color" expand='md' className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="/cars">Cars</Nav.Link>
                                    <Nav.Link href="/universe">Universe</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                <div className="menu_cover">
                    <div className="mlist_wrap">
                        <ul className="mlist">
                        </ul>
                    </div>
                    <div className="mvid_wrap"></div>
                </div>
        </>
    );
}

export default Test;
