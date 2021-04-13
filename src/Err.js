import React from 'react';
import Card from 'react-bootstrap/Card';

class Err extends React.Component{
  render(){
    return(
      <>
        {this.props.displayError?
          <Card>
            <Card.Body>
              <Card.Text>
                {this.props.err}: {this.props.errMessage}
              </Card.Text>
              <Card.Text>
                Server Error: {this.props.serverErr}
              </Card.Text>
            </Card.Body>
          </Card> :
          ''}
      </>
    );
  }
}

export default Err;

