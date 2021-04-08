import React from 'react';
import Header from './Header.js';
import Form from './Form';
import City from './City';
import Footer from './Footer.js';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  // NOTES:
  // process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY to use locationIQ Key in URL
  // searchTextFieldValue: changed from function declaration to arow function and stopped getting "Cannot read property 'setState' of undefined" - i beliieve it has to do with "this" context but why is it different with arrow function?

  // TODOS:
  // Create a helper function that gets URL for respective city instead of doing this in the City component

  constructor(props){
    super(props);
    this.state = {
      citySearchTextField: ' pick a city...',
      display: false,
      displayCityName: '',
      displayLat: '',
      displayLon: '',
      displayMapSrc: '',
    };
  }

  // TextField
  searchTextFieldValue= (event) => {
    event.preventDefault();
    if(event.target.value){
      this.setState({
        citySearchTextField: event.target.value
      });
    }else this.setState({
      citySearchTextField: 'pick a city...',
      displayCityName: '',
      display: false,
      mapSource: '',
    });
  }

  // Submit Button
  // GET locaiton IQ
  // Promise returns dataLIQ - location iq data for city searched
  // GET MAP URL:
  searchSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('submit button is active');

    let dataLIQ = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY}&q=${this.state.citySearchTextField}&format=json`);
    console.log(dataLIQ);

    return this.setState({
      display: true,
      displayCityName: dataLIQ.data[0].display_name,
      displayLat: dataLIQ.data[0].lat,
      displayLon: dataLIQ.data[0].lon,
    });
  }

  render(){
    // console.log('map', this.state.mapSource );
    return(
      <>
        <Header />
        <Form
          onInput={this.searchTextFieldValue}
          onSubmit={this.searchSubmitHandler}
        />
        <h2>
          Your City:
          {this.state.citySearchTextField}
        </h2>
        <City
          display={this.state.display}
          displayCityName={this.state.displayCityName}
          displayLat={this.state.displayLat}
          displayLon={this.state.displayLon}
          // mapSource={this.state.mapSource}
        />
        <Footer />
      </>
    );
  }
}

export default App;
