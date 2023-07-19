import React, { useReducer } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
const {name, color, city, bio, links} = user
const {github, linkedin} = links
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color ={color}/>
      <About bio={bio} github={github} linkedin={linkedin}/>
    </div>
  );
}

export default App;
