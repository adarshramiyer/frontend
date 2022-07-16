import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function Search() {
  return (
    <Container className = "mt-20">
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder = "Search for new image..." />
              </Col>
              <Col>
                <Button variant = "secondary" type = "submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search;