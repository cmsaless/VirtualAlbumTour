import React from 'react';

import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    render() {
        return (
            <div className="App">
                <Container className='page-content'>
                    {Navbar()}
                    <Row className='top-spacer'>
                        <Col xs={4}>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control className='transparent-form-control' placeholder="Search" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className='lines'>
                            <div>
                                <Button variant='primary'>Button</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default App;
