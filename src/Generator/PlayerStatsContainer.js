import React from 'react';

function PlayerStatsContainer (props) {
  return(
    <div>
      { props.foundData ?
        <div className='userDataContainerDiv'>
          Kills: {props.kills}
          <br/>
          Assists: {props.assists}
          <br/>
          Daily Kills: {props.dailyKills}
          <br/>
          Damage Dealt: {Math.round(props.damageDealt)}
          <br/>
          Revives: {props.revives}
          <br/>
          Most One Round Kills: {props.roundMostKills}
          <br/>
          Wins {props.wins}
          <br/>
          Losses: {props.losses}
          <br/>
          Top 10s: {props.top10s} / {props.roundsPlayed}: {Math.round(props.top10s / props.roundsPlayed) * 100} %
          <br/>
        </div>
        : null }      
    </div>
  )
}

export default PlayerStatsContainer