import React from "react"
import AKMImage from "../AKM.jpg"




function AKM (props) {
        return (
            <div className="weaponMainDiv">
                <div className="weaponLink">
                    <img alt="AKPicture" src={AKMImage} />
                </div>
                <div className="weaponStatistics">

                    <h2 className="centeredTitle" > Weapon Statistics: </h2>
                    <p> Base Weapon Damage: 47 </p>
                    { props.hitbox !== 2.35 && props.hitbox !== 1.75 ? 
                        props.armor !== 1 ? 
                            <p> Damage against current armor: {Math.round((47 * props.armor * props.hitbox) * 100) / 100} </p>  :  
                            <p> Damage against no armor: {Math.round((47 * props.hitbox * 100) / 100)} </p>
                        : props.helmet !== 1 ?
                            <p> Damage against current helmet: {Math.round((47 * props.armor * props.hitbox) * 100) / 100} </p> :
                            <p> Damage against no helmet: {Math.round((47 * props.hitbox * 100) / 100)} </p>
                    }
                </div>
            </div>
        )
    }

export default AKM