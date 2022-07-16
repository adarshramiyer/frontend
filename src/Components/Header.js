import React from 'react';
import { Navbar } from 'react-bootstrap';

{
  var BLACK = '#000000'
  var LIGHTGREEN = '#3ccf59'
}

const navbarStyle = {
    backgroundColor: '#202020',
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 2,
    paddingBottom: 30,

    
};

const navbarTitleStyle = {
    font: 'Times New Roman',
    color: LIGHTGREEN,
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: 0,
}

const navbarTextStyle = {
    font: 'Times New Roman',
    color: LIGHTGREEN,
    textDecoration: 'none',
    fontWeight: 'normal',
    paddingLeft: 50,
    paddingBotttom: 100,
    marginBottom: 100,
    fontSize: 40,
}

const Header = (props) => {
    return (
      <Navbar style={navbarStyle} variant="light">
        <Navbar.Brand style={navbarTitleStyle} href="/">
          {props.title}
        </Navbar.Brand>
        <Navbar.Brand style={navbarTextStyle} href="/">
          Second Tab
        </Navbar.Brand>
      </Navbar>
    );
};

export default Header;