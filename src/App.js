import React, {Component} from "react";
import ChuckSays from "./components/ChuckSays.jsx"
import './App.css';



class App extends Component {
  //loading data into state
  state = {
    userData: [],
    
  };
  
//Helper function to fetch data from API
loadData = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  return data;
};
 handleClick = async () => {
  const userData = await this.loadData();
  this.setState({
    userData: userData
  });
}
//Built is React method that acts like DOM content loaded event listener, it is listening for this PIECE of the dom is loaded (lifecycle method)
  async componentDidMount(){
    console.log("The component mounted");
    const userData = await this.loadData();
    
    
    this.setState({
      userData: userData
    });

  }



  render(){
  
    const {userData} = this.state;
    return (
      <div className="App">
        <header className="App-header">
         <h1>Chuck Says</h1>
        </header>
        <button onClick={this.handleClick}>Load New Quote</button>
       <ChuckSays userData={userData}/>
      </div>
      //^ passing data from parent to child as a prop
    );
  }
 
}

export default App;


