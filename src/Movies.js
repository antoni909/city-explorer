import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


class Movies extends React.Component{
  render(){

    // Tasks:
    //      the problem: 404 server errors: cannot retrieve some images
    //      temp solution: placeholder image with friendly message: 'cannot retrieve image...'
    // add background opacity to text
    // only display working paths for posters or add placeholder image

    return(
      <>
        {this.props.display?
          <Container>
            <Carousel>
              {this.props.movieData.data.map( (element, index) => {

                return(
                  <Carousel.Item key={index} interval={5000}>
                    <img
                      className="d-block w-100"
                      src={`https://image.tmdb.org/t/p/w400${element.poster}`}
                      alt={element.title}
                    />
                    <Carousel.Caption>
                      <h2>{element.title}</h2>
                      <p>{element.description}</p>
                      <p> Total Votes: {element.votesTotal}</p>
                      <p>Average Vote: {element.voteAverage}</p>
                      <p>Released on: {element.released}</p>
                      <p>Popularity: {element.popularity}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );

              })}
            </Carousel>
          </Container> : ''
        }
      </>
    );
  }
}

export default Movies;
