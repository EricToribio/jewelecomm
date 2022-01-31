import React, { useState } from 'react';
import Select from '@material-ui/core/Select'
import { FormControl, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel'; 


export const Dropdown = () => {
  const [logout, setLogout] = useState('Hello')
  const history = useHistory()

  const handleChange = (e) => {
    e.preventDefault()
    setLogout(e.target.value)
    history.push(e.target.value)
    console.log(e.target.value)
  }

  return (
    <FormControl
      sx={{ width: 250 }}
    >
      <InputLabel 
      sx={{color :'#ffff'}}
      id="nav-drop"
      >Logout</InputLabel>
      <Select
      
        labelId="nav-drop"
        variant='outlined'
        sx={{bgcolor : "#fff"}}
        value={logout}
        label="Age"
        onChange={handleChange}
        disableUnderline={true}
        fullWidth

      >

        <MenuItem value="/edit/account" >Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

    </FormControl>
  )
}