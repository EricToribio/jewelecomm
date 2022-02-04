import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Dashboard = () => {
    const history = useHistory()
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/logged/in')
    //     .then(res => {
    //         console.log(res)
    //         res.data.error ? 
    //         history.push('/login')
    //         : console.log('success')
    //     })
    // })

  return (
      <div>
          

      </div>
  )
};
