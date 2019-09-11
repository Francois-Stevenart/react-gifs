import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render () {
    return (
      <div className="gif-list">
        {this.props.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} displayMain={this.props.displayMain} />;
        })}
      </div>);
  }
}

export default GifList;
