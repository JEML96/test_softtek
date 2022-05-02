import React from 'react';
import { Nav } from 'react-bootstrap';

function Foot() {
  return (
    <>
      <div
        className='FooterStyle'
        style={{
          textAlign: 'center',

          padding: '3px',
          backgroundColor: '#89f6da',
          color: 'black',
          // position: 'absolute',
          // bottom: '0',
          // width: '100%',
          // height: '60px',
        }}
      >
        <p>
          Author: JEML
          <br />
          <a
            href='mailto:jeml_1996@hotmail.com'
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            jeml_1996@hotmail.com
          </a>
        </p>
      </div>
    </>
  );
}

export default Foot;
