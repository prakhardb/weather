import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state =  { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onSubmitForm (event) {
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} className="input-group">
        <input
         placeholder="Get a five day forecast for your favroite cities"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}
        />
        <span className="input-group-btn">
         <button type="submit" className="btn btn-primary">
        Search
        </button>
        </span>
        </form>
      </div>
    )
  }
}
