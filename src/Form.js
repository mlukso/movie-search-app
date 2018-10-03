import React, { Component } from 'react';
import './App.css';

class Form extends Component {

  render() {
      return(
          <form className="search-form" 
            onSubmit={(e) => this.props.handleSubmit(e)}>
              <input type="search"
                  onChange={(e) => this.props.handleChange(e)}
                  name="search"
                  value={this.props.inputValue}
                  placeholder="Search..." />
              <button className="search-button" type="submit" id="submit">Go!</button>
          </form>
      );
  }
}

export default Form;