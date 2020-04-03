import React, { Component } from 'react';
import Dictionary from '../Dictionary/Dictionary';
import Switch from 'react-switch'
import Thesaurus from '../Thesaurus/Thesaurus';
import './ModeSwitcher.css'

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
          onColor="#000"
          /></p>
        {this.state.checked ? <Thesaurus /> : <Dictionary />}
      </div>
    );
  }
}

export default ModeSwitcher;
