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
    const { game } = this.state;
    return (
      <div>
        <span className="My__Display"></span>
        <button className="My__StartButton" onClick={_start}>Start</button>
        <button className={game === 1 ? 'My__Button__Active' : null}>1</button>
        <button className={game === 2 ? 'My__Button__Active' : null}>2</button>
        <button className={game === 3 ? 'My__Button__Active' : null}>3</button>
        <button className={game === 4 ? 'My__Button__Active' : null}>4</button>
      </div>
    );
  }
}

export default App;
