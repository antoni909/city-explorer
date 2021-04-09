import React from 'react';
import Card from 'react-bootstrap/Card';

class Err extends React.Component{
  render(){
    // console.log('i am an error message');
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

// try catch block concept

// catch what happens when something goes wrong

// try{ await code... } encapsulate code

// catch( err ){ //logic goes here for displaying the err if try fails }
//  use err as the param

// debugger then err then err. see what options it gives.. find the err.response to get full data to find useful data

// can now set err.message to state : maybe error: error.message

// can use ternary to show error in the render... something like:

// this.state.error ? <>{this.state.error}<> : ''

