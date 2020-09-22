import React, { Component } from 'react';

class ToyCard extends Component {
  // id = this.props.allToys["id"];
  // name = this.props.allToys["name"];

  // state={
  //   likes: this.props.toyDetails.likes
  // }
  
  // handleLikes = (event) =>{
    
  //   const newLikes = parseInt( event.target.value) + 1
  //   this.setState({
  //     likes: newLikes
  //   })
    
  //   console.log(newLikes) 
  //   // debugger
  // }


handleDelete = () => {
this.props.deleteToy(this.props.toyDetails.id)
}



  
  render() {
    const {
      id, 
      name, 
      image, 
      likes} = this.props.toyDetails
    
    // debugger
    return (
      <div className="card" id={id.toString()}>
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button 
        id={id}
        onClick={this.props.handleLikes}
        value={likes}
        className="like-btn">Like {'<3'}</button>
        
        <button 
        id={id}
        onClick={this.handleDelete}
        className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;


// "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 5