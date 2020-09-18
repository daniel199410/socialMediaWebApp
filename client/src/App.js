import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';

import Home from "./components/screens/Home";
import NavBar from "./components/Navbar";
import Profile from "./components/screens/Profile";
import SignIn from "./components/screens/Signin";
import Signup from "./components/screens/Signup";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/"><Home/></Route>
        <Route path="/signIn"><SignIn/></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="/signUp"><Signup/></Route>
      </BrowserRouter>
  );
}

export default App;
