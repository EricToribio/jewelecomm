
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown } from '../components/nav-bar/Dropdown';
import jwt_decode from "jwt-decode";
import { Box } from '@mui/system';

export const NavBar = ({ children }) => {
    const logo = require('../static/img/toribio-ecommerce.png')
    const history = useHistory()
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ?
        JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ?
        jwt_decode(localStorage.getItem('authTokens')) : null)
    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')
    }

    return (
        <div >
            <Box sx={{bgcolor: '#252f38'  , px : 2, display : 'flex' ,alignItems :'center' , justifyContent: 'space-between' }}>
                <img className='logo' src={logo} alt="Toribio's Ecommerce" />
                <Dropdown />
            </Box>

            <div>
                {children}
            </div>

        </div>

    )
}
