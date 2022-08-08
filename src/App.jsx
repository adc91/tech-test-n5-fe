import React, { Fragment } from "react";

import GlobalStyles from "./components/styles/GlobalStyles";

import Header from "./components/Header";
import Form from "./components/Form";

import "./styles/vendor/bootstrap-reboot.min.css";
import "./styles/vendor/bootstrap-grid.min.css";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <div className="container">
        <Header />
        <main>
          <Form />
        </main>
      </div>
    </Fragment>
  );
};

export default App;
