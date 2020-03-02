import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import Songs from "./components/Songs";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <>
        <Link to='/'>Login</Link>
        <Link to='/songs'>Songs</Link>
      </>

      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/Songs:id/'>
        <Songs />
      </Route>
    </div>
  );
}

export default App;
