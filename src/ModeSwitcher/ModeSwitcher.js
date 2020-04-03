import React, { Component } from 'react';
import Switch from 'react-switch';
import Dictionary from '../Dictionary/Dictionary';
import Thesaurus from '../Thesaurus/Thesaurus';
import './ModeSwitcher.css';

class ModeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const { checked } = this.state;
    return (
      <div>
        <p className="thesaurus-text">
          Thesaurus Mode:
          <Switch
            className="switch"
            onChange={this.handleChange}
            checked={checked}
            onColor="#000"
          />
        </p>
        {checked ? <Thesaurus /> : <Dictionary />}
      </div>
    );
  }
}

export default ModeSwitcher;
