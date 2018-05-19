import React from "react";

function PlayerStatsContainer(props) {
    return(
        <div>
            { props.foundData ? 
                <div>
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
                    Most Kills in One Round: {props.roundMostKills}
                    <br/>
                    Wins {props.wins}
                    <br/>
                    Losses: {props.losses}
                    <br/>
                    Top 10s: {props.top10s} out of {props.roundsPlayed}: {Math.round(props.top10s / props.roundsPlayed) * 100} %
                </div>
                : null }
             
        </div>

    )
}

export default PlayerStatsContainer;