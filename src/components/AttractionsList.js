import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AttractionsList extends Component {
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

    render() {
        return (
            <>
                <div>
                    <h1>Your Attraction</h1>
                </div>
                <div className='card container'>
                   <img className='card-img-top' src="" alt="" /> 
                   <div className="card-body">
                       <h4 className="card-title">Name</h4>
                   </div>
                </div>
            </>

        )
    }
}