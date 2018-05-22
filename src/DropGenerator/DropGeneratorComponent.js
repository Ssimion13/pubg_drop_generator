import React from 'react'

function DropGeneratorComponent (props) {
  
  return (
    <div className="dropGeneratorComponentDiv">
      <div >
      {props.currentDrop ? 
      <div className="dropResultsDiv">
        <h2> First Drop Choice: </h2> <h1> {props.currentDrop} </h1>
        <br/>
        <h2> Second Drop Choice: </h2> <h1> {props.currentDrop2} </h1>
      </div>
      : null}
      </div>
    </div>
  )
}

export default DropGeneratorComponent;