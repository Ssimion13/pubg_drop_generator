import React from "react"
import M416Image from "../M416.jpg"




function M416 (props) {
        return (
            <div className="weaponMainDiv">
                <div className="weaponLink">
                    <img alt="M416Picture" src={M416Image} />
                </div>
                <div className="weaponStatistics">

                    <h2 className="centeredTitle" > Weapon Statistics: </h2>
                    <p> Base Weapon Damage: 43 </p>
                    { props.hitbox !== 2.35 && props.hitbox !== 1.75 ? 
                        props.armor !== 1 ? 
                            <p> Damage against current armor: {Math.round((43 * props.armor * props.hitbox) * 100) / 100} </p>  :  
                            <p> Damage against no armor: {Math.round((43 * props.hitbox * 100) / 100)} </p>
                        : props.helmet !== 1 ?
                            <p> Damage against current helmet: {Math.round((43 * props.armor * props.hitbox) * 100) / 100} </p> :
                            <p> Damage against no helmet: {Math.round((43 * props.hitbox * 100) / 100)} </p>
                    }
                </div>
            </div>
        )
    }

export default M416