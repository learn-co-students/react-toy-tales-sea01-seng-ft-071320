import React, { Component } from 'react';

class ToyForm extends Component {

  
  state = {
    toyName: "",
    toyImage: ""
  }

  handleToyName = (event) => {
    
    this.setState({
      toyName: event.target.value
    })
  }

  handleToyImage = (event) => {
    this.setState({
      toyImage: event.target.value
    })
  }

  handleToySubmit = (event) => {
    event.preventDefault()
    
    let formData = {
      name: this.state.toyName,
      image: this.state.toyImage,
      likes: 0
      // "id": 1
    }

    this.props.postNewToyToDB(formData)
  }

  render() {
    
    return (
      <div className="container">
        <form onSubmit={event => this.handleToySubmit(event)} className="add-toy-form">
          <h3>Create a toy!</h3>

          <input 
            onChange={event => this.handleToyName(event)}
            value={this.setState.toyName}
            type="text" 
            name="name"
            placeholder="Enter a toy's name..." 
            className="input-text"/>
          <br/>

          <input 
            onChange={event => this.handleToyImage(event)}
            value={this.setState.toyImage}
            type="text"
            name="image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text"/>
          <br/>
          
          <input 
            type="submit"
            name="submit"
            value="Create New Toy" 
            className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
