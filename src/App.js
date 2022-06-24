import { render } from "@testing-library/react";
import React, { Component } from "react";
import Test from "./components/test";

class App extends Component {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

export default App;



// Class Component
class NavBar extends Component {
  render() {
    return <div id="navbar">NavBar</div>;
  }
}

// Function Component
function Swiper() {
  return <div>Swiper</div>;
}

// Arrow Function
const TabBar = () => {
  <div>TabBar</div>;
};






