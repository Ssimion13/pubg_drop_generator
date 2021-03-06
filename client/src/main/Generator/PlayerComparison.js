import React from 'react'

function PlayerComparison (props) {
  var UserOne = props.userData[0]
  var UserTwo = props.userData[1]
  delete UserOne.user;
  delete UserTwo.user;
  var ComparisonArray = []
  var spacedProperty = ''
  for (var property1 in UserOne) {
    spacedProperty = property1.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (UserOne[property1] > UserTwo[property1]) {
      ComparisonArray.push({
        key: [spacedProperty],
        value: UserOne[property1],
        'Winner': `${props.id1}`
      })
    } else if (UserOne[property1] < UserTwo[property1]) {
      ComparisonArray.push({
        key: [spacedProperty],
        value: UserTwo[property1],
        'Winner': `${props.id2}`
      })
    } else {
      ComparisonArray.push({
        key: [spacedProperty],
        value: UserOne[property1],
        'Winner': 'Tie'
      })
    }
  }

  var idCounter = 1
  const mappedComparisonArray = ComparisonArray.map(x => {
    return (
      <div className='comparisonArrayDiv' key={idCounter++}>
        <div className='comparisonKeyValueDiv'>
          {x.key} : {Math.round(x.value)}
        </div>
        <div className='comparisonWinnerDiv'>
        Winner: {x.Winner}
        </div>
      </div>
    )
  })

  return (
    <div>
      {props.foundData ? 
      <div className='playerComparisonDiv'>
        {mappedComparisonArray.length !== 0 ? <h3 className='playerComparisonHeading'> Player Comparison: </h3> : null }      
        {mappedComparisonArray}
      </div>
      : null }
    </div>
  )
}

export default PlayerComparison