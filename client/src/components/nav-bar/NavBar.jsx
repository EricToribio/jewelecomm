
import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import { Box } from '@mui/system';
import NavLinks from './NavLinks';

export const NavBar = ({ children }) => {
    const [changeUser, setChangeUser] = useState()
    const logo = require('../static/img/toribio-ecommerce.png')
    const history = useHistory()
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ?
        JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState('')
    useEffect(() => {
        setUser(localStorage.getItem('authTokens') ?
        jwt_decode(localStorage.getItem('authTokens')) :'')
        
    }, [changeUser]);
    
    const refresh = (data) => {
        setChangeUser(data)
    }


    let logout = () => {
        setAuthTokens(null)
        setUser('')
        localStorage.removeItem('authTokens')
        history.push('/')
    }

    return (
        <div >
            <Box sx={{bgcolor: '#252f38'  , px : 2, display : 'flex' ,alignItems :'center' , justifyContent: 'space-between' }}>
                <img className='logo' src={logo} alt="Toribio's Ecommerce" />
                <NavLinks setAuthTokens={setAuthTokens} refresh={refresh}
                logout={logout} setUser={setUser} user={user} changeUser={changeUser}
                 setChangeUser={setChangeUser}/>
            </Box>

            <div>
                {children}
            </div>

        </div>

    )
}
