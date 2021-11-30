import Home from "./Home";
import Favorites from "./Favorites";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route  path='/' exact>
            <Home/>
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
