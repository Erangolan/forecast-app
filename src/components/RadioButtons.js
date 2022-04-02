/* eslint-disable no-unused-vars */
import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

export default function RowRadioButtonsGroup({ onChange }) {
  const [value, setValue] = React.useState('celsius')

  const handleChange = (event) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return (
    <FormControl >
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="celsius" control={<Radio />} label="Cel" />
        <FormControlLabel size="small" value="fahrenheit" control={<Radio />} label="Fahr" />
      </RadioGroup>
    </FormControl>
  )
}