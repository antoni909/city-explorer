import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


class Movies extends React.Component{

  render(){
    // console.log('this.props.movieData: ',this.props.movieData);
    console.log('this.props.movieData.data: ',this.props.movieData.data);
    return(
      <>
        {this.props.display?
          <Container>
            <Carousel >
              Movies Related to: 'Some City Search'
              {this.props.movieData.data.map( (element, index) => {
                return(
                  <Carousel.Item key={index}>
                    <Carousel.Caption>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <p> Total Votes: {element.votesTotal}, Average Vote: {element.voteAverage}</p>
                      <p>Released on: {element.released}, Popularity: {element.popularity}</p>
                    </Carousel.Caption>
                    <img
                      className="d-block w-100"
                      src={element.poster}
                      alt={element.title}
                    />
                  </Carousel.Item>
                );
              })
              }
            </Carousel>
          </Container> : ''
        }
      </>
    );
  }
}

export default Movies;
