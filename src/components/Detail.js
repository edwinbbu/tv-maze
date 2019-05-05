import React, { Component } from 'react'

class Detail extends Component {
    render() {
        const { show } = this.props.location.state.showDetails;
        console.log(show)
        return (
            <div className="container">
                <h2>{show.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
        )
    }
}

export default Detail;