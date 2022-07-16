import Header from './Components/Header'
import './CSS/index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

const textStyle = {
  font: 'Times New Roman',
  paddingTop: 0,
  paddingLeft: 5,
  marginLeft: 20,
  fontSize: 15,
  color: '#3ccf59',
  backgroundColor: '#202020',
};

const transparentTextStyle = {
  font: 'Times New Roman',
  paddingTop: 0,
  paddingLeft: 5,
  marginLeft: 20,
  fontSize: 15,
  color: '#3ccf59',  
};

function App() {
  return (
    <Container style = {{backgroundColor: '#505050'}}>
      
      <Header title = "Images Gallery"> </Header>
      <Form>
        <Form.Group className="mb-3" controlId="formSearchKeyword">
          <Form.Label style = {transparentTextStyle}>Search for an Image</Form.Label>
          <Form.Control style = {textStyle} placeholder="Enter your search" />
        </Form.Group>
        <Button style = {textStyle} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    
  );
}

export default App;