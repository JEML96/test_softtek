import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function useAuthentication(key, initialValue) {
  const { user, isAuthenticated } = useAuth0();
  return [user, isAuthenticated];
}

export default useAuthentication;
