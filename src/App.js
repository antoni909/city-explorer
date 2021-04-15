import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header.js';
import Form from './Form';
import City from './City';
import Err from './Err';
import Weather from './Weather';
import Footer from './Footer.js';
import './App.css';
import axios from 'axios';

// TODOS:
//instead of using event/ find new way to get value from search field
//use state.display to activate axios weather call
// weather is an array of day objects

class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      citySearchTextField: '',
      display: false,
      displayCityName: '',
      displayLat: '',
      displayLon: '',
      displayError: false,
      errMessage: '',
      err: '',
      serverErr: '',
      weatherData: [],
    };
  }

  searchTextFieldValue= (event) => {
    event.preventDefault();
    if(event.target.value){
      this.setState({
        citySearchTextField: event.target.value
      });
    }else this.setState({
      citySearchTextField: '',
      displayCityName: '',
      display: false,
    });
  }

  searchSubmitHandler = async (event) => {
    event.preventDefault();
    try{
      let dataLIQ = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY}&q=${this.state.citySearchTextField}&format=json`);

      // let weather = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`, { params: { lat: data.lat, lon: data.lon } } );

      this.setState({
        display: true,
        displayCityName: dataLIQ.data[0].display_name,
        displayLat: dataLIQ.data[0].lat,
        displayLon: dataLIQ.data[0].lon,
        // weatherData will be controlled by live weather instead not static file
      });

      // pass arguments to weather and movie api here
      // example: getWeather( argument ) where weather array is the arg for some (param)
      console.log('arg passed: ',dataLIQ.data[0]);
      this.getLiveWeather( dataLIQ.data[0] );
      // array of objects (10 cities)
      // pass to backend request to get ask for lat/lon params
      // something like: { parmas: { lat: data.lat, lon: data.lon } }

    }catch(err){
      this.setState({
        displayError: true,
        errMessage: err.message,
        err: err.response.data.error,
        // serverErr: err.message,
      });
    }
  }

  getLiveWeather = async(data) => {
    // console.log(data, data.lon, data.lat);
    // argument value passed to data is an object containing lat and lon properties
    // request to backend where response will give a 10 day forecast (weather.data) and weather is the response object with heroku url
    // console.log('weather: ' ,weather);
    // console.log('weather.data: ', weather.data);
    // the endpoint /weather must match backend
    try{
      console.log(data.lat, data.lon);
      let weather = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/weather`, {
          params: {
            lat: data.lat,
            lon: data.lon,
          }});

      this.setState({
        display: true,
        weatherData: weather.data,
      });
    }catch(err){
      console.error();
      this.setState( {
        displayError: true,
        serverErr: err.message,
      } );
    }
  }

  render(){
    return(
      <Container fluid>
        <Row >
          <Col>
            <Header />
            <br/>
            <Form
              onInput={this.searchTextFieldValue}
              onSubmit={this.searchSubmitHandler}
            />
            <br/>
            <Err
              displayError={this.state.displayError}
              errMessage={this.state.errMessage}
              err={this.state.err}
              serverErr={this.state.serverErr}
            />
            <City
              display={this.state.display}
              displayCityName={this.state.displayCityName}
              displayLat={this.state.displayLat}
              displayLon={this.state.displayLon}
            />
            <Weather
              display={this.state.display}
              weather={this.state.weatherData}
            />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
