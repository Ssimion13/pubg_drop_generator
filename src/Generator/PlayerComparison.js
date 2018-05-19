import React from "react";


function PlayerComparison(props) {
    var UserOne = props.userData[0];
    var UserTwo = props.userData[1];
    var ComparisonArray = [];
    for( var property1 in UserOne){
         console.log(property1)
            if(UserOne[property1] > UserTwo[property1]){
                ComparisonArray.push({
                    key: [property1],
                    value: UserOne[property1],
                    "Winner": "Player 1"
                })

            } else if(UserOne[property1] < UserTwo[property1]){
                ComparisonArray.push({
                    key: [property1],
                    value: UserTwo[property1],
                    "Winner": "Player 2"
                })
            } else {
                ComparisonArray.push({
                    key: [property1],
                    value: UserOne[property1],
                    "Winner": "Tie"
                })
            }
        }
    const mappedComparisonArray = ComparisonArray.map(x => {
            return(
                <div key={x + 25}>
                {x.key} : {x.value} 
                Winner: {x.Winner}
                </div>
            )
    })
    return(
        <div> 
        {mappedComparisonArray}
              
        </div>
    )
}

export default PlayerComparison