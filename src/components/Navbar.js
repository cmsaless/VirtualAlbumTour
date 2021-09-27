import BsNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg" className='transparent'>
            <Container className='navbar-container'>
                <BsNavbar.Brand href="#home">Chris' Photo Album</BsNavbar.Brand>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;