import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-warning">
        <Container>
        <Link to={'/'}>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-car-side" />
          {' '}
            Garageguru
           
          </Navbar.Brand>
          </Link>
          <Link className='btn btn-success' to={'/customer'}>
          <i className="fa-solid fa-arrow-right" />
</Link>
        </Container>
      </Navbar>
  )
}

export default Header