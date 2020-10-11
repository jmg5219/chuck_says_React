import React, { Component } from "react";
import ChuckSays from "./components/ChuckSays.jsx"
import './App.css';
import { Container, Button } from 'bloomer';

import 'bulma/css/bulma.css'



class App extends Component {
  //loading data into state
  state = {
    userData: [],
    categories: [],

  };

  //Helper function to fetch data from API
  loadData = async (category) => {
    //Modified the helper function to take an argument corresponding to a category to search within the API
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const data = await response.json();
    return data;
  };

  //Obtaining API categories
  getCategories = async () => {
    //Modified the helper function to take an argument corresponding to a category to search within the API
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await response.json();
    return data;
  };
  // this defines what happens on button click, in our case we are using it to search the API
  handleClick = async () => {
    const searchCategory = document.querySelector("#selectBox");
    //onclick we want to fetch data through loadData function, we are passing the value from the dropdown select box
    const userData = await this.loadData(searchCategory.value);
    //Assigning the API response to State
    this.setState({
      userData: userData
    });
  }
  //Built in React method that acts like DOM content loaded event listener, it is listening for this PIECE of the dom is loaded (lifecycle method)
  async componentDidMount() {
    console.log("The component mounted");
    //On page load, this will present data from the initial API fetch

    const categories = await this.getCategories();
    //initially it will load in 'dev' cateogry
    const userData = await this.loadData('dev');

    //We are also setting the State on Page load
    this.setState({
      userData: userData,
      categories: categories,

    });

  }



  render() {
    const { userData, categories } = this.state;
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1 className="title">Chuck Says</h1>
          </header>
          
          <ChuckSays userData={userData} categories={categories} />
          <Button className="myButton" onClick={this.handleClick}>Load New</Button>
        </Container>

      </div>
      //^ passing data from parent to child as a prop
    );
  }

}

export default App;


