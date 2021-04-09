import React, {Component} from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card">
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        )
    }
}

export default Card
