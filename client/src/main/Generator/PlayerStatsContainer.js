import React from 'react';

function PlayerStatsContainer (props) {


  return(
    <div className='userDataContainerMainDiv'>
      { props.foundData ?
        <div className='userDataContainerDiv'>
          <div>
            <h2 className="centeredTitle"> {props.user} </h2>
            <br/>
            Kills: {props.kills}
            <br/>
            Assists: {props.assists}
            <br/>
            Daily Kills: {props.dailyKills}
            <br/>
            Net Dmg: {Math.round(props.damageDealt)}
            <br/>
            Revives: {props.revives}
            <br/>
            Top Kill/Round: {props.roundMostKills}
            <br/>
            Wins {props.wins}
            <br/>
            Losses: {props.losses}
            <br/>
          </div>
        </div>
      : null }      

    </div>
  )
}

export default PlayerStatsContainer