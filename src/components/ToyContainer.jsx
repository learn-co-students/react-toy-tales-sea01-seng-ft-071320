import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {


  return(
  
    <div id="toy-collection">
      {props.toys.map(toy => 
        <ToyCard 
        toyDetails={toy} 
        id={toy.id} 
        handleLikes={props.handleLikes}
        deleteToy={props.deleteToy} />  )}
    </div>
  )





} // end ToyContainer 





export default ToyContainer;
