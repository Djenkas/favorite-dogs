import React, { Component } from 'react';
import { Header } from './components/Header'
import { Favorites } from './components/Favorites'
import { Dogs } from './components/Dogs'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

class App extends Component {

  state = {
    dogs: [],
    changeState: {}
  }

  setDogs = () => {
    // const navigate = useNavigate()
    // navigate('/');
    this.setState({changeState : 1})
    console.log ("Clik")
  }

  addToFav = (e) => {
    // console.log ("APP MAIN" , e);
    let dogs = this.state.dogs;
    dogs.push(e)
    this.setState({dogs:dogs});
    console.log(this.state.dogs);
  }


  // componentDidMount() {
  //   let dogsArray = [];
  //   this.setState({dogs:dogsArray})
  // }

  render() {
    return (
      <div className="App">
        <Router>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/favorites">Favorites</Link> </li>
            </ul>
          </div>
            <Routes>
              <Route path="/" element={<Dogs addToFav = {this.addToFav} setDogs = {this.setDogs}/>}/>
              <Route path="/favorites" element={<Favorites favDogs={this.state.dogs}/>}/>
            </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
