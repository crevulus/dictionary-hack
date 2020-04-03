import React, { Component } from 'react';
import './Thesaurus.css';

class Thesaurus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 'Search for something!',
      word: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  // Registers search term on each key press
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  // Resets search box
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchValue: '',
    });
  }

  // Calls API directly
  fetchData() {
    // store lexical content at time of creation
    const that = this;
    const { searchValue } = that.state;
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchValue}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d',
      },
    })
    // Append to virtual DOM
      .then((resp) => resp.json())
      .then((data) => {
        that.setState({ entry: '' });
        that.setState({ word: data.word });
        // can't figure out how to set state with both values
        data.results[0].synonyms.forEach((word) => that.setState({ synonyms: word }));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      entry,
      word,
      synonyms,
      searchValue,
    } = this.state;
    return (
      <div className="thesaurus-div">
        <form onSubmit={this.handleSubmit}>
          <label className="search-text">
            Search for a word:
            <br />
            <input type="text" label="Search" value={searchValue} onChange={this.handleChange} />
          </label>
          <input className="submit" type="submit" value="Search" onClick={this.fetchData} />
        </form>
        <div className="data">
          <p className="entry">{entry}</p>
          <p className="word">{word}</p>
          <p className="synonyms">{synonyms}</p>
        </div>
      </div>
    );
  }
}

export default Thesaurus;
