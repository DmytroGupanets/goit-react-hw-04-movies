import React, { Component } from "react";

import { navRoutes } from "../routes/navRoutes";
import ContentSwitcher from "./contentSwitcher/ContentSwitcher";
import Header from "./header/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <main>
          <ContentSwitcher routes={navRoutes} />
        </main>
      </>
    );
  }
}

export default App;
