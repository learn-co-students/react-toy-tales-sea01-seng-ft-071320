import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

const ENDPOINT = "http://localhost:5500/toys";

class App extends React.Component {
  state = {
    display: false,
    toys: [],
    toy: {
      name: "",
      image: "",
    },
  };

  likeToy = (id, newLikes) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    };

    fetch(`${ENDPOINT}/${id}`, configObj)
      .then((resp) => resp.json())
      .then((respToy) => {
        this.setState({
          toys: this.state.toys.map((toy) => {
            return toy.id === respToy.id ? respToy : toy;
          }),
        });
      })
      .catch(console.log);
  };

  deleteToy = (id) => {
    fetch(`${ENDPOINT}/${id}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .catch(console.log);

    this.state.toys.pop();

    this.setState({
      toys: this.state.toys,
    });
  };

  handleChange = (event) => {
    this.setState({
      toy: {
        ...this.state.toy,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const toy = {
      image: this.state.toy.image,
      name: this.state.toy.name,
      likes: 0,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toy),
    };

    fetch(ENDPOINT, configObj)
      .then((resp) => resp.json())
      .then((toy) =>
        this.setState({
          toys: [...this.state.toys, toy],
        })
      )
      .catch(console.log);

    this.setState({ display: false });
  };

  handleClick = () => {
    const newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  componentDidMount() {
    fetch(ENDPOINT)
      .then((resp) => resp.json())
      .then((toys) => this.setState({ toys: toys }))
      .catch(console.log);
  }

  render() {
    return (
      <>
        <Header />
        {this.state.display ? (
          <ToyForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.state.toys}
          likeToy={this.likeToy}
          deleteToy={this.deleteToy}
        />
      </>
    );
  }
}

export default App;
