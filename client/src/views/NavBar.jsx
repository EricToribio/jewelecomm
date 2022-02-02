
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import { Box } from '@mui/system';
import NavLinks from '../components/nav-bar/NavLinks';

export const NavBar = ({ children }) => {
    const [changeUser, setChangeUser] = useState('')
    const logo = require('../components/static/img/toribio-ecommerce.png')
    const history = useHistory()
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ?
        JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ?
        jwt_decode(localStorage.getItem('authTokens')) : null)
    let logout = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')
    }
        console.log(user)
    return (
        <div >
            <Box sx={{bgcolor: '#252f38'  , px : 2, display : 'flex' ,alignItems :'center' , justifyContent: 'space-between' }}>
                <img className='logo' src={logo} alt="Toribio's Ecommerce" />
                <NavLinks setAuthTokens={setAuthTokens} 
                logout={logout} changeUser={changeUser} setChangeUser={setChangeUser}/>
            </Box>

            <div>
                {children}
            </div>

        </div>

    )
}
