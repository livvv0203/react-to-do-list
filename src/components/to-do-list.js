import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class TodoList extends Component {
  state = {
    inputText: "",
    list: [
      {
        id: 1,
        text: "TEST",
        isChecked: false,
      },
    ],
  };

  // refInput = React.createRef();

  render() {
    return (
      <div className="todolist-wrapper">
        <input
          type={"text"}
          value={this.state.inputText}
          onChange={(evt) =>
            this.setState({
              inputText: evt.target.value,
            })
          }
          className="input-box"
        ></input>
        <Button
          variant="secondary"
          className="btn-add"
          onClick={this.handleClick}
        >
          Add
        </Button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => this.handleChecked(index)}
              ></input>
              <span
                dangerouslySetInnerHTML={{ __html: item.text }}
                style={{ textDecoration: item.isChecked ? "line-through" : "" }}
              ></span>
              {/* <span dangerouslySetInnerHTML={{ __html: item.text }}></span> */}
              <Button
                variant="danger"
                className="btn-delete"
                onClick={() => this.handleDelete(index)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>

        {this.state.list.length === 0 && <div>NO DATA</div>}
      </div>
    );
  }

  handleClick = () => {
    var newList = [...this.state.list];
    newList.push({
      id: Math.random() * 1000000, // Generate simple random numbers
      text: this.state.inputText,
      isChecked: false,
    });
    this.setState({ list: newList, inputText: "" });
  };

  handleDelete = (index) => {
    console.log("Delete: " + index);

    var newList = this.state.list.slice();
    newList.splice(index, 1); // Delet one from index
    this.setState({
      list: newList,
    });
  };

  handleChecked = (index) => {
    console.log(index);

    let newList = [...this.state.list];

    newList[index].isChecked = !newList[index].isChecked;

    this.setState({
      list: newList,
    });
  };
}

export default TodoList;
