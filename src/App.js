import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
      player: null,
      activeButton: null,
    };
    this._start = this._start.bind(this);
    this._clearActiveButton = this._clearActiveButton.bind(this);
  }

  _start() {
    const { _clearActiveButton } = this;
    const game = Math.round(Math.random() * 3) + 1;
    this.setState({ game, activeButton: game });
    setTimeout(_clearActiveButton, 1500);
  }

  _clearActiveButton() {
    this.setState({ activeButton: null });
  }

  render() {
    const { _start } = this;
    const { activeButton } = this.state;
    return (
      <div>
        <span className="My__Display"></span>
        <button className="My__StartButton" onClick={_start}>Start</button>
        <button className={activeButton === 1 ? 'My__Button__Active' : null}>1</button>
        <button className={activeButton === 2 ? 'My__Button__Active' : null}>2</button>
        <button className={activeButton === 3 ? 'My__Button__Active' : null}>3</button>
        <button className={activeButton === 4 ? 'My__Button__Active' : null}>4</button>
      </div>
    );
  }
}

export default App;
