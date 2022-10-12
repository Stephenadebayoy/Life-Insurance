import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function LifePlan() {
  const [lifePlan, setLifePlan] = React.useState('');

  const handleChange = (event) => {
    setLifePlan(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>
          Select your life plan
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          defaultValue='Please Select'
          value={lifePlan}
          label='Select your life plan'
          onChange={handleChange}
        >
          <MenuItem value={'5 Year Term'}>5 Years Term</MenuItem>
          <MenuItem value={'10 Years Term'}>10 Years Term</MenuItem>
          <MenuItem value={'Universal Life'}>Universal Life</MenuItem>
          <MenuItem value={'Whole Life'}>Whole Life</MenuItem>
          <MenuItem value={'I am unsure and need adivce'}>
            I am unsure and need adivce
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
