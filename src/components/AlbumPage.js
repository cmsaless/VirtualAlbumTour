import React from 'react';

import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import {
    useParams
} from "react-router-dom";

import './AlbumPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/*
Call this function below to query the api for the album. Then in the same function, render the images in the carousel
 */

function AlbumPageId() {
    const { Id } = useParams()
    return <h3>ID: {Id} lookin good</h3>
}

class AlbumPage extends React.Component {

    render() {
        return (
            <div className="App">
                <Container className='page-content'>
                    {Navbar()}
                    <Carousel interval={null}>
                        <Carousel.Item className='imgbox'>
                            <img
                                className="d-block w-100 fit-screen"
                                src={process.env.PUBLIC_URL + "/images/Boston Pics/PXL_20210912_162831228.jpg"}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='imgbox'>
                            <img
                                className="d-block w-100 fit-screen"
                                src={process.env.PUBLIC_URL + "/images/Boston Pics/PXL_20210913_015053348.jpg"}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='imgbox'>
                            <img
                                className="d-block w-100 fit-screen"
                                src={process.env.PUBLIC_URL + "/images/Boston Pics/PXL_20210914_165626438.jpg"}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        );
    }
}

export default AlbumPage;