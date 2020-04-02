import React from 'react';
import Title from './Title'
import Board from './Board';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    }
  }

  // componentDidMount() {  
    
  // }

  render() {
    return (
      <div className="App">
        <Title />
        <Board />
      </div>
    );

  }
}

export default App;
