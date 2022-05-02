import React, { useLayoutEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuthentication from '../../Hooks/useAuthentication';

const Profile = () => {
  // const { userhere, isAuthenticatedHere } = useAuthentication();
  const { user, isAuthenticated, logout } = useAuth0();

  // useLayoutEffect(

  // ,[])

  return (
    isAuthenticated && (
      <div id='Profile'>
        <div className='.col 6'></div>
        <div className='.col 6'>
          <NavDropdown
            title={
              <div className='containerImg'>
                <img src={user.picture} alt={user.name} />
              </div>
            }
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item href='/profile'>{user.name}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    )
  );
};

export default Profile;
