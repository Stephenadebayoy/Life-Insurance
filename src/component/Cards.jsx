import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import Pics from '../asset/lifeinsur.webp';
import Family from '../asset/family2.webp';
import Digital from '../asset/digital.webp';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <Stack spacing={2} alignItems='center'>
      <Stack
        spacing={0.8}
        gap={1}
        flexWrap='wrap'
        direction='row'
        justifyContent='center'
      >
        <Item>
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image={Family}
                alt='Family Insurance'
                padding='20px'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Putting smilling on families
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Happy family and toddler pointing at a laptop screen, smiling
                  at their massive insurance
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Item>
        <Item>
          {' '}
          <Grid item>
            <Card
              sx={{
                maxWidth: 345,
                padding: '0 1.5rem',
              }}
            >
              <CardMedia
                component='img'
                image={Pics}
                height='140'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Documentation and Policy
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Life insurance policy terms of use concept
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Item>
        <Item>
          <Grid item>
            <Card
              sx={{
                maxWidth: 345,
                padding: '0 1.5rem',
              }}
            >
              <CardMedia
                component='img'
                image={Digital}
                height='140'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Making your life better
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Life insurance concept with magnifier in hand. family
                  protection. magnifying glass and infographic on virtual
                  screen.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Item>
      </Stack>
    </Stack>
  );
}
