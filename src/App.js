import React, { Component } from 'react';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart'
import {fetchData} from './components/api'
import CoronaImage from './images/image.png'
import styles from './App.module.css'

class App extends Component {

  state ={
    data:{},
    country: "",
  }

  async componentDidMount(){
    const callData = await fetchData();
    this.setState({data:callData});
  }

  handleChangeCountry = async (country) =>{
    const callData = await fetchData(country);
    this.setState({data:callData, country:{country}})
    
  }

  render() {

    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <h3>Note: Because of collecting data from world wide this app data update may take some time.</h3>
        <img className={styles.image} src={CoronaImage} alt=""/>
        <Cards data={data}></Cards>
        <CountryPicker handleChangeCountry={this.handleChangeCountry}></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;