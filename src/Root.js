import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import App from './components/App';
import Loading from './components/Loading';
import Login from './components/auth/Login.js';

export default function Root() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

