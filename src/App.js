import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    display: false,
    allToys: [],
    newToy: [],
  }


  componentDidMount(){
    const url = "http://localhost:3000/toys"
    fetch(url)
    .then(resp => resp.json())
    .then(toys => {
      this.setState({
        allToys: toys
      })
    })
  }



// HANDLE FUCTIONS 

// handle add new toy button click
  handleAddAToyClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleLikes = (event) =>{
    let newLikes
    let toyID

    let updatedToysList = this.state.allToys.map(toy => {
      if (toy.id === parseInt(event.target.id)){
        newLikes = toy.likes += 1
        toyID = toy.id
        return toy
      }
      else {
        return toy
      }
    })

    this.setState({
      allToys: updatedToysList
    })

    const toyLikesData = {
      likes: newLikes,
      id: toyID
    }

    this.patchLikes(toyLikesData)
  }





///////////////////
// JSON FETCH CALLS

// add new Toy to the Database
  postNewToyToDB = (formData) => {
    
    fetch('http://localhost:3000/toys', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(toy => {
      console.log('Success:', toy);
      this.setState({
        allToys: [...this.state.allToys, toy]
      })
    })
      this.handleAddAToyClick()
  }

// update the Like count in the DB
  patchLikes = (likesData) => {
    console.log(likesData)
    fetch(`http://localhost:3000/toys/${likesData.id}`, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(likesData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
  }

// delete Toy from the database
  deleteToy = (toyID) => {
    console.log(toyID)
    fetch(`http://localhost:3000/toys/${toyID}`,{ 
    method: 'DELETE'}) // or 'PUT'
    .then(response => response.json())
    .then(toy => {
      console.log('Success:', toy);  //log success and show the toy is actually empty 
    })

    let toyArray = this.state.allToys.filter( toy => toyID !== toy.id)  // filter out the deleted toy by matching IDs to remove the match of the deleted toy

    this.setState({
      allToys: toyArray
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm postNewToyToDB={this.postNewToyToDB}/>
            :
          null
        }
        <div className="buttonContainer">
          <button 
          onClick={this.handleAddAToyClick}> Add a Toy </button>
        </div>

        <ToyContainer 
        toys={this.state.allToys} 
        handleLikes={this.handleLikes} 
        deleteToy={this.deleteToy} />
      </>
    );
  }

}

export default App;
