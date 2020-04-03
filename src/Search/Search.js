import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for a word:
          <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" onClick={this.fetchData} />
      </form>
    );
  }
}

export default Search;