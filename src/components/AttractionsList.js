import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Attraction = props => (
    <div className='card'>
        <img src={props.attraction.imageUrl} alt="" className="card-img-top" />
        <div className='card-body'>
            <h5 className="card-title">{props.attraction.name}</h5>
            <p>{props.attraction.description}</p>
            <p>{props.attraction.address}</p>
            <p>{props.attraction.city}</p>
            <p>{props.attraction.state}</p>
            <p>{props.attraction.zipcode}</p>
            <Link to={'/edit/' + props.attraction._id}>edit</Link> | <a href='#' onClick={() => {
                props.deleteAttraction(props.attraction._id)
            }}>delete</a>
        </div>
    </div>
)

class AttractionsList extends Component {
    constructor(props) {
        super(props);

        this.deleteAttraction = this.deleteAttraction.bind(this);

        this.state = { attractions: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/attractions/')
            .then(response => {
                this.setState({ attractions: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAttraction(id) {
        axios.delete('http://localhost:5000/attractions/' + id)
            .then(res => console.log(res.data));

        this.setState({
            attractions: this.state.attractions.filter(el => el._id !== id)
        })
    }

    attractionList() {
        return this.state.attractions.map(currentattraction => {
            return <Attraction attraction={currentattraction}
                deleteAttraction={this.deleteAttraction} key=
                {currentattraction._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>New Attractions</h3>
                <div className='card'>
                    <img src="..." alt="" className="card-img-top" />
                    <div className='card-body'>
                        <h5 className="card-title">Attraction Name</h5>
                        <p>Description</p>
                        <p>Address</p>
                        <p>City</p>
                        <p>State</p>
                        <p>Zipcode</p>
                    </div>
                </div>
                <body>
                    {this.attractionList}
                </body>

            </div>
        )
    }
}

export default AttractionsList;