import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }
  chooseGif = (event) => {
    this.props.displayMain(this.props.id);
  }

  render () {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return <img className="gif" src={src} alt="" onClick={this.chooseGif} />;
  }
}

export default Gif;
