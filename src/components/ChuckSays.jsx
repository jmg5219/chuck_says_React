import React from "react";
import "./chuckSays.css";






//refactored as a function
function ChuckSays(props) {
    //passing data to the component via props
    const { userData } = props;
    const { categories } = props;

    //accessing the props
    return (
        <div className="container">

            <p>{userData.value}</p>
            {/* Creating a dropdown list and assigning value */}
            <select id="selectBox">
            {categories.map((category,index) => <option  key={index} value={category}>{category}</option>)}
            </select>

        </div>


    );

}

export default ChuckSays