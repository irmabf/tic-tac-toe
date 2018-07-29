import React, { Component } from 'react';
import Cell from './cell';
import Button from './button';
import Header from './header';

class App extends Component {
  render() {
    const game = this;
    return (
      <div>
        <Header message={ this.props.message } />
        <div className="grid">
          {
            this.props.cells.map((value, cell) => (
              <Cell
                key={cell}
                state={value}
                onPress={(e) => { game.props.onSetCell(cell, this.props.cells, this.props.player) }}
              />
            ))
          }
        </div>
        <div className="panel">
          <Button
            label="Reset"
            onPress={(e) => { game.props.onReset() }}
          />
        </div>
      </div>
    )
  }
}

export default App;
