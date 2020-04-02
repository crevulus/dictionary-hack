import React from 'react';
import Title from './Title'
import Board from './Board';
import Search from './Search';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    }
  }

  componentDidMount() {  
    fetch('http://localhost:3001', {mode: 'no-cors'})
      .then(text => console.log(text));
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Board />
        <Search />
      </div>
    );

  }
}

export default App;
