import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      game: [],
      player: [],
      activeButton: null,
    };
    this._start = this._start.bind(this);
    this._clearActiveButton = this._clearActiveButton.bind(this);
    this._playerInput = this._playerInput.bind(this);
  }

  _start() {
    const { _clearActiveButton, _makeGame } = this;
    const game = _makeGame(1);
    this.setState({ game, activeButton: game[0] });
    setTimeout(_clearActiveButton, 1500);
  }

  _makeGame(count) {
    const game = [];
    for(let i = 0; i < count; i += 1) {
      game.push(Math.round(Math.random() * 3) + 1);
    }
    return game;
  }

  _clearActiveButton() {
    this.setState({ activeButton: null });
  }

  _playerInput(buttonId) {
    this.setState({ player: [buttonId] });
  }

  render() {
    const { _start, _playerInput } = this;
    const { activeButton, game, player } = this.state;
    return (
      <div>
        <span className="My__Display">
          {
            game.length === 0 || player.length === 0 ? '' :
              game[0] === player[0] ? 'SUCCESS' : 'FAIL'
          }
        </span>
        <button className="My__StartButton" onClick={_start}>Start</button>
        <button
          className={activeButton === 1 ? 'My__Button__Active' : null}
          onClick={() => _playerInput(1)}
        >1</button>
        <button
          className={activeButton === 2 ? 'My__Button__Active' : null}
          onClick={() => _playerInput(2)}
        >2</button>
        <button
          className={activeButton === 3 ? 'My__Button__Active' : null}
          onClick={() => _playerInput(3)}
        >3</button>
        <button
          className={activeButton === 4 ? 'My__Button__Active' : null}
          onClick={() => _playerInput(4)}
        >4</button>
      </div>
    );
  }
}

export default App;
