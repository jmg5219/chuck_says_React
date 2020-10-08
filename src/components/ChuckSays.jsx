import React from "react";
import "./chuckSays.css";

//refactored as a function
function ChuckSays(props) {
    //passing data to the component via props
    const { userData, categories } = props;
    
    //accessing the props
    return (
        <div className = "container">
            <p>{userData.value}</p>
        </div>
        
        


    );

}

export default ChuckSays