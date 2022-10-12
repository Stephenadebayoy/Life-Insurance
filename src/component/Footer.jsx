import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <Typography
          level={5}
          style={{ color: '#000', textAlign: 'center', marginTop: '5rem' }}
        >
          Life Insurance <br />
          &copy;Copyright All rights reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
