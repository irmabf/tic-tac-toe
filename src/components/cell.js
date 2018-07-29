import React, { Component } from 'react';
import styled from 'styled-components';

const CellBoard = styled.div`
  border: 6px solid #2c3e50;
  border-radius: 2px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Cell extends Component {
  render() {
    return (
      <CellBoard onClick={ this.props.onPress}>
        { this.props.state }
      </CellBoard>
    )
  }
}

export default Cell;
