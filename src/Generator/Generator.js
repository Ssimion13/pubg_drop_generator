import React, {Component} from "react";
import axios from "axios"
import PlayerStats from "./PlayerStats";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
      width: 280,
      height: 50,
      fontSize: 22,
    },
};

const menuStyles = {
    backgroundColor: "white"
}

class Generator extends Component{
    constructor(){
        super();
        this.state = {
            server: "na",
            team: "solo",
            perspective: "",
            userData: "",
            userName: null,
            userName2: null,
            // add later? LastMatchID: "",
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
        var userName1 = this.state.userName;
        var userName2 = this.state.userName2;

        if(userName1 !== undefined){
            this.getUser(config, userName1);
        }
        if( userName2 !== undefined){
            this.getUser(config, userName2);
        }
        this.setState({
            visibleUserName: userName1,
            visibleUserName2: userName2
        })
    }

    getUser(config, userName){
        var newState = {};
        axios.get(`https://api.playbattlegrounds.com/shards/pc-na/players?filter[playerNames]=${userName}`,
        config,)
        .then(response =>{
            //var lastMatch = response.data.data[0].relationships.matches.data.slice(0,1)[0];
            //var lastMatchID = lastMatch.id

            newState = {
                userData: response.data.data,
                id: response.data.data[0].id,
                
            }
            if(userName === this.state.userName2 && this.state.userName2 !== null){
            newState = {
                userData2: response.data.data,
                id2: response.data.data[0].id,
                    
            }
            }
            this.setState(newState)
        })
        .catch(error => {
            console.log('ERROR', error)
            var errorReport = JSON.stringify(error);
            if(errorReport.includes("404")){
                alert('Please input a valid username! (caps sensitive)');
            }
        })
    }



    render(){

        return(
            <div className="mainGeneratorDiv">
                <div className="mainGeneratorDropdownMenusDiv" >
                    <DropDownMenu 
                      value={this.state.server} 
                      style={styles.customWidth}
                      labelStyle={menuStyles}
                      onChange = {(event, index, value) => this.setState({map: value})} >
                        <MenuItem value="na" primaryText="North America" />
                        <MenuItem value="eu" primaryText="Europe" />
                        <MenuItem value="as" primaryText="Asia" />
                        <MenuItem value="sa" primaryText="South America" />
                        <MenuItem value="jp" primaryText="Korea/Japan" />
                        <MenuItem value="sea" primaryText="South East Asia" /> 
                    </DropDownMenu>

                    <DropDownMenu 
                        value={this.state.team} 
                        style={styles.customWidth}
                        labelStyle={menuStyles}
                        onChange = {(event, index, value) => this.setState({team: value})} >
                    <MenuItem value="solo" primaryText="Solo" />
                    <MenuItem value="duo" primaryText="Duo" />
                    <MenuItem value="squad" primaryText="Squad" />
                    </DropDownMenu>


                    <DropDownMenu 
                        value={this.state.perspective} 
                        style={styles.customWidth}
                        labelStyle={menuStyles}
                        onChange = {(event, index, value) => this.setState({perspective: value}) } >
                    <MenuItem value="" primaryText="Third Person (TPP)" />
                    <MenuItem value="-fpp" primaryText="First Person (FPP)" />
                    </DropDownMenu>
                    
                </div>

                <div>
                    <input onChange={this.handleChange} name="userName" />
                    <br/>
                    <input onChange={this.handleChange} name="userName2" />
                    <br/>
                    <button onClick = {this.handleSubmit}> Submit </button>
                    <div>
                </div>
                <div className="userGreetingDiv">
                { this.state.visibleUserName !== null ? 
                    <div className="userNameOneGreeting">
                        <h2> Hello, {this.state.visibleUserName} </h2>
                    </div> 
                    : null  }
                { this.state.visibleUserName2 !== null ? 
                    <div>
                        <h2>  and {this.state.visibleUserName2} </h2>
                    </div> 
                    : 
                    null }        
                </div>
        
                </div>
                
                <PlayerStats id1={this.state.id}  id2={this.state.id2} server={this.state.server} team={this.state.team} perspective={this.state.perspective}  />

            </div>
        )
    }
}

export default Generator;