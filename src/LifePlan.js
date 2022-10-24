import * as React from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

export default function LifePlan({ name, onChange }) {
  // const handleChange = (event) => {
  //   setLifePlan(event.target.value);
  // };

  return (
    <div></div>
    // <Box sx={{ minWidth: 120 }}>
    //   <FormControl fullWidth variant='outlined'>
    //     <InputLabel id='demo-simple-select-label'>
    //       Select your life plan
    //     </InputLabel>
    //     <Select
    //       labelId='demo-simple-select-label'
    //       id='demo-simple-select'
    //       defaultValue='Please Select'
    //       value={lifePlan}
    //       label='Select your life plan'
    //       onChange={handleChange}
    //       name='lifePlan'
    //     >
    //       <MenuItem value={'5 Year Term'}>5 Years Term</MenuItem>
    //       <MenuItem value={'10 Years Term'}>10 Years Term</MenuItem>
    //       <MenuItem value={'Universal Life'}>Universal Life</MenuItem>
    //       <MenuItem value={'Whole Life'}>Whole Life</MenuItem>
    //       <MenuItem value={'I am unsure and need adivce'}>
    //         I am unsure and need adivce
    //       </MenuItem>
    //     </Select>
    //   </FormControl>
    // </Box>
  );
}
