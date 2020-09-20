import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component {

  state = {
    display: false,
    toys: [],
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/toys/")
      .then(resp => resp.json())
      .then(toys => this.setState({ toys: toys }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  handleDonate = (toy) => {
    fetch(`http://localhost:3000/toys/${toy.id}`, { method: "DELETE" })
      .then(resp => resp.json())
    let index = this.state.toys.filter(t => t.id !== toy.id)
    this.setState({ toys: index })

  }
  handleLike = (toy) => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 })
    }

    fetch(`http://localhost:3000/toys/${toy.id}`, options)
      .then(resp => resp.json())
      .then(toy => this.setState((prevState) =>
        ({ toys: prevState.toys.map((t) => t.id === toy.id ? { ...t, likes: toy.likes } : t) })))
  }



  addNewToy = (toy) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy)
    }

    fetch("http://localhost:3000/toys", options)
      .then(resp => resp.json())
      .then(toy => this.setState({ toys: [...this.state.toys, toy] }))
    this.setState({ display: false })
  }



  render() {
    return (
      <>
        <Header addNewToy={this.addNewToy} />
        { this.state.display
          ?
          <ToyForm addNewToy={this.addNewToy} />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}
          handleDonate={this.handleDonate}
          handleLike={this.handleLike} />
      </>
    );
  }

}

export default App;
