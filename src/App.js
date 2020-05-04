import React, { Component } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart'
import {fetchData} from './components/api'
import './App.css'

class App extends Component {
  async componentDidMount(){
    const fetchData = await fetchData();
    console.log(fetchData)
  }

  render() {
    return (
      <div>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;