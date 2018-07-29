import React, { Component } from 'react';
import styled from 'styled-components';

const Reset = styled.div`
  display: inline-block;
  padding: 20px 40px;
  background-color: #555555;
  color: #FFFFFF;
  cursor: pointer;
`;

class Button extends Component {
  render() {
    return (
      <Reset onClick={ this.props.onPress }>
      { this.props.label }
      </Reset>
    )
  }
}


export default Button;

