import React, {useState, useEffect} from 'react';
import axios from "axios"
import { Registration } from './components/Registration';
const App = () => {
  const [members, setMembers] = useState([])

  // useEffect(() => {
  //   axios.get('/members')
  //   .then(res => {
  //     console.log(res.data.members)
  //     setMembers(res.data.members)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },[])
  return (
    <div>
    <Registration/>
    </div>
  )
};

export default App;
