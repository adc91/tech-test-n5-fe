import React from "react";

// Styles
import "./styles/vendor/bemskel.min.css";
import "./styles/App.scss";

import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
};

export default App;
