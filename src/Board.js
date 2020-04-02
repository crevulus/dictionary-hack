import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      pronunciation: '',
      category: '',
      definition: ''
    }
  }

  componentDidMount() {
    if (this.searchValue !== undefined) {
      this.fetchData('computer')
    }
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
    fetch(`http://localhost:3001/${this.state.searchValue}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
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

    // fetchData = (searchValue) => {
    //   const that = this;
    //   fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.searchValue}`, {
    //     method: "GET",
    //     withCredentials: true,
    //     headers: {
    //       'x-rapidapi-key': 'a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d'
    //     }
    //   })
    //     .then(resp => resp.json())
    //     .then(function(data) {
    //       that.setState({ word: data.word });
    //       that.setState({ pronunciation: data.pronunciation.all });
    //       that.setState({ category: data.results[0].partOfSpeech });
    //       that.setState({ definition: data.results[0].definition });
    //       console.log(data);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    //   }

  render() {
    return (
      <div className="board-div">
        <form onSubmit={this.handleSubmit}>
        <label>
          Search for a word: <br/>
          <input type="text" label="Search" value={this.state.searchValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" onClick={this.fetchData} />
      </form>
        <div className="data">
        <p className="word">{this.state.word}</p>
        <p className="pronunciation">{this.state.pronunciation}</p>
        <p className="category">{this.state.category}</p>
        <p className="definition">{this.state.definition}</p>
        </div>
      </div>
    );
  }
}

export default Board;

{/* <p className="word">{this.state.word}</p>
        <p className="pronunciation">{this.state.pronunciation}</p>
        <p className="category">{this.state.category}</p>
        <p className="definition">{this.state.definition}</p> */}
