import React from 'react';
import InfoAbout from '../Components/About/InfoAbout';
import useAuthentication from '../Hooks/useAuthentication';
// import {Flex} from 'react-bootstrap/';

function About() {
  const [user, isAuthenticated] = useAuthentication();

  var nameNow;
  if (isAuthenticated) {
    nameNow = user.name;
  } else {
    nameNow = 'stranger';
  }
  return (
    <>
      <br />
      <div className='d-flex justify-content-center text-center'>
        <InfoAbout Nombre={nameNow}></InfoAbout>
      </div>
    </>
  );
}

export default About;
