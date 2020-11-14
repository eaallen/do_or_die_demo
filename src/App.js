import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withContext } from './context';
import ROUTE from './constant/router'
import Home from './demos/home'
import Header from './demos/header'
function AppBase(props) {
  console.log(props)
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <Router>
        <Switch>
          <Route path={ROUTE.HOME}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const App = withContext(AppBase)
export default App
