import React, { Component } from 'react';

class ToyCard extends Component {
  render() {
    const { name, image, likes, id } = this.props.toy
    return (
      <div className="card">
        <h2>{name} {id}</h2>
        <img src={image} alt={"name"} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button
          onClick={() => this.props.handleLike(this.props.toy)}
          className="like-btn">Like {'<3'}
        </button>
        <button
          onClick={() => this.props.handleDonate(this.props.toy)}
          className="del-btn">Donate to GoodWill
        </button>
      </div>
    );
  }

}

export default ToyCard;
