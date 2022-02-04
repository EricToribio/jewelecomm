/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row } from '@mui-treasury/components/flex';
import { FormControl, InputLabel } from '@mui/material';
import LoginModal from '../modals/LoginModal'

import { MenuItem, Select } from '@mui/material';
import { Grid } from '@material-ui/core';
export default ({ logout, changeUser, setChangeUser, setAuthTokens, setUser, user, refresh }) => {
  const history = useHistory()

  const buttonStyle = {
    ':hover': {
      bgcolor: '#ef5350', // theme.palette.primary.main
      color: 'white',
    },
    color: '#fff',
    fontWeight: 'bold'
  }



  return (
    <div className='mx-5 bg-white'>
   

   
        {user == '' ?
          <ul className='navlinks d-flex pt-3 px-3'>
            <li className='list-unstyled ps-2'>
              <LoginModal
                setAuthTokens={setAuthTokens}
                setChangeUser={setChangeUser}
                setUser={setUser}
              >
                Log In
              </LoginModal>
            </li>
          </ul>
          :
          <FormControl
          item xs={12}
          // sx={{
          //   color: 'white',
          //   bgcolor : 'white'
          // }}
          fullWidth
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                
              }}
              fullWidth
              label="Category"
              name="category"
              autoComplete="cuisine"
              
            >
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
              <MenuItem value="quick">Quick And Easy</MenuItem>
              <MenuItem value="wineAndDine">Wine And Dine</MenuItem>
              <MenuItem value="bakedGoods">Baked  Goods</MenuItem>
            </Select>
          </FormControl>


        }
       
    </div>
  );
};
