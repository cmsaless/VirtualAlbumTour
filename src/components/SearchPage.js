import React from 'react';

import Navbar from './Navbar';
import ImageButton from './ImageButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './SearchPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchResults: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.searchForAlbums = this.searchForAlbums.bind(this);
    }

    renderImageButtons() {
        let buttons = [];
        for (let i = 0; i < this.state.searchResults.length; i++) {
            let elem = this.state.searchResults[i];
            buttons.push(<ImageButton albumName={elem['Name']} filePath={elem['FilePath']} albumId={elem['Id']}></ImageButton>)
        }
        return buttons;
    }

    sayHello() {
        fetch("http://localhost:4444/hello").then(res => res.text()).then(result => {
            console.log(result);
        });
    }

    searchForAlbums() {

        if (this.state.searchValue === '') {
            this.setState({ searchResults: [] });
            return;
        }

        fetch("http://localhost:4444/SearchForAlbum?searchValue=" + this.state.searchValue).then(res => res.json()).then(result => {
            let newSearchResults = [];
            for (let i = 0; i < result.length; ++i) {
                console.log(result[i]);
                newSearchResults.push(result[i]);
            }
            this.setState({ searchResults: newSearchResults });
        });
    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <Container className='page-content'>
                    {Navbar()}
                    <Row className='top-spacer'>
                        <Col lg={4}>
                            <Form.Control className='transparent-form-control' value={this.state.searchValue} onChange={event => this.handleChange(event)} placeholder="Name or place" />
                            <Button variant='primary' type='button' onClick={this.searchForAlbums}>Search</Button>
                            <hr />
                            <a className='view-all-link' href='#'>View All →</a>
                        </Col>
                        <Col>
                            {this.state.searchResults.length > 0 ? this.renderImageButtons() : <span></span>}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchPage;