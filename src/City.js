import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


class City extends React.Component{
  render(){
    // console.log(this.props);
    return(

      <Jumbotron fluid>{this.props.display}
        <Container >
          <h1>{this.props.displayCityName}</h1>
          <p>
            Lattitude: {this.props.displayLat} Longitude: {this.props.displayLon}
          </p>
        </Container>
      </Jumbotron>

    );
  }

}

export default City;
