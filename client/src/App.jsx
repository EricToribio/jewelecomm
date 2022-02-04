
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import { Dashboard } from './views/Dashboard';
import { NavBar } from './components/nav-bar/NavBar';
const App = () => {
 

  return (
    
      <BrowserRouter >
      <Switch>
        <Route exact path='/'>
        <NavBar>
          <Dashboard/>
        </NavBar>
        </Route>
        
      </Switch>
      </BrowserRouter>
    
  )
};

export default App;
