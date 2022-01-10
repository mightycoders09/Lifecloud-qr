import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import ProfileCreate from './pages/profile/ProfileCreate';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { AuthContext } from './context/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useContext } from 'react';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>
        <Route exact path="/createprofile/:id" >
          <ProfileCreate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
