import React, { Component } from 'react';
import Movie from './Movie'

class List extends Component {
    render () {
       return (
           <div className="Movie">
               {this.props.movie.map((movie, index) => {
                   return (
                       <Movie 
                           key={index}
                           index={index}
                           movie={movie}
                       />
                   )
               }).reverse()}
           </div>
       )
   }
}

export default List;