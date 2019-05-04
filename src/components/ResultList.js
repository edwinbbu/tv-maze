import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
export default class ResultList extends Component {
    render() {
        const { showList } = this.props;
        return (
            <div>
                <h3 style={{ marginTop: "20px" }}>Result</h3>
                <ListGroup>
                    {showList.map((showDetails) => {
                        return (<ListGroup.Item key={showDetails.show.id}>{showDetails.show.name}</ListGroup.Item>)
                    })}

                </ListGroup>
            </div>
        )
    }
}
