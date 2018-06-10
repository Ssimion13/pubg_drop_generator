import React, {Component} from "react";
import AKMImage from "../AKM.jpg"
import M416Image from "../M416.jpg"
import { Link } from "react-router-dom"

class Weapons extends Component{
    constructor(){
        super();
        this.state = {
            weapons: ["AKM", "M416"],
            weaponImages: [AKMImage, M416Image],
        }
    }


    render(){
        const weaponsMap = this.state.weapons.map((weapon, i) => {
            return (
                <Link to={`/${weapon}`}> 
                <div className="weaponLink">
                    <img className="weaponImage" src={this.state.weaponImages[i]} />
                    
                    
                </div>
                </Link>
            )
        })
        return(
            <div>
                {weaponsMap}
            </div>
        )
    }
}

export default Weapons;