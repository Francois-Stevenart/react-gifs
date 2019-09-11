import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  handleUpdate = (event) => {
    this.props.searchFct(event.currentTarget.value);
  };

  handleFocus = () => {
    this.props.blurFct();
  };

  render() {
    return (
      <input className="form-search" type="text" onChange={this.handleUpdate} onFocus={this.handleFocus} onBlur={this.handleFocus} />);
  }
}

export default SearchBar;
