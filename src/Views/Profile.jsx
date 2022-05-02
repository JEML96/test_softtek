import React from 'react';
import useAuthentication from '../Hooks/useAuthentication';
import { Row, Container } from 'react-bootstrap';

function Profile() {
  const [user, isAuthenticated] = useAuthentication();

  if (!isAuthenticated) {
    return (
      <div>
        <Row className='d-flex justify-content-center text-center'>
          <h1>Usted no tiene permiso para ver esta página :(</h1>
        </Row>
        <Row className='d-flex justify-content-center text-center'>
          <img src={require('../Img/img6.jpg')} style={{ width: '30%' }} />
        </Row>
      </div>
    );
  } else {
    return (
      <div style={{ paddingLeft: '10%' }}>
        <h2>Your information :)</h2>
        <div className='containerImg'>
          <img src={user.picture} alt={user.name} />
        </div>
        <br />
        <br />
        <br />
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Name: </p>
        <p style={{ display: 'inline' }}>{user.name}</p>
        <br />
        <p style={{ fontWeight: 'bold', display: 'inline' }}>E-mail: </p>
        <p style={{ display: 'inline' }}>{user.email}</p>
        <br />
      </div>
    );
  }
}

export default Profile;
