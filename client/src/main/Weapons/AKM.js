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
                <div className="weaponOverview">
                    <p>The AKM provides a stronger but less stable assault rifle relative to its 5.56 brethren.
                    Its kick and recoil (as of patch 12) are still higher than its competition, but its hard hitting nature allows it
                    to be an effective close range to mid range option.</p>
                    <p> Due to its 7.62 round, it struggles at longer ranges, where the damage falloff of assault rifles combined with the slower
                        round mean that it is inferior in precision to other assault rifles and can't match the damage output or damage multipliers that 
                        the 7.62 DMRs and sniper rifles do. </p>
                    <p> That isn't to say that the AK cannot be used at these ranges; it is still easy to compensate for up to 300 meters or so
                        and its larger magazine capacity can be leveraged to be a great makeshift DMR with practice.</p>
                    <p> The gun's high damage and rate of fire mean that it can be used almost like an SMG in many respects. </p> 
                    <p> If using the weapon without an iron sight, it may just be better to just aim (right click only) instead of ADSing, especially at closer ranges. 
                        The additional accuracy of the gun in ADS will be quickly offset by the jerking of the gun which makes accurate shooting past single a bit of a crapshoot. </p>
                    <p> If you're looking for an AR with a bit more oomph that can be used in almost all situations and you aren't afraid to handle the additional recoil, the AKM is a solid pick thoughout the game. 
                    </p>
                </div>
            </div>
        )
    }

export default AKM