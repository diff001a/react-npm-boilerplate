import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Component from "../../src";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Component />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

render(<App />, document.getElementById("root"));
