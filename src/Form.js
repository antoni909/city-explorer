import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class FormSearch extends React.Component{
  render(){
    // component exported as FormSearch and imported on App as Form...why is this?
    return(
      <Form onSubmit={this.props.onSubmit} >
        <Row>
          <Col>
            <Form.Control
              onInput={this.props.onInput}
              size="lg" type="text"
              placeholder="city, state, country, planet, solar system, galaxy, universe, dimension, uhmm... multiverse? " />
            <Button
              variant="primary"
              type="submit" size="lg"
            >🪐 Explore!
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default FormSearch;
