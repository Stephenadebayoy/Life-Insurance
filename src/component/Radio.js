import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
export default function RadioButton() {
  // Style the form control
  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      // Change color here
      color: 'red',
    },
  }));

  function MyFormControlLabel(props) {
    // MUI UseRadio Group
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <MyFormControlLabel value='female' control={<Radio />} label='Female' />
        <MyFormControlLabel value='male' control={<Radio />} label='Male' />
        <MyFormControlLabel value='other' control={<Radio />} label='Other' />
      </RadioGroup>
    </FormControl>
  );
}
