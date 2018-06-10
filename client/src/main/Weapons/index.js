import React, {Component} from "react";
import AKM from "../AKM.jpg"
import M416 from "../M416.jpg"


class Weapons extends Component{
    constructor(){
        super();
        this.state = {
            weapons: ["AKM", "M416"],
            weaponImages: [AKM, M416]
        }
    }


    render(){
        const weaponsMap = this.state.weapons.map((weapon, i) => {
            return (
                <div className="weaponLink">
                    <img className="weaponImage" src={this.state.weaponImages[i]} />
                    {weapon}
                </div>
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