import React from 'react';

import Button from 'react-bootstrap/Button';

import './ImageButton.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageButton extends React.Component {
    render() {
        return (
            <Button variant='primary' className='btn-image'
                onMouseOver={() => this.setState({ buttonText: '' })}
                onMouseLeave={() => this.setState({ buttonText: 'David' })}
            >{this.props.buttonText}
            </Button>
        )
    }
}

export default ImageButton;