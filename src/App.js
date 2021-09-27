import React from 'react';

import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageButton from './components/ImageButton';

class App extends React.Component {

    list = ['abc', 'efg', 'hij'];

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            buttonText: 'button'
        };
    }

    renderImageButton(list) {
        let buttons = [];
        for (let i = 0; i < list.length; i++) {
            let elem = list[i];
            buttons.push(<ImageButton buttonText={elem}></ImageButton>)
        }
        return buttons;
    }

    render() {
        return (
            <div className="App">
                <Container className='page-content'>
                    {Navbar()}
                    <Row className='top-spacer'>
                        <Col lg={4}>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control className='transparent-form-control' placeholder="Name" />
                                    <br />
                                    <Form.Control className='transparent-form-control' placeholder="Location" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            {this.renderImageButton(this.list)}
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default App;
