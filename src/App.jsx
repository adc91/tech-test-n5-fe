import React from "react";

import GlobalStyles from "./components/styles/GlobalStyles";
import Container from "./components/grid/Container";
import Main from "./components/grid/Main";
import Header from "./components/Header";
import Form from "./components/Form";

import "./styles/vendor/bootstrap-reboot.min.css";
import "./styles/vendor/bootstrap-grid.min.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <Form />
        </Main>
      </Container>
    </>
  );
};

export default App;
