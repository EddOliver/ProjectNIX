/*App.js*/
import React, { Component } from "react";
import Index from "./pages/index"
import Dashboard from "./pages/dashboard"
import Reco from "./pages/rec"
import Video from "./pages/video"

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {

  render() {
      return ( 
      <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/recommendations" component={Reco} />
        <Route exact path="/video" component={Video} />
        <Route path="*" component={Index} />
      </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;