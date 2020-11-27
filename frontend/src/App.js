import React, { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import { reducer, initialState } from "./reducer/userReducer";
import Navbar from './components/Navbar'
import Login from './components/screens/Login'
import SingerProfile from "./components/screens/Singerprofile";

export const UserContext = createContext();


const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (user) {
  //     dispatch({ type: "USER", payload: user });
  //     // history.push("/home");
  //   } else {
  //     history.push("/login");
  //   }
  // }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Navbar></Navbar>
        <SingerProfile></SingerProfile>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing></Routing>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
