import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './ImageButton.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageButton extends React.Component {

    render() {
        return (
            <Link to={"/album/" + this.props.albumId}>
                <Button variant='primary' className='btn-image'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/` + this.props.albumName + `/` + this.props.filePath + `")`
                    }}
                    onMouseOver={() => this.setState({ albumName: '' })}
                    onMouseLeave={() => this.setState({ albumName: this.props.albumName })}
                >{this.props.albumName}</Button>
            </Link>
        )
    }
}

export default ImageButton;