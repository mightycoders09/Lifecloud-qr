import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProfileEdit from './pages/profile/edit-proile';
import ProfileCreate from './pages/profile/ProfileCreate';
import ProfileDetails from './pages/profile/ProfileDetails';
import MemoryCreation from './components/memory/memoryCreation';
import { UserAndprofiles } from './pages/userpage/user-and-profile';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

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
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/createprofile/:id" >
          <ProfileCreate />
        </Route>
        <Route exact path="/profiledetails/:id" >
          <ProfileDetails />
        </Route>
        <Route exact path="/userprofiles/:id" >
          <UserAndprofiles />
        </Route>
        <Route exact path="/editprofiles/:id" >
          <ProfileEdit />
        </Route>
        <Route exact path="/memorycreation/:profileid" >
          <MemoryCreation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
