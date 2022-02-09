
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';


import { Box } from '@mui/system';
import NavLinks from './NavLinks';
import { Button, Grid } from '@material-ui/core';

export const NavBar = ({setAuthTokens,loggedInUser, logout, changeUser,setUser,user,setChangeUser }) => {
    const logo = require('../static/img/toribio-ecommerce.png')
 

    return (
        <div >
            <Box sx={{bgcolor: '#252f38'  , px : 2, display : 'flex' ,alignItems :'center' , justifyContent: 'space-between' }}>
                <div    >

                <img className='logo' src={logo} alt="Toribio's Ecommerce" />
                </div>
                <Grid>

                <div className='pe-3'>

                {/* <div> */}
                    <NavLinks setAuthTokens={setAuthTokens}
                    logout={logout} setUser={setUser} user={user} changeUser={changeUser}
                    setChangeUser={setChangeUser} loggedInUser={loggedInUser}/>
                </div>
                    </Grid>
                    
            </Box>

             
                
            <div>
            
            </div>

        </div>

    )
}
