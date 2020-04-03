import React, { Component } from 'react';
import './Thesaurus.css'

class Thesaurus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 'Search for something!',
      word: '',
    }
  }

  // Registers search term on each key press
  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  // Resets search box
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: ''
    });
  }

  // Calls API directly
  fetchData = (searchValue) => {
    // store lexical content at time of creation
    const that = this;
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.searchValue}`, {
      method: "GET",
      withCredentials: true,
      headers: {
        'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d'
      }
    })
    // Append to virtual DOM
      .then(resp => resp.json())
      .then(function(data) {
        that.setState({ entry: '' });
        that.setState({ word: data.word });
        data.results[0].synonyms.forEach((word) => that.setState({ synonyms: word })); // can't figure out how to set state with both values
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="thesaurus-div">
        <form onSubmit={this.handleSubmit}>
          <label className="search-text">
            Search for a word: <br/>
            <input type="text" label="Search" value={this.state.searchValue} onChange={this.handleChange} />
          </label>
          <input className="submit" type="submit" value="Search" onClick={this.fetchData} />
        </form>
        <div className="data">
          <p className="entry">{this.state.entry}</p>
          <p className="word">{this.state.word}</p>
          <p className="synonyms">{this.state.synonyms}</p>
        </div>
      </div>
    );
  }
}

export default Thesaurus;