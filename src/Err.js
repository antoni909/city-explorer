import React from 'react';
import Card from 'react-bootstrap/Card';

class Err extends React.Component{
  render(){
    return(
      <>
        {this.props.displayError?
          <Card>
            <Card.Body>{this.props.err}: {this.props.errMessage}</Card.Body>
          </Card> :
          ''}
      </>
    );
  }
}

export default Err;

