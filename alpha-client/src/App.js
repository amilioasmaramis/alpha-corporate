import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminStudio from "./pages/AdminStudio";
import Career from "./pages/Career";
import Fotographer from "./pages/Fotographer";
import Home from "./pages/Home";
import Videoeditor from "./pages/VideoEditor";
import Videographer from "./pages/Videographer";
import Photoeditor from "./pages/PhotoEditor";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/admin-studio">
        <AdminStudio />
      </Route>
      <Route path="/photographer">
        <Fotographer />
      </Route>
      <Route path="/videographer">
        <Videographer />
      </Route>
      <Route path="/video-editor">
        <Videoeditor />
      </Route>
      <Route path="/photo-editor">
        <Photoeditor />
      </Route>
      <Route path="/career">
        <Career />
      </Route>
    </Switch>
  );
}

export default App;
