import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ResultList from './ResultList';
import getShow from '../helpers/getShow';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            show: null,
            showDetails: null
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const input = e.target.show.value;
        this.setState({ show: input });
        let element = e.target.show;
        element.value = "";
        const showDetails = await getShow(input);
        this.setState({ show: input, showDetails: showDetails.data })
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
                {this.state.showDetails && <ResultList showList={this.state.showDetails} />}
            </div>
        );
    }
}

export default Home;