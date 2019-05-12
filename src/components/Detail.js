import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
class Detail extends Component {
    render() {
        const { show } = this.props.location.state.showDetails;
        console.log(show)
        return (
            <div className="container">
                <h2>{show.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                <div className="row">
                    <Col>
                        <p><b>Status:</b>&nbsp;{show.status}</p>
                        <p><b>Runtime:</b>&nbsp;{show.runtime}</p>
                        <p><b>Schedule:</b>&nbsp;{show.schedule.days[0]}</p>
                        <p><b>Time:</b>&nbsp;{show.schedule.time}</p>
                    </Col>
                    <Col>
                        <img style={{ width: "400px", height: "300px" }} scr={show.image.original} alt="" />
                    </Col>
                </div>
            </div>
        )
    }
}

export default Detail;