import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
} from '@material-ui/core/';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  styled,
  useRadioGroup,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@material-ui/lab/LocalizationProvider';
// import { MobileDatePicker } from '@material-ui/lab/MobileDatePicker';
import RadioButton from '../component/Radio';
import { makeStyles } from '@material-ui/core';
import { useState, useRef } from 'react';
// import LifePlan from '../LifePlan';
// import Existing from '../component/Existin';
import send from '@emailjs/browser';

const useStyles = makeStyles((theme) => ({
  card: {},
}));

const Form = ({ setUser }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
    setTimeout(() => {
      alert('Approved');
      navigate('/dashboard');
    }, 4000);

    setTimeout(() => {
      setButton();
      setButton(<Loading />);
    }, 500);
    console.log(details);

    send
      .sendForm(
        'service_zxc8ih1',
        'template_b4j5pql',
        form.current,
        'swAsg2JNoQe85Vkt2'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    gender: '',
    phoneNumber: '',
    amount: '',
    describe: '',
    comments: '',
    lifePlan: '',
  });
  const [button, setButton] = useState('submit');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  // radio

  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: 'red',
    },
  }));

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  return (
    <div style={{ paddingTop: '1.3rem' }}>
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
          <form action='' ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label='First Name'
                  placeholder='Enter first name'
                  variant='outlined'
                  type='text'
                  fullWidth
                  required
                  onChange={handleChange}
                  name='firstName'
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label='Last Name'
                  placeholder='Enter last name'
                  variant='outlined'
                  fullWidth
                  required
                  type='text'
                  onChange={handleChange}
                  name='lastName'
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type='text'
                  label='Address'
                  placeholder='Type your address'
                  variant='outlined'
                  fullWidth
                  required
                  onChange={handleChange}
                  name='address'
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label='City'
                  type='text'
                  placeholder='Type your city'
                  variant='outlined'
                  fullWidth
                  required
                  onChange={handleChange}
                  name='city'
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label='State'
                  type='text'
                  placeholder='Type your state'
                  variant='outlined'
                  fullWidth
                  required
                  onChange={handleChange}
                  name='state'
                />
              </Grid>
              {/* <Grid xs={12} item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label='Date of birth'
                    disableCloseOnSelect={false}
                    value={date}
                    onChange={onChange}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth required />
                    )}
                  />
                </LocalizationProvider> */}
              {/* </Grid> */}
              {/* <Grid xs={12} item>
                <RadioButton />
              </Grid>
              <Grid xs={12} item>
                <Existing />
              </Grid> */}
              <Grid xs={12} item>
                <TextField
                  type='number'
                  label='Zip Code'
                  placeholder='Enter your Zip code'
                  variant='outlined'
                  fullWidth
                  required
                  onChange={handleChange}
                  name='zipCode'
                />
              </Grid>

              <Grid xs={12} item>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel id='demo-simple-select-label'>
                    Select your life plan
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    defaultValue='Please Select'
                    label='Select your life plan'
                    onChange={handleChange}
                    name='lifePlan'
                    required
                    placeholder='Select life plan'
                  >
                    <MenuItem value='5 Year Term'>5 Years Term</MenuItem>
                    <MenuItem value='10 Years Term'>10 Years Term</MenuItem>
                    <MenuItem value='Universal Life'>Universal Life</MenuItem>
                    <MenuItem value='Whole Life'>Whole Life</MenuItem>
                    <MenuItem value='I am unsure and need adivce'>
                      I am unsure and need adivce
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type='email'
                  label='Email'
                  placeholder='Enter email'
                  variant='outlined'
                  fullWidth
                  required
                  onChange={handleChange}
                  name='email'
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
                  onChange={handleChange}
                  name='phoneNumber'
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
                  onChange={handleChange}
                  name='amount'
                />
              </Grid>
              {/* radio button */}
              <Grid xs={12} item>
                <FormControl required>
                  <FormLabel id='demo-radio-buttons-group-label'>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='female'
                    name='gender'
                  >
                    <MyFormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Female'
                    />
                    <MyFormControlLabel
                      value='male'
                      control={<Radio />}
                      label='Male'
                    />
                    <MyFormControlLabel
                      value='other'
                      control={<Radio />}
                      label='Other'
                    />
                  </RadioGroup>
                </FormControl>
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
                  onChange={handleChange}
                  name='describe'
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
                  onChange={handleChange}
                  name='comments'
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                  style={{ background: isActive ? '#fff' : '' }}
                >
                  {button}
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
