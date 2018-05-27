import React, { Component } from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import DropGeneratorComponent from "./DropGeneratorComponent";
import DropGeneratorHowToUse from "./DropGeneratorHowToUse";

const menuStyles = {
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    marginTop: "5px"
}



class DropGenerator extends Component{
    constructor(){
    super();
    this.state = {
        map: "Erangel",
        team: "solo",
        dropLocations: "",
        currentDrop: "",
        currentDrop2: "",
        sections: [],
        emptyCellStyle: {},
        filledCellStyle: "rgb(255,27,11,0.5)",
        firstComment: "",
        secondComment: ""

    }
    this.getMapLocations = this.getMapLocations.bind(this);
    this.activateDropGenerator = this.activateDropGenerator.bind(this);
    this.addSection = this.addSection.bind(this);
    this.clearSections = this.clearSections.bind(this);
    
    }





    getMapLocations(){

        var dropLocations = ""
    if(this.state.map === "Erangel"){
         dropLocations = {
            "One": ["Zharki", "Georgopol"],
            "Two": ["Severny", "Shooting Range", "Yasnaya Compound", "West Yasnaya Polyana"],
            "Three": ["NE Small Compounds", "East Yasnaya Polyana", "Stalber", "Kameshki", "Spawn Island"],
            "Four" : ["Hospital", "Georgopol (SW)", "Georgopol (Shipping Crates)", "Gatka", "Gatka Radio Tower", "SW Small Compounds"],
            "Five" : ["Pochinki", "School", "Rozhok", "School Apartments", "Water Town", "Ruins", "Center Small Compounds"],
            "Six" : ["Mylta", "Logging Camp", "Mylta Power", "Lipovka", "Prison", "Mansion", 
            "Farm", "Shelter", "SE Small Compounds"],
            "Seven" : ["Primorsk", "Ferry Pier"],
            "Eight" : ["Military Base", "Southern Island Small Compounds"],
            "Nine" : ["Southern Island Radio Tower", "Novorepnoye" ]
        }
    } else if (this.state.map === "Miramar"){
         dropLocations = {
            "One" : ["Alcantara", "Ruins", "El Pozo (West Side)", "La Cobreria"],
            "Two" : ["Oasis", "North Small Compounds", "Water Treatment", "Cruz Del Valle (Town)", "Torre Ahumada (West)" ],
            "Three" : ["Torre Ahumada (East Side)", "Cruz Del Valle (Church)", "El Azahar", "Tierra Bronca", "Campo Militar"],
            "Four": ["El Pozo (East Side)", "Monte Nuevo", "Far West Unnamed Compounds", "Ladrillera", "Chumacera (West Side)" ],
            "Five" : [ "Chumacera (East Side)", "Pecado", "San Martin", "Hacienda Del Patron", "Power Grid", "Graveyard", "La Bendita",  "Minas Generales", "Los Leones (North Side)" ],
            "Six" : [ "Impala (City)", "Impala (Mines)", "Junkyard", "Northern Eastern Island", "East Small Compounds" ],
            "Seven" : ["Valle Del Mar", "Minas Del Sur", "Prison", "Los Higos", "Chumacera (South)" ],
            "Eight": ["Mine South of Los Leones", "Los Leones (South Side)", "Water Treatment Plant (Los Leones)", "Southern Small Compounds" ],
            "Nine" : ["Puerto Paraiso", "Eastern Southern Island"]
        }
    }
        var locationsArray = [];
        for(var locations in dropLocations){
            for(let i = 0; i < this.state.sections.length; i++){
                if(this.state.sections[i] === locations){
                    for(let j = 0; j < dropLocations[locations].length; j++){
                        locationsArray.push(dropLocations[locations][j])
                    }
                    
                }
            }
            this.setState({
                dropLocations: locationsArray
            }, this.activateDropGenerator)
        }
    }


