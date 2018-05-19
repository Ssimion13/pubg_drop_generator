/* eslint no-eval: 0 */

import React, {Component} from "react";
import Button from 'material-ui/RaisedButton';
import axios from "axios";
import PlayerStatsContainer from "./PlayerStatsContainer.js";
import PlayerComparison from "./PlayerComparison.js"



class PlayerStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            userOneData: "",
            userTwoData: ""

        };
        this.getServer = this.getServer.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    getUser(user, user2){
        var id1 = this.props.id1;
        var id2 = this.props.id2;
        console.log(id1);

        if(user === id1){
            console.log("first");
            this.getServer(id1);
        }
        if(user2 === id2){
            console.log("second")
            this.getServer(id2);
        }
    }
    getServer(id){
        console.log(id);
        var config = {
            headers: {
                'Authorization': "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NmFmNTY4MC0zYTFhLTAxMzYtMDY2Zi03ZGM0MmNhOWYyNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2MzUzNDA3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdlbmVyYXRvciIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.DYfj_yQNBpsvNn-E7sVWQ13ZVn720aeWhXqmkwqJ3Kk",
                'Accept': "application/vnd.api+json"
            }
        }
        if(this.props.id1){
        axios.get(`https://api.playbattlegrounds.com/shards/pc-${this.props.server}/players/${id}/seasons/division.bro.official.2018-05`,
        config,)

        .then(response => {
            if(id === this.props.id1){
                let userOneData = {
                        foundData: true,
                        kills: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].kills,
                        assists: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].assists,
                        dailyKills: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].dailyKills,
                        damageDealt: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].damageDealt,
                        revives: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].revives,
                        roundMostKills: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].roundMostKills,
                        wins: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].wins,
                        losses: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].losses,
                        top10s: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].top10s,
                        roundsPlayed: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].roundsPlayed
                    }
                this.setState({
                 userOneData
            })
            }
            if(id === this.props.id2){
                let userTwoData = {
                        foundData: true,
                        kills: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].kills,
                        assists: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].assists,
                        dailyKills: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].dailyKills,
                        damageDealt: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].damageDealt,
                        revives: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].revives,
                        roundMostKills: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].roundMostKills,
                        wins: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].wins,
                        losses: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].losses,
                        top10s: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].top10s,
                        roundsPlayed: response.data.data.attributes.gameModeStats[`${this.props.team}${this.props.perspective}`].roundsPlayed
                }
                this.setState({
                 userTwoData
            })
            }

    })
    } else {
        alert("Please input a username.");
    }
    }

    render(props){
         var userData = [this.state.userOneData, this.state.userTwoData]
         var userDataMap = userData.map((x, a) => {
             return <PlayerStatsContainer 
              foundData = {x.foundData}
              kills = {x.kills}
              assists = {x.assists}
              dailyKills = {x.dailyKills}
              damageDealt = {x.damageDealt}
              revives = {x.revives}
              roundMostKills = {x.roundMostKills}
              wins = {x.wins}
              losses = {x.losses}
              top10s = {x.top10s}
              roundsPlayed = {x.roundsPlayed}
              key = {a * 5 / 2}
             />
         })
        return(
            <div>
                <Button color="Primary"  size="small"  onClick={() => this.getUser(this.props.id1, this.props.id2)} > Click to pull data from server </Button>
                {userDataMap}
                <PlayerComparison userData = {userData} />
            </div>



        )
    }
}
export default PlayerStats;