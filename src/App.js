import React, { Component } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart'
import {fetchData} from './components/api'
import './App.css'

class App extends Component {

  state ={
    data:{},
  }

  async componentDidMount(){
    const callData = await fetchData();
    this.setState({data:callData});
  }

  render() {

    const {data} = this.state;
    return (
      <div>
        <Cards data={data}></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;