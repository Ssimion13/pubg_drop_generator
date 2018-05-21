import React, { Component } from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import DropGeneratorComponent from "./DropGeneratorComponent";


class DropGenerator extends Component{
    constructor(){
    super();
    this.state = {
        map: "Erangel",
        team: "solo",
        dropLocations: "",
        currentDrop: "",
        sections: "",
        emptyCellStyle: {},
        filledCellStyle: "rgb(255,27,11,0.5)"

    }
    this.getMapLocations = this.getMapLocations.bind(this);
    this.activateDropGenerator = this.activateDropGenerator.bind(this);
    this.addSection = this.addSection.bind(this);
    }





    getMapLocations(){

    if(this.state.map === "Erangel"){
        this.setState({
            dropLocations: ["Severny", "Pochinki", "Military Base", "Ferry Pier", "Mylta", 
                                "Lipovka", "Gatka", "Georgopol (North)", "Georgopol(South)", 
                                "Stalber", "Power Plant", "Power Plant Annex", "Shooting Range", 
                                "Zharki", "Hospital", "School", "Rozhok", "Yasnaya Polyana",
                                "Prison", "Mansion", "Kameshki", "Novorepnoye", "Primorsk", 
                                "Quarry", "Farm", "Ruins", "Water Town", "Shelter", 
                                "Northwest Small Areas", "North Small Areas", "Northeast Small Areas", "East Small Areas",
                                "Southeast Small Areas", "South Small Areas", "Southwest Small Areas" 
            ]
        }, this.activateDropGenerator)

    } else if (this.state.map === "Miramar"){
        this.setState({
            dropLocations: ["El Pozo", "La Cobreria", "Ladrillera", "Monte Nuevo",
                                "Pecado", "Oasis", "Alcantara", "Trailer Park", "Crater Fields", 
                                "Water Treatment", "Cruz Del Valle", "Tierra Bronca", "Campo Militar",
                                "Torre Ahumada", "El Azahar", "Junkyard", "Graveyard", "San Martin", 
                                "Hacienda del Patron", "Minas Generales", "La Bendita", "Puerto Paradiso", 
                                "Los Hijos", "Valle Del Mar", "Prison", "Chumacera", "Los Leones", 
                                "Power Grid", "Impala", "Eastern Islands", "Ruins", 
                                "Northwest Small Areas", "North Small Areas", "Northeast Small Areas", "East Small Areas",
                                "Southeast Small Areas", "South Small Areas", "Southwest Small Areas" ]
        }, this.activateDropGenerator)
    }
    }
    activateDropGenerator(){

        var arrayLength = this.state.dropLocations.length
        var randomDrop = Math.floor(Math.random() * arrayLength)
        var currentDrop = this.state.dropLocations[randomDrop]

        this.setState({
            currentDrop: currentDrop
        })
    }
    addSection(direction){
        var sections = this.state.sections;
        if(!this.state.sections.includes(direction)){
            this[direction].style.backgroundColor = this.state.filledCellStyle;
            sections += direction;
        } else {
            sections = sections.replace(direction, "")
            this[direction].style = this.state.emptyCellStyle
        }
        this.setState({
            sections: sections,
        })
    }


    render(){
        return(
            <div>
                    <DropDownMenu 
                      value={this.state.map} 
                      onChange = {(event, index, value) => this.setState({map: value})} >
                        <MenuItem value="Erangel" primaryText="Erangel" />
                        <MenuItem value="Miramar" primaryText="Miramar" />

                    </DropDownMenu>

                    <DropDownMenu 
                        value={this.state.team} 
                        onChange = {(event, index, value) => this.setState({team: value})} >
                    <MenuItem value="solo" primaryText="Solo" />
                    <MenuItem value="duo" primaryText="Duo" />
                    <MenuItem value="squad" primaryText="Squad" />
                    </DropDownMenu>

                <DropGeneratorComponent 
                    map={this.state.map} 
                    team = {this.state.team} 
                    planeDirection = {this.state.planeDirection} 
                />

            <div>
                <RaisedButton onClick={ this.getMapLocations} > Go! </RaisedButton>
            {this.state.currentDrop}
            </div>

            <div className = "map"> 
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
        )
    }
}

export default DropGenerator;