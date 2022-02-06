import React, { Component } from 'react';
import { Header } from './components/Header'
import { Favorites } from './components/Favorites'
import { Dogs } from './components/Dogs'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {getImage} from './services/ImageService';
import DisplayDog from './components/DisplayDog';

class App extends Component {

  state = {
    dogs: [],
    dogList: [{addToFav :this.addToFav, dogObj:{url:''}},
            {addToFav :this.addToFav, dogObj:{url:''}},
            {addToFav :this.addToFav, dogObj:{url:''}},
            {addToFav :this.addToFav, dogObj:{url:''}},
            {addToFav :this.addToFav, dogObj:{url:''}},
            {addToFav :this.addToFav, dogObj:{url:''}}]
  }

  getimages = () => {
    getImage().then(res => {console.log(res)
      let dogs= []
      for (var i = 0 ; i<6 ; i++){
          dogs.push({addToFav :this.addToFav, dogObj :res[i].url})
      };
      this.setState({dogList:dogs});
  })}

  addToFav = (e) => {
    let dogs = this.state.dogs;
    dogs.push(e)
    this.setState({dogs:dogs});
  }

  getNewDogs = () => {
    this.getimages();
  }

  componentDidMount() {

    let images = this.getimages();
    console.log(images)
  }

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
              <Route path="/" element={<Dogs dogComponents={this.state.dogList} getNewDogs ={this.getNewDogs} addToFav = {this.addToFav} />}/>
              <Route path="/favorites" element={<Favorites favDogs={this.state.dogs}/>}/>
            </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
