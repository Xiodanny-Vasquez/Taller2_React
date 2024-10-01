import React from "react";
import Styles from "./UserCard.module.css"

const UserCard = () => {
    return (
        <div className= {Styles.container}>
            <div className= {Styles.card}>
                <img 
                src= "http://via.placerholder.com/100" 
                alt = "profile" 
                className={Styles.profileImage} 
                />
                <h2 className={Styles.userName}>xiodanny Vasquez</h2>
                <p className={Styles.userRole}>Fullstack Developer</p>
            </div>
        </div>
    );
};
export default UserCard;