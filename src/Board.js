import React, { Component } from 'react';

const example = {
  word: 'Hatchback',
  partOfSpeech: 'noun',
  definition: 'Small car with vertical boot door.'
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'placeholderword',
      partOfSpeech: '',
      definition: ''
    }
  }

  componentDidMount() {
    this.setState({ word: example.word, partOfSpeech: example.partOfSpeech, definition: example.definition });
  }

  render() {
    return (
      <div className="board-div">
        <p className="word">{this.state.word}</p>
        <p className="part-of-speech">{this.state.partOfSpeech}</p>
        <p className="definition">{this.state.definition}</p>
      </div>
    );
  }
}

export default Board;
