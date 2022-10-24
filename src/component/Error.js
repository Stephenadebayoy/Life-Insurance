import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Error = () => {
  return (
    <section className='section' style={{ textAlign: 'center' }}>
      <p>page not found kindly click to sign up</p>
      <Button variant='contained'>
        <Link to='/form' style={{ textDecorationLine: 'none', color: '#000' }}>
          Sign up
        </Link>
      </Button>
    </section>
  );
};

export default Error;
