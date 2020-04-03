import React, { Component } from 'react';
import Dictionary from './Dictionary';
import Switch from 'react-switch'
import Thesaurus from './Thesaurus';

class ModeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({checked});
  }

  render() {
    return (
      <div>
        <p className="thesaurus-text">Thesaurus Mode: <Switch
          className="switch"
          onChange={this.handleChange}
          checked={this.state.checked}
          /></p>
        {this.state.checked ? <Thesaurus /> : <Dictionary />}
      </div>
    );
  }
}

export default ModeSwitcher;
