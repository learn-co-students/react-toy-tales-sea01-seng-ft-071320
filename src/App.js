import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

import data from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toys: data,
      display: false,
    };
  }

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  handleLike = (event) => {
    let newList = this.state.toys.map((toy) => {
      if (toy.id === event.id) {
        toy.likes += 1;
        return toy;
      } else {
        return toy;
      }
    });
    this.setState({
      toys: newList,
    });
  };

  donateToy = (event) => {
    console.log(this.state.toys);
    debugger;

    let list = this.state.toys.filter((toy) => toy.id !== event.id);

    this.setState({ toys: list });
  };

  addToy = (e) => {
    e.preventDefault();
    console.log(e);
    debugger;
    let newToy = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0,
    };

    this.setState({
      toys: [...this.state.toys, newToy],
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm addToy={this.addToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          donateToy={this.donateToy}
          handleLike={this.handleLike}
          toys={this.state.toys}
        />
      </>
    );
  }
}

export default App;
