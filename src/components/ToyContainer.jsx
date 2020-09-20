import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = (props) => {
  return (
    <div id="toy-collection">
      {props.toys.map((toy) => {
        return (
          <ToyCard
            donateToy={props.donateToy}
            handleLike={props.handleLike}
            toy={toy}
            key={toy.id}
          />
        );
      })}
    </div>
  );
};

export default ToyContainer;