    activateDropGenerator(){

        var arrayLength = this.state.dropLocations.length
        var randomDrop = Math.floor(Math.random() * arrayLength)
        var randomDrop2 = Math.floor(Math.random() * arrayLength)
        while(randomDrop === randomDrop2){
            randomDrop2 = Math.floor(Math.random() * arrayLength);
        }
        var currentDrop = this.state.dropLocations[randomDrop]
        var currentDrop2 = this.state.dropLocations[randomDrop2]
        //Probably should look more professional than snarky...
        // const firstCommentPrefaceArray = [`Looks like you're going ${currentDrop} today!`, `Go ahead and drop at ${currentDrop}!` , `Looks like a ${currentDrop} drop!`, `Go drop ${currentDrop}, I'm sure it'll be fine!`]
        // const secondCommentPrefaceArray = [`Or, if you would rather, drop at ${currentDrop2}!`, `You could also try ${currentDrop2} and no one would judge...`, `Maybe ${currentDrop2} would be a better choice?`]
        // const randomFirstComment = firstCommentPrefaceArray[Math.floor(Math.random() * firstCommentPrefaceArray.length)];
        // const randomSecondComment = secondCommentPrefaceArray[Math.floor(Math.random() * secondCommentPrefaceArray.length)];

        this.setState({
            currentDrop: currentDrop,
            currentDrop2: currentDrop2,
            // firstComment: randomFirstComment,
            // secondComment: randomSecondComment
        })
    }
    addSection(direction){
        var sections = this.state.sections;
        if(!this.state.sections.includes(direction)){
            this[direction].style.backgroundColor = this.state.filledCellStyle;
            sections.push(direction);
        } else {
            sections.splice(sections.indexOf(direction), 1)
            this[direction].style = this.state.emptyCellStyle
        }
        this.setState({
            sections: sections,
        })
    }

    clearSections(){
        var sections = this.state.sections;
        for(let i = 0; i < sections.length; i++){
            this[sections[i]].style.backgroundColor = "";
        }
        this.setState({
            sections: []
        })
    }

    render(){
        const currentMap = 'map' + (this.state.map === "Erangel" ? ' Erangel' : ' Miramar')
        return(
            <div className="mainDropGeneratorDiv">
                <DropDownMenu 
                    value={this.state.map} 
                    style={menuStyles}
                    onChange = {(event, index, value) => this.setState({map: value})} >
                    <MenuItem value="Erangel"  primaryText="Erangel" />
                    <MenuItem value="Miramar"  primaryText="Miramar" />
                </DropDownMenu>
                <div className="dropGeneratorTopButtonsDiv">
                    <DropGeneratorHowToUse />
                    <RaisedButton className={'startButton'} label="Clear" onClick={this.clearSections} />

                </div>

                        {/* <DropDownMenu 
                            value={this.state.team} 
                            onChange = {(event, index, value) => this.setState({team: value})}>
                        <MenuItem value="solo" primaryText="Solo" />
                        <MenuItem value="duo" primaryText="Duo" />
                        <MenuItem value="trio" primaryText="3 Man Squad" />
                        <MenuItem value="squad" primaryText="Squad" />
                        </DropDownMenu> */}

                <div className="mapHolderDiv" >
                    <div className={currentMap} > 
                        <div className = "cell"                    
                            style = {this.state.emptyCellStyle} 
                            ref={ref => this.One = ref} 
                            onClick={()=> this.addSection('One')} >
                        </div>

                        <div className = "cell" 
                            style = {this.state.emptyCellStyle}
                            ref={ref => this.Two = ref}
                            onClick={()=> this.addSection('Two')}>
                        </div>

                        <div className = "cell" 
                            style = {this.state.emptyCellStyle} 
                            ref={ref => this.Three = ref} 
                            onClick={()=> this.addSection('Three')}> 
                        </div>
                        <div className = "cell" 
                            style = {this.state.emptyCellStyle} 
                            ref={ref => this.Four = ref} 
                            onClick={()=> this.addSection('Four')}> 
                        </div>

                        <div className = "cell" 
                        style = {this.state.emptyCellStyle} 
                        ref={ref => this.Five = ref} 
                        onClick={()=> this.addSection('Five')}>
                        </div>

                        <div className = "cell" 
                        style = {this.state.emptyCellStyle} 
                        ref={ref => this.Six = ref} 
                        onClick={()=> this.addSection('Six')}> 
                        </div>

                        <div className = "cell" 
                        style = {this.state.emptyCellStyle} 
                        ref={ref => this.Seven = ref} 
                        onClick={()=> this.addSection('Seven')}>
                        </div>

                        <div className = "cell" 
                        style = {this.state.emptyCellStyle} 
                        ref={ref => this.Eight = ref} 
                        onClick={()=> this.addSection('Eight')}> 
                        </div>

                        <div className = "cell" 
                        style = {this.state.emptyCellStyle} 
                        ref={ref => this.Nine = ref} 
                        onClick={()=> this.addSection('Nine')}> 
                        </div>
                    </div>

                </div>
                    <DropGeneratorComponent 
                        sections={this.state.sections} 
                        getMapLocations={this.getMapLocations} 
                        currentDrop={this.state.currentDrop} 
                        currentDrop2={this.state.currentDrop2} />

            </div>
        )
    }
}

export default DropGenerator;