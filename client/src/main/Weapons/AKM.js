import React, {Component} from "react"
import DropDownMenu from 'material-ui/DropDownMenu';
import AKMImage from "../AKM.jpg"
import MenuItem from 'material-ui/MenuItem';


const styles = {
    customWidth: {
      width: "33%",
      height: 50,
      fontSize: 12,
    },
};

const menuStyles = {
    backgroundColor: "whitesmoke",
    borderRadius: "10px"
}

class AKM extends Component{
    constructor(){
        super();
        this.state = {
            armor: 1,
            helmet: 1,
            hitbox: 1,
        }
    }

    calculateHitsToKill(damage){
        var hp = 100;
        var hits = 0;
        while(hp > 0){

        }
    }


    render(){
        return (
            <div className="weaponMainDiv">
            
                <div className="weaponLink">
                    <img src={AKMImage} />
                </div>
                <div className="weaponStatistics">
                    <div className="flexEvenContainer">
                        <DropDownMenu 
                            value={this.state.helmet} 
                            style={styles.customWidth}
                            labelStyle={menuStyles}
                            onChange = {(event, index, value) => this.setState({helmet: value})} >
                                <MenuItem value={1} primaryText="No Helmet" />
                                <MenuItem value={.7} primaryText="Level 1 (Motorcycle Helmet)" />
                                <MenuItem value={.6} primaryText="Level 2 (Military Helmet)" />
                                <MenuItem value={.45} primaryText="Level 3 (Spetznaz Helmet)" />
                            </DropDownMenu>
                        <DropDownMenu 
                            value={this.state.armor} 
                            style={styles.customWidth}
                            labelStyle={menuStyles}
                            onChange = {(event, index, value) => this.setState({armor: value})} >
                                <MenuItem value={1} primaryText="No Armor" />
                                <MenuItem value={.7} primaryText="Level 1 (Police Vest, Grey)" />
                                <MenuItem value={.6} primaryText="Level 2 (Police Vest, Black)" />
                                <MenuItem value={.45} primaryText="Level 3 (Military Vest)" />
                        </DropDownMenu>
                        <DropDownMenu 
                            value={this.state.hitbox} 
                            style={styles.customWidth}
                            labelStyle={menuStyles}
                            onChange = {(event, index, value) => this.setState({hitbox: value})} >
                                <MenuItem value={2.35} primaryText="Head" />
                                <MenuItem value={1.75} primaryText="Neck" />
                                <MenuItem value={1.1} primaryText="Upper Chest" />
                                <MenuItem value={.95} primaryText="Abdomen" />
                                <MenuItem value={1} primaryText="Center Chest/Clavicles/Lower Waist" />
                                <MenuItem value={.6} primaryText="Upper Legs/Arms/Shoulder" />
                                <MenuItem value={.5} primaryText="Lower Legs/Arms" />
                                <MenuItem value={.3} primaryText="Feet/Hands" />
                        </DropDownMenu>
                    </div>
                    <h2 className="centeredTitle" > Weapon Statistics: </h2>
                    <p> Base Weapon Damage: 47 </p>
                    { this.state.hitbox !== 2.35 && this.state.hitbox !== 1.75 ? 
                        this.state.armor !== 1 ? 
                            <p> Damage against current armor: {Math.round((47 * this.state.armor * this.state.hitbox) * 100) / 100} </p>  :  
                            <p> Damage against no armor: {Math.round((47 * this.state.hitbox * 100) / 100)} </p>
                        : this.state.helmet !== 1 ?
                            <p> Damage against current helmet: {Math.round((47 * this.state.armor * this.state.hitbox) * 100) / 100} </p> :
                            <p> Damage against no helmet: {Math.round((47 * this.state.hitbox * 100) / 100)} </p>
                    }
                </div>
            </div>
        )
    }
}

export default AKM