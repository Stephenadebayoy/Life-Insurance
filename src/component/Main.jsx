import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import './syle.css';

import Logo from '../asset/Main.jpg';
import CardMedia from '@mui/material/CardMedia';

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
