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

        if(user === this.props.id1){
            console.log("first");
            this.getServer(this.props.id1);
        }
        if(user2 === this.props.id2){
            console.log("second")
            this.getServer(this.props.id2);
        }
    }
    getServer(id){
            if(id === this.props.id1){
                console.log(this.props.userData)
                console.log("whats good")
                let userOneData = {
                        kills: this.props.userData[`${this.props.team}${this.props.perspective}`].kills,
                        assists: this.props.userData[`${this.props.team}${this.props.perspective}`].assists,
                        dailyKills: this.props.userData[`${this.props.team}${this.props.perspective}`].dailyKills,
                        damageDealt: this.props.userData[`${this.props.team}${this.props.perspective}`].damageDealt,
                        revives: this.props.userData[`${this.props.team}${this.props.perspective}`].revives,
                        roundMostKills: this.props.userData[`${this.props.team}${this.props.perspective}`].roundMostKills,
                        wins: this.props.userData[`${this.props.team}${this.props.perspective}`].wins,
                        losses: this.props.userData[`${this.props.team}${this.props.perspective}`].losses,
                        top10s: this.props.userData[`${this.props.team}${this.props.perspective}`].top10s,
                        roundsPlayed: this.props.userData[`${this.props.team}${this.props.perspective}`].roundsPlayed
                    }
                this.setState({
                 userOneData,
                 foundData: true
            })
            }
            if(id === this.props.id2){
                console.log("hello there")
                let userTwoData = {
                        kills: this.props.userData2[`${this.props.team}${this.props.perspective}`].kills,
                        assists: this.props.userData2[`${this.props.team}${this.props.perspective}`].assists,
                        dailyKills: this.props.userData2[`${this.props.team}${this.props.perspective}`].dailyKills,
                        damageDealt: this.props.userData2[`${this.props.team}${this.props.perspective}`].damageDealt,
                        revives: this.props.userData2[`${this.props.team}${this.props.perspective}`].revives,
                        roundMostKills: this.props.userData2[`${this.props.team}${this.props.perspective}`].roundMostKills,
                        wins: this.props.userData2[`${this.props.team}${this.props.perspective}`].wins,
                        losses: this.props.userData2[`${this.props.team}${this.props.perspective}`].losses,
                        top10s: this.props.userData2[`${this.props.team}${this.props.perspective}`].top10s,
                        roundsPlayed: this.props.userData2[`${this.props.team}${this.props.perspective}`].roundsPlayed
                }
                this.setState({
                 userTwoData,
                 foundData: true
            })
            } else {
                alert("Please input a username.");
            }
    }

    render(props){
        var idCounter = 1;
         var userData = [this.state.userOneData, this.state.userTwoData]
         console.log(userData);
         var userDataMap = userData.map((x, a) => {
             return <PlayerStatsContainer 
              foundData = {this.state.foundData}
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
              key = {idCounter++ + a}
             />
         })
        return(
            <div className="playerStatsDiv">
                <div className="playerStatsButtonContainer">
                    <Button color="Primary"  size="small"  onClick={() => this.getUser(this.props.id1, this.props.id2)} > Click to pull data from server </Button>
                </div>
                <div className="mappedUserDataDiv">
                {userDataMap}
                </div>
                <br/>
                <PlayerComparison userData = {userData} />
            </div>



        )
    }
}
export default PlayerStats;