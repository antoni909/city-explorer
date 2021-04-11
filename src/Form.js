import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class FormSearch extends React.Component{
  render(){
    return(
      <Form onSubmit={this.props.onSubmit} >
        <Form.Row>
          <Col>
            <Form.Control
              onInput={this.props.onInput}
              size="lg" type="text"
              placeholder="city, state, country" />
          </Col>
          <Col>
            <Button
              variant="dark"
              type="submit" size="lg"
            >🪐 Explore!
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
export default FormSearch;
