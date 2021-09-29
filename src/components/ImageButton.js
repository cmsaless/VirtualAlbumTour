import React from 'react';

import Button from 'react-bootstrap/Button';

import './ImageButton.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageButton extends React.Component {

    navigateToAlbumPage() {

    }

    render() {
        return (
            <Button variant='primary' className='btn-image'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://localhost:3000/images/` + this.props.albumName + `/` + this.props.filePath + `")`
                }}
                onMouseOver={() => this.setState({ albumName: '' })}
                onMouseLeave={() => this.setState({ albumName: this.props.albumName })}
            >{this.props.albumName}
            </Button>
        )
    }
}

export default ImageButton;