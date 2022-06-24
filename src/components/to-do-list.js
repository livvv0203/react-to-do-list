import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";

class TodoList extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "TEST",
      }
    ],
  };

  refInput = React.createRef();

  render() {

    return (
      <div className="todolist-wrapper">
        <input type={"text"} ref={this.refInput} className="input-box"></input>
        <Button variant="secondary" className="btn-add" onClick={this.handleClick}>Add</Button>
      
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {item.text}
              {/* <span dangerouslySetInnerHTML={{ __html: item.text }}></span> */}
              <Button variant="danger" className="btn-delete" onClick={() => this.handleDelete(index)}>Delete</Button>
            </li>
          ))}
        </ul>

        {this.state.list.length === 0 && <div>NO DATA</div>}
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
    this.refInput.current.value = " ";
    
  };

  handleDelete = (index) => {
    console.log("Delete: " + index);

    var newList = this.state.list.slice();
    newList.splice(index, 1); // Delet one from index
    this.setState({
      list: newList,
    });
  };
}

export default TodoList;
