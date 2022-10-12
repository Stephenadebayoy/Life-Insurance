import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import RadioButton from '../component/Radio';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import LifePlan from '../LifePlan';
import Existing from '../component/Existin';

const useStyles = makeStyles((theme) => ({
  card: {},
}));

const Form = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className='App'>
      <Typography gutterBottom variant='h6' align='center'>
        Life insurance offers you Long-term Savings
      </Typography>
      <Card
        style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}
        className={classes.card}
      >
        <CardContent>
          <Typography gutterBottom variant='h5' align='center'>
            Life insurance form
          </Typography>
          <Typography
            gutterBottom
            variant='body2'
            component='p'
            color='textSecondary'
          >
            Kindly fill the form below for approval
          </Typography>
          <form action=''>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label='First Name'
                  placeholder='Enter first name'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label='Last Name'
                  placeholder='Enter last name'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label='Address'
                  placeholder='Type you address'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label='City'
                  placeholder='Type you address'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label='State / Province'
                  placeholder='Type your state'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label='Date of birth'
                    disableCloseOnSelect={false}
                    value={date}
                    onChange={onChange}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth required />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid xs={12} item>
                <RadioButton />
              </Grid>
              <Grid xs={12} item>
                <Existing />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type='text'
                  label='Zip Code'
                  placeholder='Enter your Zip code'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <LifePlan />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type='email'
                  label='Email'
                  placeholder='Enter email'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type='number'
                  label='phone'
                  placeholder='Enter phone number'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type='number'
                  label='How much life insurance do you want us to quote'
                  placeholder='Type your amount'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  multiline
                  rows={4}
                  type='message'
                  label='Describe any health issues'
                  placeholder='Type your issues'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  multiline
                  rows={4}
                  type='message'
                  label='Please add any additional comments or questions'
                  placeholder='Type your comments'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
