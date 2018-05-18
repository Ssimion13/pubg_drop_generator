import React, {Component} from "react";
import axios from "axios"
import PlayerStats from "./PlayerStats";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



class Generator extends Component{
    constructor(){
        super();
        this.state = {
            server: "na",
            team: "solo",
            perspective: "",
            UserData: "",
            UserName: null,
            UserName2: null,
            LastMatchID: "",
            visibleUserName: null,
            visibleUserName2: null,
            id: null,
            id2: null
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        var config = {
            headers: {
                'Authorization': "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NmFmNTY4MC0zYTFhLTAxMzYtMDY2Zi03ZGM0MmNhOWYyNjgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2MzUzNDA3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdlbmVyYXRvciIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.DYfj_yQNBpsvNn-E7sVWQ13ZVn720aeWhXqmkwqJ3Kk",
                'Accept': "application/vnd.api+json"
            }
        }
       var UserName1 = this.state.UserName;
        var UserName2 = this.state.UserName2
        if(UserName1 !== undefined){
            this.getUser(config, UserName1);
        }
        if( UserName2 !== undefined){
            this.getUser(config, UserName2);
        }
        this.setState({
            visibleUserName: UserName1,
            visibleUserName2: UserName2
        })
    }

    getUser(config, UserName){
        var newState = {};
        axios.get(`https://api.playbattlegrounds.com/shards/pc-na/players?filter[playerNames]=${UserName}`,
        config,)
        .then(response =>{
            //var lastMatch = response.data.data[0].relationships.matches.data.slice(0,1)[0];
            //var lastMatchID = lastMatch.id

                newState = {
                    UserData: response.data.data,
                    id: response.data.data[0].id,
                    
                }
                if(UserName === this.state.UserName2 && this.state.UserName2 !== null){
                newState = {
                    UserData2: response.data.data,
                    id2: response.data.data[0].id,
                        
                }
            }
            console.log(response.data);
            console.log(response.data.data[0].attributes.name);
            console.log(response.data.data[0].id)
            this.setState(newState)
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
                <div>
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
                </div>
                <div>
                    <input onChange={this.handleChange} name="UserName2" />
                    <button onClick = {this.handleSubmit}> Submit </button>

                    { this.state.visibleUserName2 !== null ? 
                    <div>
                        <h1> Hello, {this.state.visibleUserName2} </h1>
                    </div> 
                    : 
                    <div>
                        <h1> Please input a username! </h1>
                    </div>
                
                    }
                </div>
                
                <PlayerStats id={this.state.id}  id2={this.state.id2} server={this.state.server} team={this.state.team} perspective={this.state.perspective}  />

            </div>
        )
    }
}

export default Generator;