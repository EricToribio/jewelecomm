
import './App.css';
import { Registration } from './components/LogAndReg/Registration';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import { LogAndRegView } from './views/LogAndRegView';
import { Login } from './components/LogAndReg/Login';
import { Dashboard } from './views/Dashboard';
import { NavBar } from './views/NavBar';
const App = () => {
 

  return (
    
      <BrowserRouter >
      <Switch>
        <Route exact path='/'>
        <NavBar>
          <Dashboard/>
        </NavBar>
        </Route>
        <Route exact path='/registration'>
          <LogAndRegView>
            <Registration/>
          </LogAndRegView>
        </Route>
        <Route exact path='/login'>
          <LogAndRegView>
            <Login/>
          </LogAndRegView>
        </Route>
      </Switch>
      </BrowserRouter>
    
  )
};

export default App;
