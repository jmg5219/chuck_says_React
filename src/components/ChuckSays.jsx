import React from "react";
import { Box, Dropdown, DropdownTrigger, Icon, DropdownMenu, DropdownContent, DropdownItem, DropdownDivider, Container, Hero, HeroBody, Title, Button } from 'bloomer';
import 'bulma/css/bulma.css'
import "./chuckSays.css";



//refactored as a function
function ChuckSays(props) {
    //passing data to the component via props
    const { userData } = props;
    const { categories } = props;

    //accessing the props
    return (
        <div className="container">
            <Hero>
                <HeroBody className="hero">
                    <Container hasTextAlign='centered'>
                        <Title className="hero-title"></Title>
                    </Container>
                </HeroBody>
            </Hero>
            <Box className="content-box">{userData.value}</Box>
            {/* Creating a dropdown list and assigning value */}

            <select className="select-box" id="selectBox">
                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>


        </div>


    );

}

export default ChuckSays