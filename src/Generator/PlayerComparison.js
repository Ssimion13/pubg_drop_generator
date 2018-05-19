import React from "react";


function PlayerComparison(props) {
    var UserData = props.userData;
    var UserOne = props.userData[0];
    var UserTwo = props.userData[1];
    var ComparisonArray = [];
    for( var property1 in UserOne){
            if(UserOne[property1] > UserTwo[property1]){
                ComparisonArray.push([property1, UserOne[property1], "Player 1"])
            } else if(UserOne[property1] < UserTwo[property1]){
                ComparisonArray.push([property1, UserTwo[property1], "Player 2"])
            } else {
                ComparisonArray.push([property1, UserOne[property1], "Tie"])
            }
        }
    console.log(ComparisonArray);
    return(
        <div> 

              
        </div>
    )
}

export default PlayerComparison