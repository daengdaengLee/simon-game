import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
      player: null,
    };
    this._start = this._start.bind(this);
  }

  _start() {
    const game = Math.round(Math.random() * 3) + 1;
    this.setState({ game });
  }

  render() {
    const { _start } = this;
    return (
      <div>
        <span className="My__Display"></span>
        <button className="My__StartButton" onClick={_start}>Start</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    );
  }
}

export default App;
