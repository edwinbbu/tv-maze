import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';

class Home extends Component {
    constructor()
    {
        super();
        this.state={
            show: null
        }
    }

    render() {
        return (
            <div>
                <h1>Dummy Data</h1>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default Home;