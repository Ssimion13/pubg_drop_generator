import React, {Component} from "react";
import AKMImage from "../AKM.jpg"
import M416Image from "../M416.jpg"
import SCARLImage from "../SCARL.jpg"
import { Link, Route, Switch } from "react-router-dom"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AKM from "./AKM"
import M416 from "./M416"
import SCARL from "./SCARL"


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

class Weapons extends Component{
    constructor(){
        super();
        this.state = {
            weapons: ["AKM", "M416", "SCARL"],
            weaponImages: [AKMImage, M416Image, SCARLImage],
            armor: 1,
            helmet: 1,
            hitbox: 1,
        }
    }


    
    render(){
        const AKMPage = (props) => {
            return (
                <AKM 
                    armor = {this.state.armor}
                    helmet={this.state.helmet}
                    hitbox={this.state.hitbox}
                />
            )
        }
        const M416Page = (props) => {
            return (
                <M416 
                    armor = {this.state.armor}
                    helmet={this.state.helmet}
                    hitbox={this.state.hitbox}
                />
            )
        }
        const SCARLPage = (props) => {
            return (
                <SCARL 
                    armor = {this.state.armor}
                    helmet={this.state.helmet}
                    hitbox={this.state.hitbox}
                />
            )
        }

        const weaponsMap = this.state.weapons.map((weapon, i) => {
            console.log(this.state.weaponImages[0]);
            var weaponStyles = {
                background: `url(${this.state.weaponImages[i]})`,
                width: "auto",
                height: "150px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
            }
            return (
                <Link className="ballers" key={weapon+i} to={`/Weapons/${weapon}`}> 
                <div className="smallWeaponLinks" style={weaponStyles}>
                </div>
                </Link>
            )
        })
        return(
            <div>
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
                    fuck
                <div className="weaponLinksDiv">
                    {weaponsMap}
                </div>
                <Switch>
                    <Route path='/Weapons/AKM' component={AKMPage} />
                    <Route path='/Weapons/M416' component={M416Page} />
                    <Route path='/Weapons/SCARL' component={SCARLPage} />
                </Switch>

            </div>
        )
    }
}

export default Weapons;