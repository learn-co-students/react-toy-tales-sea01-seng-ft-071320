import React, { Component } from "react";

class ToyCard extends Component {
  handleLike = () => {
    return this.props.likeToy(this.props.toy.id, this.props.toy.likes + 1);
  };

  handleDelete = () => this.props.deleteToy(this.props.toy.id);

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img
          src={this.props.toy.image}
          alt={this.props.toy.name}
          className="toy-avatar"
        />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">
          Like {"<3"}
        </button>
        <button onClick={this.handleDelete} className="del-btn">
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
