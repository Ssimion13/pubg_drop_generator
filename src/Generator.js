import React, {Component} from "react";
import axios from "axios"
import PlayerStats from "./PlayerStats";
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
      width: 200,
    },
  };

class Generator extends Component{
    constructor(){
        super();
        this.state = {
            server: "na",
            team: "solo",
            perspective: "",
            UserData: "",
            UserName: null,
            LastMatchID: "",
            visibleUserName: null
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        var config = {
            headers: {
                'Authorization': "bearer" + " eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NmFmNTY4MC0zYTFhLTAxMzYtMDY2Zi03ZGM0MmNhOWYyNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2MzUzNDA3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdlbmVyYXRvciIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.DYfj_yQNBpsvNn-E7sVWQ13ZVn720aeWhXqmkwqJ3Kk",
                'Accept': "application/vnd.api+json"
            }
        }
        this.getUser(config);
    }

    getUser(config){
        axios.get(`https://api.playbattlegrounds.com/shards/pc-na/players?filter[playerNames]=${this.state.UserName}`,
        config,)
        .then(response =>{
            var lastMatch = response.data.data[0].relationships.matches.data.slice(0,1)[0];
            var lastMatchID = lastMatch.id

            console.log(response.data);
            console.log(response.data.data[0].attributes.name);
            console.log(response.data.data[0].id)
            this.setState({
                UserData: response.data.data,
                id: response.data.data[0].id,
                visibleUserName: this.state.UserName

            })
        })
    }



    render(){

        return(
            <div>
                <div>
                    <DropDownMenu 
                      value={this.state.server} 
                      onChange = {(event, index, value) => this.setState({server: value})} >
                        <MenuItem value="na" primaryText="North America" />
                        <MenuItem value="eu" primaryText="Europe" />
                        <MenuItem value="as" primaryText="Asia" />
                        <MenuItem value="sa" primaryText="South America" />
                        <MenuItem value="jp" primaryText="Korea/Japan" />
                        <MenuItem value="sea" primaryText="South East Asia" /> 
                    </DropDownMenu>

                    <DropDownMenu 
                        value={this.state.team} 
                        onChange = {(event, index, value) => this.setState({team: value})} >
                    <MenuItem value="solo" primaryText="Solo" />
                    <MenuItem value="duo" primaryText="Duo" />
                    <MenuItem value="squad" primaryText="Squad" />
                    </DropDownMenu>


                    <DropDownMenu 
                        value={this.state.perspective} 
                        onChange = {(event, index, value) => this.setState({perspective: value})} >
                    <MenuItem value="" primaryText="Third Person (TPP)" />
                    <MenuItem value="-fpp" primaryText="First Person (FPP)" />
                    </DropDownMenu>
                    
                </div>
                    <input onChange={this.handleChange} name="UserName" />
                    <button onClick = {this.handleSubmit}> Submit </button>

                    { this.state.visibleUserName !== null ? 
                    <div>
                        <h1> Hello, {this.state.visibleUserName} </h1>
                    </div> 
                    : 
                    <div>
                        <h1> Please input a username! </h1>
                    </div>
                    }
                
                <PlayerStats id={this.state.id} server={this.state.server} team={this.state.team} perspective={this.state.perspective}  />
            </div>
        )
    }
}

export default Generator;