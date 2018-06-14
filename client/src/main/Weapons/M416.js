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
                <div className="weaponOverview">
                    <p> The M416, even with the general AR nerfs is probably still the all around best gun in the game. </p>
                    <p> The M416 boasts the highest DPS of all ARs (bar the m16 with burst, but the general inaccuracy of
                         burst offsets the DPS greatly in any situation past a few meters)
                        and, when fully kitted, is one of the most versatile and easy guns to use in the game. </p>
                    <p> Hitting with the same damage output of other 5.56 ARs at 43, the gun can be used effectively in any 
                        situation barring extreme long range. 
                        At close range, its DPS exceeds all but the Vector and Micro Uzi, allowing it to be a competitive weapon
                         even against dedicated CQB weapons. 
                        Even at long range, the M416's muzzle velocity is very high allowing for more accurate shooting; 
                        combined with its low recoil, it can be used as a plinking gun, especially
                        for those who are unfamiliar with the bullet patterns of 7.62. The mini-14 is preferable to this role due to its higher M/V and damage, but the M416 can imitate it just fine.
                        </p>
                    <p> Overall, the M416 still remains a superior weapon choice and a competitive pick for any range relative to its competition. 
                        Finding all of its component parts turns it into a monster of a gun,
                        but even without all of its mods, it wouldn't be entirely wrong to say 
                        the M416 is the best non-crate weapon in the game. </p>         
                </div>
            </div>
        )
    }

export default M416