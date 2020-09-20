import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: '',
    likes: 0
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addNewToy(this.state)
  }


  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleFormSubmit}>
          <h3>Create a toy!</h3>
          <input type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text" />
          <br />
          <input type="text"
            value={this.state.image}
            onChange={this.handleOnChange}
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text" />
          <br />
          <input type="submit"
            name="submit"
            value="Create New Toy"

            className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
