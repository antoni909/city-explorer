import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
  // do i need event parameter passed in for handle functions

  // TODOS:
  // Create a helper function that gets MAP image (using URL) for respective city INSTEAD of doing this in the City component

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

  // TextField - for fun display characters being types
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
  searchSubmitHandler = async (event) => {
    event.preventDefault();

    let dataLIQ = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY}&q=${this.state.citySearchTextField}&format=json`);

    return this.setState({
      display: true,
      displayCityName: dataLIQ.data[0].display_name,
      displayLat: dataLIQ.data[0].lat,
      displayLon: dataLIQ.data[0].lon,
    });
  }

  render(){
    return(
      <Container fluid>
        <Row >
          <Col>
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
            />
            <Footer />
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
