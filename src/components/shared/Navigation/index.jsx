import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  const NavLink = (props) => {
    return (
      <Nav.Link
        href={props.href}
        onClick={e => {
          e.preventDefault();
          props.navigate(props.href);    
        }}
      >
        {props.children}
      </Nav.Link>
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Hooks & Data</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" component={NavLink}>Home</Link>
          
          <NavDropdown title="Hooks" id="hooks">
            <Link to="/state" component={NavLink}>State</Link>
            <Link to="/effect" component={NavLink}>Effect</Link>
            <Link to="/ref" component={NavLink}>Ref</Link>
            <Link to="/memo" component={NavLink}>Memo</Link>
            <Link to="/context" component={NavLink}>Context</Link>
          </NavDropdown>
          
          <NavDropdown title="Data" id="data">
            <Link to="/local-data" component={NavLink}>Local Data</Link>
            <Link to="/remote-data" component={NavLink}>Remote Data</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Navigation;