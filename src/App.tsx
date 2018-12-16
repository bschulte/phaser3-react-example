import React, { Component } from "react";
import Game from "./Game";
import UI from "./UI";
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: "100vh"
          }}
        >
          <UI />
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
