import React from 'react';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';


class Weather extends React.Component{
  render(){

    // console.log(this.props.weather);
    let dailyForecast = this.props.weather;

    return(
      <>
        {this.props.display?
          <>
            {dailyForecast.map( (element,idx) => {
              return(
                <Card key={idx}>
                  <Card.Body>
                    <Card.Title>
                      Date: {element.date}
                      {/* Date: {element.time} */}
                    </Card.Title>
                    <Card.Text>
                      Description: {element.description}
                      {/* Description: {element.forecast} */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            } )}
          </>: ''}
      </>
    );

  }

}

export default Weather;

// WIP carousel
// render(){
//   let day = this.props.weather.map( (element,index) => {
//     console.log(element);
//     return (
//       <div key={index}>
//         <Carousel.Item>
//           <Carousel.Caption>
//             <h3>{element.valid_date}</h3>
//             <p>{element.weather.description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </div>
//     );
//   });

//   return(
//     <>
//       {this.props.display? <Carousel>{day}</Carousel> : ''}
//     </>
//   );
// }
