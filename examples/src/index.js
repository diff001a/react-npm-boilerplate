import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Datepicker from "../../src";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Datepicker />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,
  h2 {
    font-weight: bold;
  }
  .first-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1 {
      margin-bottom: 60px;
    }
  }
  h2 {
    margin: 50px 0 30px 0;
  }
`;

render(<App />, document.getElementById("root"));
