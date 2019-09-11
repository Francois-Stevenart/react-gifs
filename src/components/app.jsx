import React, { Component } from 'react';

import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './giflist';

const giphy = require('giphy-api')('V0JA5G2USzBIIUeG4WuNUqwSEaIZoFKS');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "VCe1QjCbO1SH6",
      leftBlurred: false
    };
    this.search('starwars');
  }

  search = (query) => {
    giphy.search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  };

  blurMain = () => {
    this.setState({ leftBlurred: !this.state.leftBlurred });
  };

  displayMain = (chosenId) => {
    this.setState({
      selectedGifId: chosenId
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFct={this.search} blurFct={this.blurMain} />
          <div className={`selected-gif${this.state.leftBlurred ? " blurred" : ""}`}>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} displayMain={this.displayMain} />
        </div>
      </div>
    );
  }
}

export default App;
