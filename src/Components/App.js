import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import styled from "styled-components";

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Wrap>
        <Router />
      </Wrap>
    </div>
  );
}

export default App;
