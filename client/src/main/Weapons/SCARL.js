import React from "react"
import SCARLImage from "../SCARL.jpg"




function SCARL (props) {
        return (
            <div className="weaponMainDiv">
                <div className="weaponLink">
                    <img alt="SCARLPicture" src={SCARLImage} />
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
                <div className="weaponOverview">
                    Insert Scar Stuff here
                </div>
            </div>
        )
    }

export default SCARL