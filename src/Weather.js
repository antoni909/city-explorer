import React from 'react';

class Weather extends React.Component{
  render(){
    return(
      <>
        {this.props.display?
          <div> days array: {this.props.weather} </div>
          : ''
        }
      </>
    );
  }

}

export default Weather;
