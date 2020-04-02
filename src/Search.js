import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: ''
    });
  }

  fetchData = (searchValue) => {
    const that = this;
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.searchValue}`, {
      method: "GET",
      withCredentials: true,
      headers: {
        'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d'
      }
    })
      .then(resp => resp.json())
      .then(function(data) {
        that.setState({ word: data.word });
        that.setState({ pronunciation: data.pronunciation.all });
        that.setState({ category: data.results[0].partOfSpeech });
        that.setState({ definition: data.results[0].definition });
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
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