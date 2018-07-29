import React, { Component } from 'react';
import styled from 'styled-components';

const title = 'Tic Tac Toe';

const Wrapper = styled.div`
  margin-top: 0;
  padding-top: 10px;
  margin-bottom: 100px;
  display: block;
  width: 100%;
  font-size: 30px;
  line-height: 60px;
  text-align: center;
  background-color: #2c3e50;
`;

const Title = styled.h1`
  margin-top: 0;
`;


class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>{ title }</Title>
        <div>
        { this.props.message }
        </div>
      </Wrapper>
    )
  }
}

export default Header;
