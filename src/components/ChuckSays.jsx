import React from "react";
import "./chuckSays.css";

//refactored as a function
function ChuckSays(props) {
    //passing data to the component via props
    const { userData } = props;
    console.log(userData.value)
    //accessing the props
    return (
        <p>{userData.value}</p>
        


    );

}

export default ChuckSays