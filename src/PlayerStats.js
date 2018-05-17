/* eslint no-eval: 0 */

import React, {Component} from "react";
import Button from 'material-ui/RaisedButton';
import axios from "axios";


class PlayerStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            foundData: false,
            kills: "",
            assists: "",
            dailyKills: "",
            damageDealt: "",
            revives: "",
            roundMostKills: "",
            wins: "",
            losses: "",
            top10s: "",
            roundsPlayed: ""

        };
        this.getServer = this.getServer.bind(this);
    }
    getServer(){
        var config = {
            headers: {
                'Authorization': "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NmFmNTY4MC0zYTFhLTAxMzYtMDY2Zi03ZGM0MmNhOWYyNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2MzUzNDA3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdlbmVyYXRvciIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.DYfj_yQNBpsvNn-E7sVWQ13ZVn720aeWhXqmkwqJ3Kk",
                'Accept': "application/vnd.api+json"
            }
        }
        

        if(this.props.id){
        axios.get(`https://api.playbattlegrounds.com/shards/pc-${this.props.server}/players/${this.props.id}/seasons/division.bro.official.2018-05`,
        config,)

        .then(response => {
            console.log(this.props.server);

            console.log(response.data);
            const serverData = response.data.data.attributes;
            console.log(`${this.props.team}${this.props.perspective}`)
        this.setState({
            foundData: true,
            kills: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].kills,
            assists: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].assists,
            dailyKills: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].dailyKills,
            damageDealt: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].damageDealt,
            revives: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].revives,
            roundMostKills: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].roundMostKills,
            wins: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].wins,
            losses: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].losses,
            top10s: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].top10s,
            roundsPlayed: serverData.gameModeStats[`${this.props.team}${this.props.perspective}`].roundsPlayed
        })
    })
    } else {
        alert("Please input a username.");
    }
    }

    render(props){
        return(
            <div>
                <Button color="Primary"  size="small" color="secondary"  onClick={this.getServer} > Click to pull data from server </Button>
            {this.state.foundData ? 
                <div>
                    Kills: {this.state.kills}
                    <br/>
                    Assists: {this.state.assists}
                    <br/>
                    Daily Kills: {this.state.dailyKills}
                    <br/>
                    Damage Dealt: {this.state.damageDealt}
                    <br/>
                    Revives: {this.state.revives}
                    <br/>
                    Most Kills in One Round: {this.state.roundMostKills}
                    <br/>
                    Wins {this.state.wins}
                    <br/>
                    Losses: {this.state.losses}
                    <br/>
                    Top 10s: {this.state.top10s} out of {this.state.roundsPlayed}: {this.state.top10s / this.state.roundsPlayed * 100} %
                </div>
                : null }
            </div>



        )
    }
}
export default PlayerStats;