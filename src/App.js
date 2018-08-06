import React, { Component } from 'react';
import './App.css';

import GameConfigurator from './Components/GameConfigurator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <GameConfigurator onFormSet={(data) => {
          console.log(data)
        }} />
      </div>
    );
  }
}

export default App;
