import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';

function Error() {
  let navigate = useNavigate();
  return (
    <div>
      <Row className='d-flex justify-content-center text-center'>
        <h1>Error, Page not found :(</h1>
      </Row>
      <Row className='d-flex justify-content-center text-center'>
        <img src={require('../Img/img6.jpg')} style={{ width: '30%' }} />
      </Row>

      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Return to the home page
      </Button>
    </div>
  );
}

export default Error;
