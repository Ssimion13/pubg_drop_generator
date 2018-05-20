import React, { Component } from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DropGeneratorComponent from "./DropGeneratorComponent";


class DropGenerator extends Component{
    constructor(){
    super();
    this.state = {
        map: "Erangel",
        planeDirection: "NW-SE",
        team: "solo",
        dropLocations: ""
    }
    this.getMapLocations = this.getMapLocations.bind(this);
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
        })
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
        })
    }
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

                    <DropDownMenu 
                        value={this.state.planeDirection} 
                        onChange = {(event, index, value) => this.setState({perspective: value}) } >
                    <MenuItem value="N-S" primaryText="North to South / South to North" />
                    <MenuItem value="NW-SE" primaryText="Northwest to Southeast / Southeast to Northwest" />
                    <MenuItem value="W-E" primaryText="West to East / East to West" />
                    <MenuItem value="SW-NE" primaryText="Southwest to Northeast / Northeast to Southwest" />
                    </DropDownMenu>

                <DropGeneratorComponent 
                    map={this.state.map} 
                    team = {this.state.team} 
                    planeDirection = {this.state.planeDirection} 
                />

            </div>
        )
    }
}

export default DropGenerator;