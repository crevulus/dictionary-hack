import React, { Component } from 'react';
import './Dictionary.css';

class Dictionary extends Component {
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
        that.setState({ pronunciation: data.pronunciation.all });
        that.setState({ category: data.results[0].partOfSpeech });
        that.setState({ definition: data.results[0].definition });
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
      pronunciation,
      category,
      definition,
      searchValue,
    } = this.state;
    return (
      <div className="dictionary-div">
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
          <p className="pronunciation">{pronunciation}</p>
          <p className="category">{category}</p>
          <p className="definition">{definition}</p>
        </div>
      </div>
    );
  }
}

export default Dictionary;

// fetchData = (searchValue) => {
//   const that = this;
//   fetch(`http://localhost:3001/`, {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));
// }
