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
import AllPies from './demos/pieVote';

function AppBase(props) {
  console.log(props)
  return (
    <div className="App">
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div>
            <Header/>
          </div>
        </div>
        <div className="ms-Grid-row">
          <Router>
            <Switch>
              <Route path={ROUTE.PIEDEMO}>
                <AllPies/>
              </Route>
              <Route path={ROUTE.HOME}>
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

const App = withContext(AppBase)
export default App
