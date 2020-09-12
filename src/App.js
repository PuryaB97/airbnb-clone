import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
      {/* Header */}

      {/* Banner */}

      {/* Cards */}

      {/* Footer */}
    </div>
  );
}

export default App;
