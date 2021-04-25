import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import App from './App';

export default function Root() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
