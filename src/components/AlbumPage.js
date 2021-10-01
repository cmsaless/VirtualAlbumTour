import React, { useEffect } from 'react';

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

function AlbumPage() {

    const [photoData, setPhotoData] = React.useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:4444/GetAlbum?albumId=" + id).then(res => res.json()).then(result => {
            console.log(result);
            setPhotoData(result);
        });
    }, []);

    return (
        <div className="App">
            <Container className='page-content'>
                {Navbar()}
                <Carousel interval={null}>
                    {renderCarouselItems(photoData)}
                </Carousel>
            </Container>
        </div>
    );
}

function renderCarouselItems(photoData) {

    let carouselItems = [];

    for (let i = 0; i < photoData.length; i++) {
        let elem = photoData[i];
        let url = process.env.PUBLIC_URL + "/images/" + elem['Name'] + "/" + elem['FilePath'];
        carouselItems.push(
            <Carousel.Item className='imgbox' key={elem['Id']}>
                <img
                    className="d-block w-100 fit-screen"
                    src={url}
                    alt=""
                    
                />
            </Carousel.Item>
        )
    }

    return carouselItems;
}

export default AlbumPage;