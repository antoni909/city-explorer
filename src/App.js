import React from 'react';
import City from './City';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Err from './Err';
import Footer from './Footer.js';
import Form from './Form';
import Header from './Header.js';
import Movies from './Movies.js';
import Row from 'react-bootstrap/Row';
import Weather from './Weather';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      citySearchTextField: '',
      display: false,
      displayCityName: '',
      displayLat: '',
      displayLon: '',
      displayMovies: false,
      displayError: false,
      errMessage: '',
      err: '',
      movieData: [],
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

      this.setState({
        display: true,
        displayCityName: dataLIQ.data[0].display_name,
        displayLat: dataLIQ.data[0].lat,
        displayLon: dataLIQ.data[0].lon,
      });
      this.getLiveWeather( dataLIQ.data[0] );
      this.getLiveMovies(this.state.citySearchTextField);

    }catch(err){
      this.setState({
        displayError: true,
        errMessage: err.message,
        err: err.response.data.error,
        serverErr: err.message,
      });
    }
  }

  getLiveMovies = async(city) => {
    console.log('arg passed to param data : ', city);
    try{
      let movies = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/movies`, {
          params: {
            citySearchTextField : city,
          }
        });
      this.setState({
        displayMovies: true,
        movieData: movies,
      });
    }catch(err){
      this.setState( {
        displayError: true,
        serverErr: err.message,
      } );
    }

  }

  getLiveWeather = async(data) => {

    try{
      let weather = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/weather`, {
          params: {
            lat: data.lat,
            lon: data.lon,
          }
        });
      this.setState({
        display: true,
        weatherData: weather.data,
      });
    }catch(err){
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
            <Movies
              display={this.state.displayMovies}
              movieData={this.state.movieData}/>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }

}

export default App;
