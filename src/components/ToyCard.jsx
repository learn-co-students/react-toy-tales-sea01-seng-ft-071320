import React from "react";

function ToyCard(props) {
  return (
    <div id={props.toy.id} className="card">
      <h2>{props.toy.name}</h2>
      <img src={props.toy.image} alt={props.toy.name} className="toy-avatar" />
      <p>{props.toy.likes} Likes </p>
      <button
        className="like-btn"
        onClick={() => {
          props.handleLike(props.toy);
        }}
      >
        {" "}
        Like {"<3"}
      </button>
      <button
        onClick={() => {
          props.donateToy(props.toy);
        }}
        className="del-btn"
      >
        Donate to GoodWill
      </button>
    </div>
  );
}
export default ToyCard;
