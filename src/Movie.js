import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.movie.title}</h1>
                <h2>{this.props.movie.year}</h2>
                <img src={this.props.movie.poster} alt="movie poster"></img>
            </div>
        )
    }  
};
 export default Movie; 