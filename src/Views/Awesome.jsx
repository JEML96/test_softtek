import React from 'react';
import ShowPokemon from '../Components/Awesome/ShowPokemon';
import useAuthentication from '../Hooks/useAuthentication';
import { Row, Col } from 'react-bootstrap';

function Awesome() {
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
      <div>
        <ShowPokemon />
      </div>
    );
  }
}

export default Awesome;
