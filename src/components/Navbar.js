import BsNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import GoogleLogin from 'react-google-login';

import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const responseGoogle = (response) => {
    console.log(response);
}

const Navbar = () => {
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg" className='transparent'>
            <Container className='navbar-container'>
                <BsNavbar.Brand href="/">Chris' Photo Album</BsNavbar.Brand>
                {/* <GoogleLogin
                    clientId="92174873846-mq4lthi3mdd6r285kqavg66ln2b0mued.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className='google-login'
                /> */}
            </Container>
        </BsNavbar>
    );
}

export default Navbar;