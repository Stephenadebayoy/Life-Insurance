import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    <Grid alignItems='center' spacing={2}>
      <Grid
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          direction: 'row',
          justifyContent: 'center',
        }}
      >
        <Item>
          <Grid item data-aos='fade-up' data-aos-easing='linear'>
            <Card style={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='200'
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
          <Grid item data-aos='fade-up' data-aos-easing='linear'>
            <Card style={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                image={Pics}
                height='200'
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
          <Grid item data-aos='fade-up' data-aos-easing='linear'>
            <Card style={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                image={Digital}
                height='200'
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
      </Grid>
    </Grid>
  );
}
