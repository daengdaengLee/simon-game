import React, { Component } from 'react';

import Col from './components/01-atoms/Col';
import GameBoard from './components/02-molecules/GameBoard';
import GameConsole from './components/03-organisms/GameConsole';

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
    this._activateButton = this._activateButton.bind(this);
    this._clearActiveButton = this._clearActiveButton.bind(this);
    this._showGame = this._showGame.bind(this);
    this._playerInput = this._playerInput.bind(this);
    this._successFail = this._successFail.bind(this);
    this._resetPlayer = this._resetPlayer.bind(this);
    this._nextStage = this._nextStage.bind(this);
  }

  _start() {
    const { _makeRandomInt, _showGame } = this;
    const game = [_makeRandomInt()];
    setTimeout(() => _showGame(game), 500);
    this.setState({ game, count: 1 });
  }

  _makeRandomInt() {
    return Math.round(Math.random() * 3) + 1;
  }

  _makeGame(count) {
    const game = [];
    for(let i = 0; i < count; i += 1) {
      game.push(Math.round(Math.random() * 3) + 1);
    }
    return game;
  }

  _showGame(game) {
    const { _activateButton, _clearActiveButton } = this;
    let delay = 1000;
    for(let i = 0; i < game.length; i += 1) {
      setTimeout(() => _activateButton(game[i]), delay);
      setTimeout(_clearActiveButton, delay + 1000);
      delay += 2000;
    }
  }

  _activateButton(buttonId) {
    this.setState({ activeButton: buttonId });
  }

  _clearActiveButton() {
    this.setState({ activeButton: null });
  }

  _playerInput(buttonId) {
    this.setState(prevState => {
      return { player: [...prevState.player, buttonId] };
    });
  }

  _successFail(game, player) {
    const { _nextStage, _resetPlayer } = this;
    const len = player.length;
    if(game[len - 1] !== player[len - 1]) {
      setTimeout(_resetPlayer, 1000);
      return 'FAIL';
    }
    if(game.length === len) {
      setTimeout(_nextStage, 1000);
      return 'SUCCESS';
    }
  }

  _nextStage() {
    const { _makeRandomInt, _showGame } = this;
    const { count, game } = this.state;
    const nextGame = [...game, _makeRandomInt()];
    setTimeout(() => _showGame(nextGame), 500);
    this.setState({
      count: count + 1,
      game: nextGame,
      player: [],
    });
  }

  _resetPlayer() {
    const { _showGame } = this;
    const { game } = this.state;
    setTimeout(() => _showGame(game), 500);
    this.setState({
      player: [],
    });
  }

  render() {
    const { _start, _playerInput, _successFail } = this;
    const { activeButton, game, player } = this.state;
    return (
      <Col justifyContent="SpaceBetween" alignItems="Center" height="20rem">
        <GameConsole
          start={_start}
          display={
            game.length === 0 || player.length === 0
              ? ''
              : _successFail(game, player)
          }
        />
        <GameBoard playerInput={_playerInput} activeButton={activeButton} />
      </Col>
    );
  }
}

export default App;
