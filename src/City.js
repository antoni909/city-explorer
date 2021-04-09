import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


class City extends React.Component{
  render(){
    // console.log(this.props);
    // TODO:
    // display JUMBOTRON only after search is submitted
    return(
      <>
        {this.props.display?
          <Jumbotron fluid>
            <Container >
              <h1>{this.props.displayCityName}</h1>
              <br/>
              <Image
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY}&center=${this.props.displayLat},${this.props.displayLon}&zoom=12`}
                alt={this.props.displayCityName}
                rounded
              />
              <p>
                Lattitude: {this.props.displayLat} Longitude: {this.props.displayLon}
              </p>
            </Container>
          </Jumbotron> : ''}
      </>
    );
  }

}

export default City;
