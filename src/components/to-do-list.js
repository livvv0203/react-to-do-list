import React, { Component } from "react";
import "../css/index.css";

class Test extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "aa1",
      },
      {
        id: 2,
        text: "bbb",
      },
      {
        id: 3,
        text: "ccc",
      },
    ],
  };

  refInput = React.createRef();

  render() {
    return (
      <div>
        <input type={"text"} ref={this.refInput}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {item.text} ------- {index} ----- {item.id}
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleClick = () => {
    console.log("Clicked: " + this.refInput.current.value);

    var newList = [...this.state.list];
    newList.push({
      id: Math.random() * 1000000, // Generate simple random numbers
      text: this.refInput.current.value,
    });
    this.setState({ list: newList });
  };
}

export default Test;
