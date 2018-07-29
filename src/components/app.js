import React, { Component } from 'react';
import styled from 'styled-components';
import Cell from './cell';
import Button from './button';
import Header from './header';

const Grid = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-color: #34495e;
  color: #fff;
  border: 6px solid #2c3e50;
  border-radius: 10px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Panel = styled.div`
  padding-top: 20px;
  width: 360px;
  text-align: center;
  margin: auto;
  clear: both;
`;

class App extends Component {
  render() {
    const game = this;
    return (
      <div>
        <Header message={ this.props.message } />
        <Grid>
          {
            this.props.cells.map((value, cell) => (
              <Cell
                key={cell}
                state={value}
                onPress={(e) => { game.props.onSetCell(cell, this.props.cells, this.props.player) }}
              />
            ))
          }
        </Grid>
        <Panel>
          <Button
            label="Reset"
            onPress={(e) => { game.props.onReset() }}
          />
        </Panel>
      </div>
    )
  }
}

export default App;
