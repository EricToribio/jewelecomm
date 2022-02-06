
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import { Dashboard } from './views/Dashboard';
const App = () => {
 

  return (
    
      <BrowserRouter >
      <Switch>
        <Route exact path='/'>
          <Dashboard/>
        </Route>
        
      </Switch>
      </BrowserRouter>
    
  )
};

export default App;
