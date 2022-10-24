import React from 'react';

import { Paper, Typography, Grid } from '@material-ui/core/';

import './syle.css';

import Logo from '../asset/Main.jpg';

export default function Main() {
  return (
    <div>
      <Paper
        sx={{ p: 2 }}
        elevation={0}
        className='cards'
        style={{
          margin: '0 auto',
          padding: '2rem 3rem',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',

          justifyContent: 'space-evenly',
        }}
      >
        <Typography gutterBottom variant='h5' align='center'>
          Life insurance offers you Long-term Savings
        </Typography>

        <Grid item>
          <img src={Logo} alt='' xs={12} sm={6} />
        </Grid>
      </Paper>
    </div>
  );
}
