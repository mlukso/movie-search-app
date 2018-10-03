import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {

    constructor() {
      super();
      this.state = {
        inputValue: '',
        movie: []
      };
    }

    handleChange = (e) => {
      this.setState({
          inputValue: e.target.value
      })
    }
  
    handleSubmit = (e) => {
      const {movie, inputValue} = this.state

      e.preventDefault();
      const newMovies = movie.slice();
      if(this.state.inputValue){  
      this.performSearch(inputValue).then((data) => {
        //This parses the results
        const movieResult = data
  
        const newMovie = {        
          id: movie.length + 1,
          title: movieResult.Title,
          year: movieResult.Year,
          poster: movieResult.Poster
        };

        newMovies.push(newMovie);

        this.setState({
          movie: newMovies,
          inputValue: ''
        })
      })
    }
  }

  performSearch = (query) => {
    //This performs the search
    return fetch(`http://www.omdbapi.com/?apikey=86a0f0d9&t=${query}`)
      .then(response => response.json()) 
  }

    // componentDidMount() {   
    //   this.performSearch()
    // }
  
    render() {
      const {movie, inputValue} = this.state

      return (
        <div className="App" id="main">
          <h1>
            A Simple Movie Search
          </h1>
          <Form 
            handleChange = {this.handleChange}
            inputValue = {inputValue}  
            handleSubmit={this.handleSubmit}
          /> 
          <List 
            movie={movie}
          />
        </div>
      );
    }
  }
  
  export default App;