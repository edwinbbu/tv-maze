import React, { Component } from 'react';
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            show: null
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("show:", e.target.show.value);
        this.setState({ show: e.target.value });
        let element = e.target.show;
        element.value = "";
    }
    render() {
        return (
            <div>
                <h2>TV Shows</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control id="show" placeholder="Enter TV series name" autoComplete="off" />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <h3 style={{ marginTop: "20px" }}>Result</h3>
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