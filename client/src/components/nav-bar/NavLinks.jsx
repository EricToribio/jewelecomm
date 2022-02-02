/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row } from '@mui-treasury/components/flex';
import Button from '@mui/material/Button';
import LoginModal from '../modals/LoginModal'
import axios from 'axios';

export default ({logout, changeUser, setChangeUser, setAuthTokens}) => {
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
    <div className='mx-5'>
      <Row
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {changeUser == '' ?
        <ul className='navlinks d-flex pt-3 px-3'>
          <li className='list-unstyled ps-2'>
            <LoginModal setAuthTokens={setAuthTokens} setChangeUser={setChangeUser} >Log In</LoginModal>
          </li>
          </ul>
          :
          <ul className='navlinks d-flex pt-3 px-3'>
          {/* <li className='list-unstyled pe-5'>
            <Button component={Link} to={`/dashboard/${user._id}`}
              
              sx={buttonStyle}
            >Home</Button>
          </li> */}
          <li className='list-unstyled pe-5'>
            <Button component={Link} to='/recipes'
              sx={buttonStyle}
            >Blog</Button>
          </li>
          <li className='list-unstyled pe-5'>
            <Button onClick={logout}
              sx={buttonStyle}
            >Log out</Button>
          </li>
        </ul>
          }
      </Row>
    </div>
  );
};
