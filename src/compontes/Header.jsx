import React from 'react';
import './Header.css'
import { Button,Table } from 'react-bootstrap';

const Header = () => {
  const styless = {
    color: 'blue'
  };
  function showAlert() {
    alert('hello');
  }

  return (
    <div>
      <h1 style={{ color: 'yellow' }}>compontes 1</h1>
      <Button onDoubleClick={showAlert} variant="primary">
        onclick
      </Button>{' '}
      <h1 style={styless}>comontes 1</h1>
      <h1 className='ext'>extanel</h1>
      <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </div>
      
    </div>
  );
};

export default Header;
