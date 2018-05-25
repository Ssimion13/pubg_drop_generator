import React, {Component} from "react";
import axios from "axios"
import PlayerStats from "./PlayerStats";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import GeneratorHowToUse from "./GeneratorHowToUse"

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
            server: "",
            team: "solo",
            perspective: "",
            userData: "",
            userName: null,
            userName2: null,
            // add later? LastMatchID: "",
            visibleUserName: null,
            visibleUserName2: null,
            id1: null,
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
        var userName1 = this.state.userName;
        var userName2 = this.state.userName2;

        if(userName1 !== null){
            this.getUser(userName1);
            this.setState({
                visibleUserName: userName1,
            })
        }
        if( userName2 !== null){
            this.getUser(userName2);
            this.setState({
                visibleUserName2: userName2,
            })
        }
    }

    getUser(userName){
        var newState = {};
        var server = this.state.server;

        axios.get(`/api?username=${userName}&server=${server}`)
        .then(response =>{

            newState = {
                userData: response.data,
                id1: this.state.userName
            }
            if(userName === this.state.userName2 && this.state.userName2 !== null){
            newState = {
                userData2: response.data,
                id2: this.state.userName2
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
                      onChange = {(event, index, value) => this.setState({server: value})} >
                        <MenuItem value="pc-na" primaryText="North America" />
                        <MenuItem value="pc-eu" primaryText="Europe" />
                        <MenuItem value="pc-as" primaryText="Asia" />
                        <MenuItem value="pc-sa" primaryText="South America" />
                        <MenuItem value="pc-jp" primaryText="Korea/Japan" />
                        <MenuItem value="pc-sea" primaryText="South East Asia" /> 
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
                    <GeneratorHowToUse />
                </div>

                <div className="generatorInputMainDiv">
                    <div className="generatorInputDiv">
                        <div className="generatorInputs">
                            <input className="generatorInput" placeholder="First Username" onChange={this.handleChange} name="userName" />
                            <br/>
                            <input className="generatorInput"  placeholder="Second Username" onChange={this.handleChange} name="userName2" />
                            <br/>
                        </div>
                        <div className="inputButtonDiv">
                        <RaisedButton   size="large" onClick = {this.handleSubmit}> Submit </RaisedButton>
                        </div>
                    </div>

                </div>  

                <div className="userGreetingDiv">
                { this.state.visibleUserName !== null && this.state.visibleUserName2 !== null ? 
                        <h2 className="firstUsername"> Hello, {this.state.visibleUserName} </h2>
                    : null  }
                { this.state.visibleUserName2 !== null && this.state.visibleUserName !== null ? 
                        <h2 className="secondUsername">  and {this.state.visibleUserName2} </h2>
                    : 
                    null }        
                {this.state.visibleUserName !== null && this.state.visibleUserName2 === null ? 
                    <h2> Hello, {this.state.visibleUserName}!</h2>
                : null}
                {this.state.visibleUserName2 !== null && this.state.visibleUserName === null ? 
                    <h2> Hello, {this.state.visibleUserName2} !</h2>
                : null}
                </div>
        
                
                <PlayerStats id1={this.state.id1}  id2={this.state.id2} userData={this.state.userData} userData2={this.state.userData2} server={this.state.server} team={this.state.team} perspective={this.state.perspective}  />

            </div>
        )
    }
}

export default Generator;