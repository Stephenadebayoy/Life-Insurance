import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Typography
          variant='h5'
          style={{ marginTop: '5rem', paddingBottom: '2rem' }}
        >
          Application submitted {user?.firstName}
        </Typography>

        <Button variant='contained'>
          <Link
            to='/'
            style={{
              color: '#000',
              textDecorationLine: 'none',
              border: 'transparent',
            }}
          >
            back to home
          </Link>
        </Button>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
